import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define the content sections and navigation (this could be dynamic content as well)
const pageContent = [
  { id: "about", title: "ABOUT", content: "Information about our organization and its mission." },
  { id: "our-story", title: "OUR STORY", content: "The history of how we started and our journey." },
  { id: "accomplishments", title: "ACCOMPLISHMENTS", content: "Key milestones and achievements of our organization." },
  { id: "news", title: "NEWS", content: "Latest updates and press releases related to our industry." },
  { id: "resources", title: "RESOURCES", content: "Various resources for salt industry professionals." },
  { id: "membership", title: "MEMBERSHIP", content: "Information on how to join our network and benefits." },
  { id: "contact-us", title: "CONTACT US", content: "Details on how to reach out to us for inquiries." },
  { id: "board", title: "BOARD OF DIRECTORS", content: "Information about our board and key members." },
  { id: "office", title: "OUR OFFICE", content: "Details of our office location and contact information." },
];

// Navigation Links
const navigation = [
  { name: "ABOUT", href: "/" },
  { name: "OUR STORY", href: "/story" },
  { name: "ACCOMPLISHMENTS", href: "/accomplishments" },
  { name: "NEWS", href: "/news" },
  { name: "RESOURCES", href: "/resources" },
  { name: "MEMBERSHIP", href: "/membership" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNavigation, setFilteredNavigation] = useState(navigation);
  const [filteredContent, setFilteredContent] = useState([]);

  // Real-time filtering of content and navigation
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter navigation items based on search query
    const filteredNav = navigation.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNavigation(filteredNav);

    // Filter content sections based on search query
    const filteredContent = pageContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContent(filteredContent);
  };

  // Scroll to the relevant section based on search result
  const handleSearchResultClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="bg-cover bg-center bg-no-repeat sticky top-0 z-50"
      style={{ backgroundImage: `url('/path/to/your-image.jpg')`, backgroundColor: "white" }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-6">
            <div className="w-100 h-12 rounded-lg flex items-center justify-center">
              <img
                src="/LOGOMAIN.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-wide"></h1>
              <p className="text-sm text-gray-600 mt-1"></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link text-gray-700 hover:text-primary px-3 py-2 ${
                  location === item.href ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Display Search Results */}
        {searchQuery && (
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Results:</h2>
            <ul>
              {filteredContent.map((item) => (
                <li
                  key={item.title}
                  className="mb-4 cursor-pointer"
                  onClick={() => handleSearchResultClick(item.id)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
