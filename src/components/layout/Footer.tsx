import { Link } from "wouter";
import { Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Our Story", href: "/story" },
  { name: "Accomplishments", href: "/accomplishments" },
  { name: "News", href: "/news" },
  { name: "Membership", href: "/membership" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Organization Info with Logo */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo Image Section */}
              <div className="w-20 h-20">
                <img
                  src="/LOGO.png" // Make sure to replace this with the correct path to your logo
                  alt="PhilASIN Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">PhilASIN</h3>
                <p className="text-gray-400">Salt Industry Networks</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              PhilASIN serves as a nexus, bringing together stakeholders from all facets of the salt industry. Through this collaborative platform, it endeavors to catalyze cooperation, spur innovation, and tackle the multifaceted challenges confronting salt farmers and producers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Phil-ASIN/100088679546636/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>

              <a href="https://mail.google.com/mail/u/0/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>

              <a href="tel:+63755421234" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>

              <a href="https://www.google.com/maps/place/Your+Location" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <MapPin className="h-5 w-5" />
              </a>

              {/* YouTube Icon */}
              <a href="https://www.youtube.com/c/YourChannel" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">33 Scout Rallos St, Quezon City, Philippines</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">+63 949 752 6782</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">philippineasin@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Copyright Section */}
        <div className="border-t border-gray-800 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Philippine Association of Salt Industry Networks, Inc. (PhilASIN) All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
