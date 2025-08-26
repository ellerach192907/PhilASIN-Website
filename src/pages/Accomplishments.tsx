      import { useState } from "react";
      import { ChevronDown, ChevronUp, Heading } from "lucide-react";
      import { useQuery } from "@tanstack/react-query";

      // Sample query for fetching member stats, you can adjust it as per your API
      const fetchMemberStats = async () => {
        const response = await fetch('/api/members/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch member stats');
        }
        return response.json();
      };

      export default function Accomplishments() {
        const { data: memberStats } = useQuery({
          queryKey: ["/api/members/stats"],
          queryFn: fetchMemberStats,
        });

        // PHIL ASIN Data
        const awardsData = [
          {
            title: "PhilASIN 2025",
            description: "",
            content: [
              {
                heading: "DA Salt Commodity Board Meeting",
                text: "The Department of Agriculture Commodity Board Chairperson Asec. Philip C. Young conducted its meeting with the Salt Commodity Board last August 6, 2025, highlighting the importance of regulating salt importation.",
                image: "/Picture1.jpg",
              },
              {
                heading: "Launching of the Philippine Salt Industry Development Road Map 2025-2040",
                text: "              Last July 8, 2025, the BFAR Salt Program Management Office formally launched the Salt Road Map marking the journey of the country towards national salt self-sufficiency.  It was highlighted by messages from fmr. Sen. Cynthia Villar, fmr. Cong. Ron P. Salo, Cong. Leody Tarriela, DOST Secretary Renato U. Solidum Jr. and DA Undersecretary for Fisheries Drusila Esther E. Bayate, and PhilASIN President Gerard C. Khonghun, and pledge of commitment from all attendees led by PhilASIN Vice President John Arnold L. Duque.  It was followed by signing of pledge board with all stakeholders and attendees.  A beautiful salt exhibit highlighted the best of Philippine sea salts from around the country.",
                image: "/Picture2.jpg",
              },
              {
                heading: "DA-PCAF NSC 1st Special Meeting for Salt 2025 on Zoom",
                text: "DA-PCAF National Sectoral Committee on Fisheries and Aquaculture conducted its Special Salt Stakeholders Consultation Meeting last April 8 , 2025.  It was chaired by Ms. Dinna Umengan.",
                image: "",
              },
              {
                heading: "First Meeting of the Philippine Salt Industry Development Council",
                text: "Last May 13, 2025, the Philippine Salt Industry Development Council held its historic first formal meeting.  It was chaired by DA Secretary Francisco Tiu-Laurel Jr., and co-chaired by DOST Secretary Renato Solidum.  In its first act as council, it reviewed and approved the Philippine Salt Industry Development Road Map 2025-2040, and proceeded to mobilize funding and the various agencies to support the roadmap.  The members of the Council include:  DA, DTI, BFAR, DOST, DENR, DOH, DOT, DPWH, DOLE, CDA, NFRDI, League of Province, Cities and Municipalities and 4 representatives from salt industry stakeholders.  The PhilASIN representatives to the Council are Gerard C. Khonghun, John Arnold L. Duque, Carlos Magsino and Edwin Avenido.",
                image: "/Picture3.jpg",
              },
            ],
          },
          {
            title: "PhilASIN 2024",
            description: "",
            content: [
              {
                heading: "DA-PCAF NSC 2nd Special Meeting for Salt 2024 on Zoom",
                text: "DA-PCAF National Sectoral Committee on Fisheries and Aquaculture conducted its Special Salt Stakeholders Consultation Meeting last September 30, 2024.  It was chaired by Ms. Dinna Umengan.  NAMRIA presented the mapping for areas suitable for salt production and the development of the criteria for this.  The Philippine Coconut Authority presented their 2025 budget for local salt procurement for their coconut fertilization project. It is designed to fertilize a total of 507,290 hectares.  The PCA is mandated to procure only local salt as per RA 11985.  The total salt procurement budget amounts to P2,016,800,000.00, giving the local salt farmers a big boost in demand for local salt.  Farm to Market Roads were presented by DA-BAFE as a step in improving the access of salt producers to national highways and municipal roads.  PhilASIN presented its proposed thresholds for Environmental Impact Assessment (EIA) and to simplify ECC/CNC requirements for local salt producers.",
                image: "/Picture4.png",
              },
              {
                heading: "BFAR conducts 3rd Workshop on Salt Road Map and honors Cong. Ron P. Salo",
                text: "BFAR conducted the third face to face Workshop on the Salt Road Map at Luxent Hotel,  Quezon City last July 26, 2024.  During the event, Cong. Ron P. Salo was honored by PhilASIN and the salt industry stakeholders for his invaluable contributions to the Philippine salt industry.  This was the filing of House Bill 1976, the first developmental bill filed for the salt industry in Congress in June 2022 which led to RA 11985 after just one year and nine months.  He chaired the Technical Working Group in the House of Representatives, and spearheaded the media campaign effort to increase awareness of the plight of salt farmers and the local salt industry.  During his speech, Cong. Ron Salo acknowledged and congratulated to the untiring efforts of PhilASIN and local salt farmers towards advocating the law, and working closely with various government agencies to realize the dream of a salt self-sufficient Philippines.",
                image: "/Picture5.png",
              },
              {
                heading: "BFAR conducts 2nd Workshop on crafting the Salt Road Map",
                text: "BFAR conducted the second face to face Workshop on the Salt Road Map at Red Hotel, Cubao, Quezon City from June 4 to 6, 2024, fresh from the signing into law of RA 11985. The three day meeting sought to concretize the data on which the salt road map would be based.  It identified issues such as weather and climate patterns, rainfall, production variance between El Nino and La Nina, and geographic differences.  It created benchmarks based on realistic historical salt production data.  It threshed out the requirements of the salt industry in terms of marketing and trade support, production systems, supply chain, and inputs to the salt industry such as land area.  These translated into strategies, policies, programs and projects which will be funded by RA 11985 and the national government through DA-BFAR.   The tagline “Pasiglahin sariling ating asin.” was officially adopted by the group as its motto for revitalizing and developing the salt industry.",
                image: "/Picture6.jpg",
              },
              {
                heading: "DA-PCAF NSC 1st Special Meeting for Salt 2024 on Zoom",
                text: "DA-PCAF National Sectoral Committee on Fisheries and Aquaculture conducted its Special Salt Stakeholders Consultation Meeting last May 5, 2024.  It was chaired by Ms. Dinna Umengan of Tambuyog. Development Center.  It discussed the issues of BFAR’s abandoned, underutilized and underdeveloped fishpond areas (AUU) and the coordination with the DENR for turnover upon proper validation. The Global Mangrove Alliance presented the importance of mangroves, the impact of salt production on mangroves, and their possible reversion back to the DENR.  PhilASIN’s Gerard C. Khonghun presented “Salt, Wetlands and Mangroves are complementary” to emphasize that well-managed salt farms are valuable ecosystems that attract various wildlife, provide areas for mangroves, while providing salt production and livelihood.  They are complementary ecosystems in many countries such as Australia, USA, and France, and that the Philippines can learn and benefit a lot from these best practices.",
              },
              {
                heading: "DA-PCAF 2024 1st Quarter Meeting on Zoom",
                text: "DA-PCAF 2024 1st Quarter Meeting on Zoom DA-PCAF conduct its 1st Quarter National Stakeholders Consultation Meeting last March 25, 2024. It talks about the financial aspects and other concerns regarding to salt industry perspectives.",
                image: "/Picture7.jpg",
              },
              {
                heading: "BFAR conducts 1st workshop on Philippine Salt Industry Road Map 2024",
                text: "              Last March 13-14, 2024, PhilASIN participates on BFAR 2-day workshop about Philippine Salt Industry Road Map on Zoom in preparation of RA 11985 or the Philippine Salt Industry Development Act.  Various BFAR Regional offices opened their doors and hosted the salt industry stakeholders to conduct the simultaneous Zoom meeting on their respective sites.  These included Region 1,2, 3, 4B, 6, 7, 9, ensuring proper representation of the various salt producing provinces.    The initial workshop included value chain mapping activities to identify the flow of salt across the various stakeholders.",
                image: "/Picture8.png",
              },
              {
                heading: "President Bongbong Marcos Jr. signs Republic Act 11985 into law",
                text: "Last March 11, 2024, President Ferdinand “Bongbong” R. Marcos Jr. signed Republic Act (RA) 11985 “An Act Strengthening and Revitalizing the Salt Industry and appropriating funds thereof” or the Philippine Salt Industry Development Act, which aims to revitalize and modernize the salt sector, positioning it for sustainable growth and international competitiveness.",
                image: "/President Bongbong Marcos Jr.JPG",
              },
              {
                heading: "ASIN Center Steering Committee Meeting, Update of ASIN Center",
                text: "              Last March 8, 2024, PhilASIN Gerard C. Khonghun participates in ASIN Center meeting on Zoom.  It was attended by ASIN Center Steering Committee members including DOST Dir. Tabaog, BFAR Dir. Rosario Segundina Gaerlan.",
                image: "/Picture9.jpg",
              },
              {
                heading: "Congress submits Bicameral Report to Malacañang",
                text: "             The Bicameral Conference Committee Report on Senate Bill 2243 and House Bill 8278 was submitted to Office of the President last February 12, 2024. The House was represented by Cong. Ron P. Salo, Cong. Wilbert T. Lee and Cong.Wilfrido Mark Enverga and Cong. Joey Salceda.  The Senate was represented by Sen. Cynthia Villar, Sen. Imee Marcos and Sen. Ronald “Bato” dela Rosa.",
                image: "/Picture 10.jpg",
              },
            ],
          },
          {
            title: "PhilASIN 2023",
            description: "",
            content: [
              {
                heading: "PhilASIN coordinates to Bicameral Committee on Senate Bill 2243 and House Bill 8278",
                text: "              PhilASIN receives copy of the Bicameral Report by Bicameral Committee Conference last December 6, 2023",
              },
              {
                heading: "PhilASIN participates 2nd meeting with DA-Philippine Council for Agriculture and Fisheries",
                text: "                           Last 2023, PhilASIN attends its 2nd meeting with DA-Philippine Council for Agriculture and Fisheries.",
              },
              {
                heading: "PhilASIN monitors Senate 2nd and 3rd hearing on deliberation and voting for Senate Bill 2243.",
                text: "                          Last August to September 2023, PhilASIN monitored the Senate hearings and deliberation and 3rd hearing for voting on passing Senate Bill 2243.",
              },
              {
                heading: "PhilASIN presents position papers and amendments to House Bill 8278 and Senate Bills 2243",
                text: "The amendment of House Bill 8278 and Senate Bills 2243 includes the following: a) removal of per hectare investible funds requirement in Senate Bill 2243; b) proposal of percentage allocations for Salt Industry Development Fund; c) issues concerning ease of doing business, non-mandatory iodization; d) classification of salt, taxation, and others from April to June 2023.",
              },
              {
                heading: "House Bill 8278 filed by Cong. Wilfrido Mark Enverga",      
                text: "The House Bill 8278 consolidates House Bill 1976 by Cong. Ron P. Salo, House Bill 5537 by Cong. Ramon Guico Jr., House Bill 5676 by Cong. Wilbert T. Lee and House Bill 7357 by Cong. Lray Villafuerte last May 24, 2023.",
              },  
              {
                heading: "Senate Bill 2243 filed by Sen. Cynthia Villar.",
              text: "The Senate Bill 2242 consolidates the proposed bills of Senate Bill 1334 by Sen. Cynthia Villar, Senate Bill 2185 by Sen. Bato Dela Rosa, Senate Bill 1932 by Sen. Nancy Binay, Senate Bill 1870 by Sen. Loren Legarda, Senate Bill 1685 by Sen. Ramon Tulfo, and Senate Bill 1450 by Sen. Joel Villanueva last May 31, 2023.",
             image: "/Picture11.jpg",
              },
              {
                heading: "PhilASIN attends House TWG meeting on Zoom.",
              text: "On April 26, 2023, PhilASIN participates in the House Technical Working Group committee meeting on all the House bills related to the Philippine Salt Industry Development Act.  The forum gets feedback and concerns from the various salt industry stakeholders including government agencies DA, BFAR, NNC, DENR, DOH, DOF, and salt producers.",
                image: "/Picture12.png",
              },
              {
                heading: "PhilASIN attends PCCI Orientation and PCAFI General Assembly.",
              text: "PhilASIN participates new member orientation of Philippine Chamber of Commerce and Industry and joined the Philippine Chamber of Agriculture and Fisheries (PCAFI) General Assembly last October 2023.",
              },
              {
                heading: "PhilASIN attends DA-PCAF - National Stakeholder’s Meeting.",
              text: "PhilASIN appears and participates with TAMACO last October 25-27, 2023 in DA-PCAF - National Stakeholder’s Meeting held at Antique. The recruited new PhilASIN members from Antique, Bohol (Asin Tibuok), Guimaras, Iloilo salt producers. Presentation by Nique Lasac of TAMACO on Cooperative experiences.",
                image: "/Picture13.jpg"
              },
              {
                heading: "PhilASIN testifies in Senate Hearing on Tatak Pinoy",
              text: "PhilASIN President Gerard C. Khonghun testifies in Senate with Sen. Sonny Angara about Tatak Pinoy Bill last February 2023, expressing how the local salt industry can be competitive with imported salt.  Marketing and trade support provision in the bill will strengthen the competitiveness of local salt.",
              },
              {
                heading: "PhilASIN testifies in Senate Hearing on Salt Industry",
              text: "PhilASIN President Gerard C. Khonghun, PhilASIN and TAMACO directors Arnold Duque, Carlo Magsino, John dela Cruz and Felix Bernales, Jr., business and agriculture sectors Dr. Sergio Ortiz-Luis, Jr., Mr. Danilo Fausto, Mr. Johnny A. KhongHun testify for the salt industry before the Senate Committee on Agriculture Food and Agrarian Reform, with Chairperson Sen. Cynthia Villar, Sen. Nancy Binay and Sen. Joey Villanueva last January 18, 2023.",
                image: "/Picture 14.png"
              },
            ],
          },
          {
            title: "PhilASIN 2022",
            description: "",
            content: [
              {
                heading: "The 1st Philippine Salt Congress is hosted by Pangasinan State University, DA-BFAR and PhilASIN",
                text: "The 1st Philippine Salt Congress held last November 25-27, 2022 at Sison Auditorium, Lingayen, Pangasinan. It hosted by Pangasinan State University and organized by PSU, PhilASIN, DA-BFAR. The objective of the congress is to advocate the various stakeholders to push Congress and President Bongbong Marcos Jr. for new law to develop the Philippine salt industry. Cong. Ron P. Salo gives the keynote speech, updating the congress on the progress of the legislative efforts for the salt industry. Dr. Paulo Cenas explains the salt industry’s current situation.  PhilASIN President Gerard Khonghun presented the Philippine Salt Industry Roadmap. Statements of Support issued by PhilASIN, DA-BFAR, DA-PCAF, DOST, DOLE, NNC, Philippine Chamber of Commerce & Industry’s Dr. Sergio Ortiz-Luis Jr., Iodine Global Network’s Dr. Teofilo San Luis, Cong. Ron Salo, Cong. Wilbert Lee, Sen. Cynthia Villar, Sen. Chiz Escudero, 10 SUCs from 10 Type-1 Climate provinces.",
                image: "/Picture15.jpg",
              },
              {
                heading: "PhilASIN meets BFAR Director Demosthenes Escoto",
                text: "On November 11, 2022, PhilASIN association met with BFAR National Director Demosthenes Escoto regarding on Fishpond Lease Agreements and other related issues of salt producers.",
                image: "/Picture16.jpg",
              },
              {
                heading: "PhilASIN testifies in House of Representatives on Salt Industry",
                text: "Last October 25, 2022, PhilASIN association testified before Cong. Wilfredo Enverga and Cong. Ron Salo in House of Representatives on Salt Industry. PhilASIN presented the Philippine Salt Industry Roadmap to House Committee on Agriculture via Zoom.",
                image: "/Picture17.png",
              },
              {
                heading: "Filing of Senate Bill 1334",
                text: "Last September 20, 2022, Senator Cynthia Villar filed Senate Bill 1334 as senate counterpart to House Bill 1976 filed by KABAYAN Party list Cong. Salo suggesting the provisions outlined in House Bill 1976, indicating a coordinated effort between the House of Representatives and the Senate to address the issues or concerns addressed in the proposed legislation.  This was followed by various Senate Bills filed by Sen. Joey Villanueva, Sen. Ronald dela Rosa, Sen. Nancy Binay, Sen. Loren Legarda.",
              },
              {
                heading: "Organizational Meeting for 1st Philippine Salt Congress Summit",
                text: "Last June 24, 2022, the organizational meeting for summit, first election and incorporation of PhilASIN was occurred. The filing of PhilASIN as a SEC registered association and approval of vision, mission, incorporators and founders, and logo.",
                image: "/Picture18.jpg",
              },
              {
                heading: "PSU agrees on 1st Philippine Salt Congress Summit",
                text: "Last June 2022, Pangasinan State University approves its budget for hosting the 1st Philippine Salt Congress with a 3-day program together with BFAR and PhilASIN.",
              },
              {
                heading: "PhilASIN attended its 1st meeting with DA-Philippine Council of Agriculture and Fisheries",
                text: "In year 2022, PhilASIN association make an appearance and attends meeting at DA Philippine Council of Agriculture and Fisheries.  This paves the way for recognition of the local salt industry and its proper representation in the Department of Agriculture.",
              },
              {
                heading: "PhilASIN association attends the 48th Business Conference",
                text: "PhilASIN association attends the 4th Philippine Business Conference provides valuable opportunities for networking, learning about industry trends, and discussing important issues facing businesses in the Philippines at Manila Hotel.",
              },
              {
                heading: "PhilASIN presents to AGRI partylist Cong. Wilbert Lee",
                text: "From 2022 to 2023, PhilASIN President Gerard C. Khonghun appears in various media, press, radio and TV interviews representing the Philippine salt industry to explain our advocacy to revive and develop the local salt industry.",
              },
              {
                heading: "PhilASIN presents to AGRI partylist Cong. Wilbert Lee",
                text: "Last September 30, 2022, PhilASIN makes a courtesy call to Cong. Wilbert Lee and presents PhilASIN’s Salt Road Map and seeks support for the salt industry.  Cong. Lee files his House Bill 5676 supporting the full development of the salt industry.",
                image: "/Picture19.jpg"
              },
              {
                heading: "KABAYAN partylist Cong. Ron Salo files House Bill 1976",
                text: "On July 1, 2022, the House Bill 1976 was filed by KABAYAN Party list Cong. Ron P. Salo reflecting the priorities and initiatives related to the salt industry towards the government agencies.  This is the first developmental bill that that provides governance, technical, physical and financial assistance to salt farmers, including artisanal salt farmers, to develop and improve their craft and draw up a whole-of-government bill and strategy for uplifting the local salt production.  Cong. Salo files House Bill 1976 in July 2022 right after the 2022 National Elections. This was followed by bills filed by Cong. Wilbert T. Lee, Ramon Guico Jr. and Cong. Lray Villafuerte.",
              },
              {
                heading:"Cong. Ron Salo drafts House Bill 1976",
                text: "Last May 2022, KABAYAN Party list Cong. Ron P. Salo, in consultation with local salt producers, drafted and developed House Bill 1976. Cong. Ron Salo based his bill on the Philippine Salt Industry Development Road Map, prepared by salt industry stakeholders.",
                image: "/Picture21.jpg"  
              },
              {
                heading:"Pangasinan State University visits Pacific Farms",
                text: " Last March 2, 2022, the Pangasinan State University (PSU) led by Dr. Paulo Cenas visits Pacific Farms.  PSU agrees to host and organize the 1st Philippine Salt Congress as organizing committee including in program and venue preparations, invitations, exhibitors and budget for the upcoming Summit.",
                image: "/Picture22.jpg"  
              },
            ],
          },
          {
            title: "PhilASIN 2021",
            description: "",
            content: [
              {
                heading: "PhilASIN presents its Philippine Salt Industry Roadmap",
                text: "Last April 2021, Mr. Gerard C. Khonghun-PhilASIN President presented the roadmap to TAMACO Board of Directors, KABAYAN Partylist Cong. Ron P. Salo, PhilExport & Philippine Chamber of Commerce and Industry Dr. Sergio Ortiz-Luis Jr. and Philip Young, Department of Trade and Industry Secretary Ramon Lopez, Export Marketing Bureau Director Christopher Amuco, Department of Agriculture-Region 1 Nestor Domenden, BFAR Rosario Segundina Gaerlan and Director Armando Ganal of Department of Science and Technology.  Input and feedback from these various early salt industry stakeholders were incorporated into the Road Map.",
              },
              {
                heading: "The start of the Philippine Salt Industry Roadmap",
                text: "Last March 2021, after meeting with DA Region 1 Director Nestor D. Domenden, Mr. Gerard C. Khonghun researched and prepared the first Philippine Salt Industry Roadmap (2021 to 2026), prepared by salt industry stakeholders. It involved an extensive process of data gathering, analysis, and stakeholder consultation aimed at charting a strategic path for the development and growth of the salt industry in the Philippines over the specified period. The Philippine Salt Industry Roadmap served as a strategic blueprint for guiding stakeholders in the salt industry towards achieving collective goals and realizing the sector's full potential. It provides a framework for coordinated action and investment, enabling the industry to overcome challenges, capitalize on opportunities, and contribute to national economic development and food security.",
                image: "/Picture23.png",
              },
            ],
          },
        ];

        const [activeSection, setActiveSection] = useState(null);
        const [zoomedImage, setZoomedImage] = useState(null);

        const toggleSection = (index) => {
          if (activeSection === index) {
            setActiveSection(null); // Collapse if it's already open
          } else {
            setActiveSection(index); // Expand the selected section
          }
        };

        const handleImageClick = (imageSrc) => {
          setZoomedImage(imageSrc); // Set the zoomed image when clicked
        };

        return (
          <section className="py-20" style={{ backgroundColor: "#355C7D" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Title and Description */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-semibold text-white mb-4">
                  Accomplishments, Seminars & Meetings
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Commemorating key milestones and accomplishments that have defined the growth of the Philippine salt industry.
                </p>
              </div>

              {/* Awards Section */}
              <div>
                {awardsData.map((award, index) => (
                  <div key={index} className="mb-6">
                    <div
                      className={`flex justify-between items-center cursor-pointer p-4 transition-colors duration-300 ease-in-out border-b ${activeSection === index ? 'bg-opacity-50 bg-[#3d3d3d]' : ''}`}
                      onClick={() => toggleSection(index)}
                    >
                      <h3 className="text-lg font-medium text-white">{award.title}</h3>
                      {activeSection === index ? (
                        <ChevronUp size={20} className="text-white" />
                      ) : (
                        <ChevronDown size={20} className="text-white" />
                      )}
                    </div>
                    {activeSection === index && (
                      <div
                        className="mt-4 p-4 bg-gray-50 border-t-2 border-gray-300"
                        style={{ maxHeight: "300px", overflowY: "auto", backgroundColor: "#e1ecff" }} // Updated scrolling area color
                      >
                        <p className="font-semibold text-sm mb-4 text-justify">{award.description}</p>
                        {award.content.map((section, idx) => (
                          <div key={idx} className="mb-6 border-b border-gray-300 pb-4">
                            {section.heading && <h4 className="font-semibold text-sm">{section.heading}</h4>}
                            <p className="text-justify mb-2">{section.text}</p>
                            {section.image && (
                              <img
                                src={section.image}
                                alt={section.heading || "Image"}
                                className="mt-2 max-w-full rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                                onClick={() => handleImageClick(section.image)} // Zoom on image click
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Zoomed Image Modal */}
            {zoomedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative">
                  <img
                    src={zoomedImage}
                    alt="Zoomed"
                    className="max-w-full max-h-full object-contain"
                  />
                  <button
                    className="absolute top-4 right-4 text-white text-3xl"
                    onClick={() => setZoomedImage(null)} // Close zoomed image
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </section>
        );
}