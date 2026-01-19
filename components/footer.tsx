import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Préci</h3>
            <p className="text-sm leading-relaxed">
              Nến thơm thiên nhiên, mang đến sự yên bình và thanh tịnh cho không gian sống của bạn.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Sản phẩm</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Cẩm nang</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+84 (0)123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@preci.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2024 Préci. Bảo lưu tất cả các quyền.</p>
            <div className="flex gap-6">
              <Link href="/policies" className="hover:text-primary transition-colors">Chính sách bảo mật</Link>
              <Link href="/policies" className="hover:text-primary transition-colors">Điều khoản sử dụng</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
