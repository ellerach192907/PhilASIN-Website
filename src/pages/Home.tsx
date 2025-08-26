 import { useQuery } from "@tanstack/react-query";
 import { Link } from "wouter";
 import { ArrowRight, Users, Lightbulb, TrendingUp, Eye } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import type { News } from "@shared/schema";

export default function Home() {
  const { data: featuredNews } = useQuery<News[]>({
    queryKey: ["/api/news/featured"],
  });

      return (
        <div>
          
          {/* Hero Section */}
          <section className="brick-background relative min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('/IMG_5376.JPG')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="grid lg:grid-cols-1 gap-15 items-center text-center">
                <div className="text-white">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ lineHeight: '1.5', fontWeight: '900' }}>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: '900' }}>
                      Philippine Association of Salt Industry Networks, Inc.
                    </span>
                  </h1>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed" style={{ marginTop: '-10px' }}></p>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        <span className="block mb-6">&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="font-bold text-[18px]">Is a national organization dedicated to the advancement of the salt industry in the Philippines.</span>
                        </span>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/story">
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base transition-colors">
                        <ArrowRight className="mr-2 h-5 w-5" />
                        Explore What We Do
                      </Button>
                    </Link>
                    <Link href="/membership">
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base transition-colors">
                        Get Involved with PhilASIN
                      </Button>
                    </Link>
                  </div>

                  {/* New Link Section - Below the buttons */}
                  <div className="mt-8 flex justify-center">
                    <a href="https://www.philippinechamber.com/" passHref>
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base transition-colors">
                        {/* Logos Section - Logo First */}
                        <div className="flex items-center">
                          <img 
                            src="/philippine chamber.jpg" 
                            alt="Logo 1" 
                            className="mr-2 h-8 w-10 object-contain transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-white hover:opacity-90"
                          />
                          {/* Text and Arrow */}
                          A Member of: Philippine Chamber of Commerce and Industry the Voice of Business
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>



      
      {/* Featured News Section */}
       <section className="py-20 bg-gray-100 bg-cover bg-center" style={{         backgroundImage: `url('/IMG_5300.JPG')` }}>
                         <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-50">
                           <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured</h2>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                             
        {/* News Cards */}
      {featuredNews && featuredNews.length > 0 && (
           <>
                <div className="card bg-white bg-opacity-95 backdrop-blur-sm card-hover">
                          <div className="card-content p-6 text-center">
                               <div className="flex justify-center mb-4">
                                   <img 
                                      src="/Salt Congress Nov 26, 2022a.JPG" 
                                      alt="First Philippine Salt Congress" 
                                       className="w-full h-48 object-cover rounded-lg"
                                       style={{ maxWidth: '100%' }} 
                                       />
                                     </div>
                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                       <span className="font-bold">First Philippine Salt Congress, Lingayen Pangasinan - November 2022</span>
                                     </h3>
                                     <p className="text-gray-600">
                                       <span className="font-bold">Historic gathering of salt industry stakeholders.</span>
                                     </p>
                            
                              {/* Link Button */}
                   <a href="/Accomplishments" className="text-blue-600 mt-4 inline-block hover:underline">Go to Accomplishment</a>
                                   </div>
                                 </div>
             
                    <div className="card bg-white bg-opacity-95 backdrop-blur-sm card-hover">
                          <div className="card-content p-6 text-center">
                          <div className="flex justify-center mb-4">
                              <img 
                               src="/PhilASIN Board of Directors.JPG" 
                               alt="Board of Directors Meeting" 
                               className="w-full h-48 object-cover rounded-lg"
                               style={{ maxWidth: '100%' }} 
                                />
                                </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                       <span className="font-bold">Board of Directors</span>
                                     </h3>
                                     <p className="text-gray-600">
                                       <span className="font-bold">Strategic planning and industry oversight.</span>
                                     </p>
                                     <p className="text-gray-500 mt-2">2022-2024</p> {/* Date added here */}
                            
                        {/* Link Button */}
                       <a href="/Story" className="text-blue-600 mt-4 inline-block hover:underline">Go to Our Story</a>
                                   </div>
                                 </div>

                                 <div className="card bg-white bg-opacity-95 backdrop-blur-sm card-hover">
                                   <div className="card-content p-6 text-center">
                                     <div className="flex justify-center mb-4">
                                       <img 
                                         src="/PhilASIN Board of Directors.JPG" 
                                         alt="Analog Dialogue" 
                                         className="w-full h-48 object-cover rounded-lg"
                                         style={{ maxWidth: '100%' }} 
                                       />
                                     </div>
                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                       <span className="font-bold"></span>
                                     </h3>
                                     <p className="text-gray-600">
                                       <span className="font-bold"></span>
                                     </p>
                                     <p className="text-gray-500 mt-2">PhilASIN is not just about salt—it's about revitalizing an industry, empowering communities, and ensuring a sustainable future.</p> {/* Date added here */}
                                     {/* Link Button */}
                                     <a href="/News" className="text-blue-600 mt-4 inline-block hover:underline">Go to News</a>
                                   </div>
                                 </div>
                               </>
                             )}
                           </div>
                         </div>
                       </section>

                       {/* Industry Overview Section */}
                       <section className="py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/IMG_5376.JPG')` }}>
                         <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional: to darken background */}
                         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           <div className="text-center mb-16">
                             <h2 className="text-4xl font-bold text-white mb-4">
                               <span className="font-bold">DISCOVER MORE ABOUT PHIL ASIN</span>
                             </h2>
                             <p className="text-xl text-white max-w-3xl mx-auto">
                               <span className="font-bold">Through collaboration, innovation, and sustainable practices, we're building a stronger future for salt production in the Philippines.</span>
                             </p>
                           </div>

                           <div className="grid md:grid-cols-3 gap-8">
                             {/* Vision Section */}
                             <div className="text-center p-8 rounded-xl bg-gray-50 bg-opacity-60 hover:bg-opacity-90 transition-colors">
                               <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6"> {/* Increased size here */}
                                 <img src="/sunsalt-removebg-preview (1).png" alt="Vision" className="w-full h-full object-cover" />
                               </div>
                               <h3 className="text-xl font-semibold text-gray-900 mb-4"><span className="font-bold">Vision</span></h3>
                               <p className="text-gray-600 text-justify">
                                 <span className="font-bold">PhilASIN aims to elevate the quality and competitiveness of Philippine salt products. By empowering local salt farmers with access to government support, funding, training, research, development opportunities, and collaborative ventures, PhilASIN seeks to increase local salt production and attain self-sufficiency.</span>
                               </p>
                             </div>

                             {/* Mission Section */}
                             <div className="text-center p-8 rounded-xl bg-gray-50 bg-opacity-60 hover:bg-opacity-90 transition-colors">
                               <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6"> {/* Increased size here */}
                                 <img src="/gallery-15.jpg" alt="Mission" className="w-full h-full object-cover" />
                               </div>
                               <h3 className="text-xl font-semibold text-gray-900 mb-4"><span className="font-bold">Mission</span></h3>
                               <ul className="list-disc list-inside text-gray-600 text-justify">
                                 <li><span className="font-bold">To develop the Philippine Salt Industry through projects, laws, and policies that will encourage the growth of salt production in the Philippines.</span></li>
                                 <li><span className="font-bold">To make the Philippines self-sufficient in salt production and become a salt-exporting nation.</span></li>
                                 <li><span className="font-bold">To represent the salt industry in working with government and other stakeholders, assist members in availing of government programs.</span></li>
                               </ul>
                             </div>

                             {/* Objectives Section */}
                             <div className="text-center p-8 rounded-xl bg-gray-50 bg-opacity-60 hover:bg-opacity-90 transition-colors">
                               <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6"> {/* Increased size here */}
                                 <img src="/HARVESTING.PNG" alt="Objectives" className="w-full h-full object-cover" />
                               </div>
                               <h3 className="text-xl font-semibold text-gray-900 mb-4"><span className="font-bold">Objectives</span></h3>
                               <ol className="list-decimal list-inside text-gray-600 text-justify">
                                 <li><span className="font-bold">Advocating for the passing of the Republic Act 11985 Philippine Salt Industry Development Act by Congress and pursue the implementation of the Philippine Salt Industry Development Road Map.</span></li>
                                 <li><span className="font-bold">Support local salt producers to increase their production and supply the local market.</span></li>
                                 <li><span className="font-bold">Advocate for support with DA-BFAR, DTI, DOST, DENR, NNC, NFRDI, DILG, in delivering services and industry support to local salt farmers.</span></li>
                                 <li><span className="font-bold">Partner with the Philippine Chamber of Commerce and Industry, PhilEXPORT, and other associations in its advocacy to support local resource-based businesses and small enterprises, particularly the salt industry.</span></li>
                               </ol>
                             </div>
                           </div>
                         </div>
                       </section>

    </div>
  );
}
