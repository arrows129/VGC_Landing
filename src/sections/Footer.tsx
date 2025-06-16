// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 pt-16 pb-10 px-6 md:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">TrackD2C</h2>
          <p className="text-sm text-gray-500">
            Run your D2C brand like a pro — all from one dashboard.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Demo</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm mb-2">support@trackd2c.com</p>
          <p className="text-sm mb-4">+91-90000-12345</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TrackD2C. All rights reserved.
      </div>
    </footer>
  );
}
