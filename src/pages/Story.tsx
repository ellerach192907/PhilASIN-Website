import { useQuery } from "@tanstack/react-query";
import { Handshake, Leaf, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react"; // Import useState for toggling history

// Define the MemberStats interface
interface MemberStats {
  total: number;
  farmers: number;
  businesses: number;
  provinces: number;
}

// Function to fetch memberStats (replace with your actual API)
const fetchMemberStats = async (): Promise<MemberStats> => {
  const response = await fetch('/api/members/stats');
  if (!response.ok) {
    throw new Error('Failed to fetch member stats');
  }
  return response.json();
};

export default function Story() {
  const { data: memberStats, isLoading, error } = useQuery<MemberStats>({
    queryKey: ['memberStats'],
    queryFn: fetchMemberStats
  });

  const [showFullHistory, setShowFullHistory] = useState(false); // Managing the history toggle state

  const toggleHistory = () => {
    setShowFullHistory(!showFullHistory); // Toggle the full history display
  };

  return (
    <>
      {/* "Brief History of PhilASIN" Section with full background image */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('/IMG_5377.JPG')`, // Full background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'auto', // Adjusted to auto for better content expansion
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for text readability */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex justify-center items-center h-full">
          {/* Text Section (Right side of the image) */}
          <div className="w-full md:w-2/3 text-white p-8 bg-black bg-opacity-50 rounded-md">
            <h1 className="text-4xl font-bold mb-4 text-center">Brief History of PhilASIN</h1> {/* Centering the title */}

            <p className="text-xl text-justify max-w-full mx-auto" style={{ fontSize: '14px' }}>
              {showFullHistory ? (
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp; The Philippine Association of Salt Industry Networks, Inc. (PhilASIN) is a national organization dedicated to the advancement of the salt industry in the Philippines.  It was founded and organized in the year 2021 through the cooperation of salt producers from Pangasinan and Occidental Mindoro. In March 2021, amidst the covid-19 pandemic, PhilASIN founding members met to discuss the struggling salt industry and the lack of support and awareness of the government agencies.  They met to discuss and approve the country’s first Philippine Salt Industry Roadmap. Based on their survey of salt producers and data from the Philippine Statistics Authority, the country was importing 93% of its salt requirements.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;They proceeded to present this Roadmap to the Department of Agriculture, Bureau of Fisheries and Aquatic Resources, Department of Science and Technology, Department of Trade Industry, and National Nutrition Council...
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;They presented this to the Export Development Council and Philippine Chamber of Commerce and Industry. By August 2021, Kabayan Partylist Congressman Ron P. Salo heard the Roadmap presentation and agreed to file a development-oriented bill in the next Congress.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;In July 2022, after the national elections, Kabayan Partylist Congressman Ron P. Salo introduced House Bill 1976 in the House of Representatives. On September 20, 2022, Senator Cynthia Villar filed the counterpart Senate Bill 1334. Various hearings and congressional sessions were held from 2022 to 2023.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Last November 25-27, 2022, the Philippine Salt Congress was held at Season Auditorium Provincial Capital of Pangasinan. It was hosted by Pangasinan State University, BFAR, and PhilASIN. It was attended by all salt industry stakeholders including local salt producers in Occidental Mindoro and Pangasinan, DA-PCAF, DA-BFAR, DOST, DTI, DOLE, NNC, Philippine Chamber of Commerce and Industry and Iodine Global Network.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;On March 11, 2024, President Ferdinand “Bongbong” R. Marcos Jr., signed Republic Act 11985 the Philippine Salt Industry Development Act into law.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Today, PhilASIN represents salt producers from Ilocos Norte, La Union, Pangasinan, Occidental and Oriental Mindoro, Guimaras, Antique, Iloilo, Cagayan de Oro, and Zamboanga. It speaks on behalf of subsistence, small, medium and large producers through their respective local associations and cooperatives. It supports solar sea salt, cooked salt, artisanal sea salt producers, by advocating for their continued method of salt production and incorporating these processes in its various presentations, position papers, and meetings with the government.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;PhilASIN serves as a nexus, bringing together stakeholders from all facets of the salt industry. Through this collaborative platform, it endeavors to catalyze cooperation, spur innovation, and tackle the multifaceted challenges confronting salt farmers and producers. By harnessing collective expertise and unwavering resolve, PhilASIN aspires to breathe new life into the Philippine salt sector, ensuring its resilience and fortifying its role in national development. Now, guided by RA 11985, PhilASIN works towards bolstering the country's salt production capabilities together with the local salt farmers hailing from various provinces. The unifying vision of PhilASIN is to steer the Philippines towards self-sufficiency in salt production.
                </>
              ) : (
                <></>
              )}
            </p>

            {/* Container for centering the button */}
            <div className="flex justify-center">
              {/* See More / See Less Button */}
              <button
                onClick={toggleHistory}
                className="text-white font-bold bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 focus:outline-none mt-4 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 glow-button"
              >
                {showFullHistory ? "See Less" : "Read It More"}
              </button>
            </div>
          </div>    
        </div>
      </section>

      {/* "Board of Directors" Section */}
      <section
        className="py-20 bg-gray-100"
        style={{
          backgroundImage: 'url(/PhilASIN Board of Directors.JPG)', // Background image for the section
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
          <p className="text-lg text-gray-600 mb-6">From Left to Right:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Board Members */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">John Arnold Lerma Duque</h3>
              <p className="text-lg text-gray-600">PhilAsin Vice President</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Grace Soriano Monterola</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Dr. Paulo Visperas Cenas</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Gerard C. Khonghun</h3>
              <p className="text-lg text-gray-600">PhilAsin President</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">John Michael Magdangal Dela Cruz</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Carlos Nable Magsino</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Felix Dela Vega Bernales, Jr.</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">Not in photo:</h3>
              <p className="text-lg text-gray-600">Nique Rose Canasio Lasac, Ronaldo Gomez Orpiano, Luis Rafael Aguilar Santos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
