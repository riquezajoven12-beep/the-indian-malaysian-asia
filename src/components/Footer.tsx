import Link from 'next/link';

const footerLinks = {
  news: [
    { name: 'Politics', href: '/news/politics' },
    { name: 'Business', href: '/news/business' },
    { name: 'Education', href: '/news/education' },
    { name: 'Culture', href: '/news/culture' },
    { name: 'Sports', href: '/news/sports' },
  ],
  community: [
    { name: 'Persatuan Directory', href: '/persatuan' },
    { name: 'Temple Finder', href: '/temples' },
    { name: 'Events Calendar', href: '/events' },
    { name: 'Job Board', href: '/jobs' },
    { name: 'Matrimonial', href: '/matrimonial' },
  ],
  education: [
    { name: 'Tamil Schools', href: '/education/schools' },
    { name: 'Scholarships', href: '/education/scholarships' },
    { name: 'Online Courses', href: '/education/courses' },
    { name: 'Career Resources', href: '/education/careers' },
    { name: 'Study Abroad', href: '/education/abroad' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Editorial Team', href: '/team' },
    { name: 'Advertise', href: '/advertise' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Contribute', href: '/contribute' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="block mb-5">
              <span className="font-display text-2xl font-extrabold text-white">
                The Indian <span className="text-saffron">Malaysian</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted source for news, education, and cultural preservation of the Indian Malaysian community since 2024.
            </p>
            <div className="flex gap-4">
              {['f', 'X', 'in', 'YT'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:bg-saffron transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display text-lg mb-6 pb-4 border-b border-gold/30 relative">
              News
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.news.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-6 pb-4 border-b border-gold/30 relative">
              Community
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-6 pb-4 border-b border-gold/30 relative">
              Education
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-6 pb-4 border-b border-gold/30 relative">
              About
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            2026 The Indian Malaysian. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/50 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/50 text-sm hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
