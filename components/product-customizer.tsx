'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const Candle3D = dynamic(
  () => import('./candle-3d-scene').then(mod => ({ default: mod.Candle3D })),
  { ssr: false, loading: () => <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">Đang tải 3D...</div> }
)

interface CustomizerProps {
  productId: number
  productName: string
}

export default function ProductCustomizer({ productId, productName }: CustomizerProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [customization, setCustomization] = useState({
    shape: 'round',
    color: 'beige',
    scent: 'floral',
    scentType: 'recommendation',
    addOns: [] as string[],
    message: '',
    music: 'none',
    sticker: false,
    charm: false,
    giftBox: false,
  })

  const steps = [
    {
      title: 'Hình Dáng',
      description: 'Chọn hình dáng nến của bạn',
      component: 'shape',
    },
    {
      title: 'Màu Sắc',
      description: 'Chọn màu sắc ưa thích',
      component: 'color',
    },
    {
      title: 'Mùi Hương',
      description: 'Chọn mùi hương yêu thích',
      component: 'scent',
    },
    {
      title: 'Phụ Kiện',
      description: 'Thêm phụ kiện tùy chọn',
      component: 'addons',
    },
    {
      title: 'Thông Điệp & Nhạc',
      description: 'Thêm thông điệp hoặc nhạc',
      component: 'message',
    },
  ]

  const shapes = [
    { id: 'round', label: 'Tròn', icon: '⭕' },
    { id: 'square', label: 'Vuông', icon: '⬜' },
    { id: 'pillar', label: 'Cột', icon: '🔲' },
  ]

  const colors = [
    { id: 'beige', label: 'Kem', hex: '#F5E6D3' },
    { id: 'brown', label: 'Nâu', hex: '#A0826D' },
    { id: 'white', label: 'Trắng', hex: '#FFFBF7' },
    { id: 'blush', label: 'Hồng', hex: '#EDD5C9' },
    { id: 'mint', label: 'Bạc hà', hex: '#D4E9E8' },
  ]

  const scents = [
    { id: 'floral', label: 'Hoa Lài', category: 'recommendation' },
    { id: 'herbal', label: 'Thảo Mộc', category: 'recommendation' },
    { id: 'vanilla', label: 'Vani', category: 'custom' },
    { id: 'citrus', label: 'Cam Chanh', category: 'custom' },
    { id: 'lavender', label: 'Oải Hương', category: 'custom' },
    { id: 'ocean', label: 'Biển Cả', category: 'custom' },
  ]

  const addOnOptions = [
    { id: 'sticker', label: 'Nhãn Dán Cao Cấp', price: 50000 },
    { id: 'charm', label: 'Charm Trang Trí', price: 75000 },
    { id: 'pouch', label: 'Túi Đựng', price: 100000 },
  ]

  const musicOptions = [
    { id: 'none', label: 'Không' },
    { id: 'ambient', label: 'Âm thanh tự nhiên' },
    { id: 'classical', label: 'Nhạc cổ điển' },
    { id: 'jazz', label: 'Nhạc jazz' },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleAddOn = (id: string) => {
    setCustomization(prev => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter(item => item !== id)
        : [...prev.addOns, id]
    }))
  }

  const calculatePrice = () => {
    let price = 299000
    customization.addOns.forEach(id => {
      const addOn = addOnOptions.find(a => a.id === id)
      if (addOn) price += addOn.price
    })
    return price.toLocaleString('vi-VN')
  }

  const renderStepContent = () => {
    switch (steps[currentStep].component) {
      case 'shape':
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">Chọn hình dáng yêu thích của bạn</p>
            <div className="grid grid-cols-3 gap-4">
              {shapes.map(shape => (
                <button
                  key={shape.id}
                  onClick={() => setCustomization(prev => ({ ...prev, shape: shape.id }))}
                  className={`p-6 rounded-lg border-2 transition-all text-center ${
                    customization.shape === shape.id
                      ? 'border-primary bg-primary bg-opacity-10'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <div className="text-4xl mb-2">{shape.icon}</div>
                  <p className="font-semibold">{shape.label}</p>
                </button>
              ))}
            </div>
          </div>
        )

      case 'color':
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">Chọn màu sắc cho nến thơm của bạn</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {colors.map(color => (
                <button
                  key={color.id}
                  onClick={() => setCustomization(prev => ({ ...prev, color: color.id }))}
                  className={`p-6 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                    customization.color === color.id
                      ? 'border-primary'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full border"
                    style={{ backgroundColor: color.hex, borderColor: color.hex }}
                  />
                  <p className="font-semibold text-sm">{color.label}</p>
                </button>
              ))}
            </div>
          </div>
        )

      case 'scent':
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setCustomization(prev => ({ ...prev, scentType: 'recommendation' }))}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  customization.scentType === 'recommendation'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-accent'
                }`}
              >
                Gợi ý Phong Thủy
              </button>
              <button
                onClick={() => setCustomization(prev => ({ ...prev, scentType: 'custom' }))}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  customization.scentType === 'custom'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-accent'
                }`}
              >
                Tùy Chọn
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scents
                .filter(s => s.category === customization.scentType)
                .map(scent => (
                  <button
                    key={scent.id}
                    onClick={() => setCustomization(prev => ({ ...prev, scent: scent.id }))}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      customization.scent === scent.id
                        ? 'border-primary bg-primary bg-opacity-10'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <p className="font-semibold">{scent.label}</p>
                  </button>
                ))}
            </div>
          </div>
        )

      case 'addons':
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">Thêm phụ kiện để làm nên một quà tặng hoàn hảo</p>
            <div className="space-y-3">
              {addOnOptions.map(addon => (
                <button
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                    customization.addOns.includes(addon.id)
                      ? 'border-primary bg-primary bg-opacity-10'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <div className="text-left">
                    <p className="font-semibold">{addon.label}</p>
                    <p className="text-sm text-muted-foreground">+{addon.price.toLocaleString('vi-VN')} đ</p>
                  </div>
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    customization.addOns.includes(addon.id) ? 'bg-primary border-primary' : 'border-border'
                  }`}>
                    {customization.addOns.includes(addon.id) && <span className="text-white text-sm">✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 'message':
        return (
          <div className="space-y-6">
            <div>
              <label className="block font-semibold text-foreground mb-3">Thông Điệp (Tùy Chọn)</label>
              <textarea
                value={customization.message}
                onChange={e => setCustomization(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Thêm một lời nhắn nhủ hoặc thông điệp..."
                maxLength={100}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {customization.message.length}/100 ký tự
              </p>
            </div>

            <div>
              <label className="block font-semibold text-foreground mb-3">Nhạc Nền (Tùy Chọn)</label>
              <div className="space-y-2">
                {musicOptions.map(music => (
                  <button
                    key={music.id}
                    onClick={() => setCustomization(prev => ({ ...prev, music: music.id }))}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                      customization.music === music.id
                        ? 'border-primary bg-primary bg-opacity-10'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <p className="font-semibold">{music.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <label className="block font-semibold text-foreground mb-3">Hộp Quà (Tùy Chọn)</label>
              <button
                onClick={() => setCustomization(prev => ({ ...prev, giftBox: !prev.giftBox }))}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                  customization.giftBox
                    ? 'border-primary bg-primary bg-opacity-10'
                    : 'border-border hover:border-primary'
                }`}
              >
                <span className="font-semibold">Bọc Hộp Quà Cao Cấp</span>
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  customization.giftBox ? 'bg-primary border-primary' : 'border-border'
                }`}>
                  {customization.giftBox && <span className="text-white text-sm">✓</span>}
                </div>
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
      {/* Left Side: Customizer Panel */}
      <div className="flex flex-col">
        <div className="bg-card rounded-lg p-8 border border-border">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      idx <= currentStep
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-12 h-1 transition-all ${
                        idx < currentStep ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
              Quay Lại
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tiếp Theo
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: 3D Preview & Order Summary */}
      <div className="flex flex-col gap-6">
        {/* 3D Candle Preview */}
        <div className="bg-secondary rounded-lg border border-border overflow-hidden flex-1 min-h-96 lg:h-full">
          <Candle3D
            shape={customization.shape}
            color={customization.color}
            sticker={customization.addOns.includes('sticker')}
            charm={customization.addOns.includes('charm')}
            message={customization.message}
            giftBox={customization.addOns.includes('pouch')}
          />
        </div>

        {/* Order Summary */}
        <div className="bg-secondary rounded-lg p-6 border border-border lg:sticky lg:top-24">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Tóm Tắt Đơn Hàng</h3>

          <div className="space-y-4 mb-6 pb-6 border-b border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sản phẩm:</span>
              <span className="font-semibold text-foreground">{productName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Hình dáng:</span>
              <span className="font-semibold text-foreground capitalize">
                {shapes.find(s => s.id === customization.shape)?.label}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Màu sắc:</span>
              <span className="font-semibold text-foreground capitalize">
                {colors.find(c => c.id === customization.color)?.label}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mùi hương:</span>
              <span className="font-semibold text-foreground">
                {scents.find(s => s.id === customization.scent)?.label}
              </span>
            </div>
            {customization.addOns.length > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phụ kiện:</span>
                <span className="font-semibold text-foreground">{customization.addOns.length} mục</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-primary uppercase mb-2">Tổng Giá</div>
            <div className="text-3xl font-serif font-bold text-foreground">{calculatePrice()} đ</div>
          </div>

          <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all">
            Thêm Vào Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  )
}
