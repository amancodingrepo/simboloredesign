import Link from "next/link";

const quickLinks = ["About Us", "Services", "Portfolio", "Blog Insights", "Contact"];
const serviceLinks = [
  "Branding Design",
  "Digital Assets",
  "Motion Graphics",
  "UI/UX Design",
  "Image Manipulation",
];

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-skyblue flex items-center justify-center text-white font-bold font-heading text-xl shadow-glow-primary">
                C
              </div>
              <h2 className="font-heading font-bold text-dark text-2xl">Creatify</h2>
            </div>
            <p className="text-soft mb-8 max-w-sm leading-relaxed">
              We are a premium digital marketing & creative agency dedicated to building
              impactful digital experiences that drive real growth.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-purple hover:text-white hover:border-purple transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-skyblue hover:text-white hover:border-skyblue transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-dark text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-soft">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-dark text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-soft">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-dark text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-soft mb-4">
              Subscribe to get the latest design news, articles, and resources.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-dark hover:bg-black text-white rounded-xl px-4 py-3 text-sm font-bold transition-all shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft font-medium">
          <p>&copy; 2026 Creatify Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-dark transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-dark transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
