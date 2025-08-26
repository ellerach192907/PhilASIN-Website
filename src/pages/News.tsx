import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { News } from "@shared/schema";

const categoryColors: Record<string, string> = {
  FEATURED: "bg-primary text-white",
  POLICY: "bg-blue-500 text-white",
  INNOVATION: "bg-green-500 text-white",
  EXPORT: "bg-orange-500 text-white",
  TRAINING: "bg-primary text-white",
  RESEARCH: "bg-purple-500 text-white",
  PARTNERSHIP: "bg-teal-500 text-white",
};

export default function NewsLayout() {
  const { data: allNews } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  return (
    <div className="bg-[#355C7D] text-white">
      {/* Header */}
      <header className="flex justify-between p-4 bg-gray-900">
        <div className="text-xl font-bold">Phil ASIN News</div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#">News</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Live</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="p-6">
        {/* Featured Section */}
        <section className="mb-8">
          <div className="relative">
            {/* Featured News Image */}
            <img 
              src="https://via.placeholder.com/1200x600" 
              alt="Featured News" 
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-4">
                Kabayan _TeleRadyo 2023-01-23</div>
                <div className="text-xl text-gray-300">Phil ASIN News</div>
                <Button className="mt-4 bg-blue-500 text-white">Watch Now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid Section */}
        <section className="grid grid-cols-3 gap-6">
          {allNews?.map((news, index) => (
            <Card key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <CardContent>
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className={`mt-2 p-2 ${categoryColors[news.category]}`}>
                  {news.title}
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  {news.date}
                </div>
                <Button className="mt-4 bg-blue-500 text-white">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
