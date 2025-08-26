import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FileText, BarChart, GraduationCap, Gavel, Download, Eye, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Resource } from "@shared/schema";

const categories = [
  { name: "Technical Guides", icon: FileText, color: "bg-primary", count: 15 },
  { name: "Market Reports", icon: BarChart, color: "bg-blue-500", count: 8 },
  { name: "Training Materials", icon: GraduationCap, color: "bg-green-500", count: 25 },
  { name: "Policies & Standards", icon: Gavel, color: "bg-orange-500", count: 12 },
];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Dynamically managing resources in each section
  const [featuredResources, setFeaturedResources] = useState({
    resources: [
     // RESOURCES
      {
        title: "PhilASIN Philippine Salt Industry Road Map for House Committee HB 1976",
        description: "Detailed resources for the Philippine Salt Industry.",
        fileSize: "3 MB",
        fileType: "PDF",
        date: "October 25, 2022",
        color: "bg-primary",
        filePath: "/PhilASIN Philippine Salt Industry Road Map for House Committee HB 1976.pdf", // Path to the PDF file in the public folder
      },
      {
        title: "PhilASIN Philippine Salt Industry Roadmap v.4",
        description: "Detailed resources for the Philippine Salt Industry.",
        fileSize: "4.9 MB",
        fileType: "PDF",
        date: "October 10, 2022",
        color: "bg-primary",
        filePath: "/PhilASIN Philippine Salt Industry Roadmap v.4.pdf", // Path to the PDF file in the public folder
      },
      {
        title: "Philippine Salt Industry Development Road Map 2025-2040",
        description: "Detailed resources for the Philippine Salt Industry.",
        fileSize: "111.3 MB",
        fileType: "PDF",
        date: "August 15, 2025",
        color: "bg-primary",
        filePath: "/Philippine Salt Industry Development Road Map 2025-2040 (full)_compressed (1).pdf", // Path to the PDF file in the public folder
      },
      {
        title: "RA 8172 ASIN Law",
        description: "Detailed roadmap for the Philippine Salt Industry.",
        fileSize: "740 KB",
        fileType: "PDF",
        date: "May 4, 2019",
        color: "bg-primary",
        filePath: "/RA 8172 ASIN Law.pdf", // Path to the PDF file in the public folder
      },
      {
        title: "RA.11985 Philippine Salt Industry Development Act 2024",
        description: "Detailed resources for the Philippine Salt Industry.",
        fileSize: "986 KB",
        fileType: "PDF",
        date: "",
        color: "bg-primary",
        filePath: "/RA.11985 Philippine Salt Industry Development Act 2024.pdf", // Path to the PDF file in the public folder
      },
      {
        title: "Salt, Wetlands & Mangroves are Complementary",
        description: "Detailed resources for the Philippine Salt Industry.",
        fileSize: "8.5 KB",
        fileType: "PDF",
        date: "",
        color: "bg-primary",
        filePath: "/Salt, wetlands&mangroves are complementary.pdf", // Path to the PDF file in the public folder
      },
      {
        title: "TESDA - Salt Production Level II",
        description: "Detailed resources for the Philippine Salt Industry.",
        fileSize: "852 KB",
        fileType: "PDF",
        date: "",
        color: "bg-primary",
        filePath: "/TESDA - Salt Production Level II.pdf", // Path to the PDF file in the public folder
      },
    ],
    policyResearch: [
      // RESOURCES - POLICY RESEARCH
      {
        title: "Philippine Salt Industry Market Analysis 2024",
        description: "In-depth analysis of market trends, opportunities, and challenges facing the Philippine salt industry.",
        fileSize: "4.1 MB",
        fileType: "PDF",
        date: "Published Nov 2024",
        color: "bg-blue-500",
        filePath: "/policyResearch/PhilippineSaltIndustryMarketAnalysis2024.pdf", // Path to a specific policy research PDF
      },
    ],
    technicalResearch: [
      // RESOURCES - TECHNICAL RESEARCH
      {
        title: "Sustainable Salt Industry Practices Guide",
        description: "A practical guide for implementing sustainable practices in the salt industry to ensure long-term environmental and economic benefits.",
        fileSize: "3.8 MB",
        fileType: "PDF",
        date: "Released Jan 2025",
        color: "bg-green-500",
        filePath: "/technicalResearch/SustainableSaltIndustryPracticesGuide.pdf", // Path to a specific technical research PDF
      },
    ],
  });

  // Method to add a new resource to a specific section
  const addResource = (section: string, newResource: object) => {
    setFeaturedResources(prevState => {
      const updatedSection = [...prevState[section], newResource];
      return { ...prevState, [section]: updatedSection };
    });
  };

  // Example: To add a new resource to the 'resources' section:
  // addResource('resources', newResourceObject);

  const { data: resources } = useQuery<Resource[]>({
    queryKey: selectedCategory ? ["/api/resources", { category: selectedCategory }] : ["/api/resources"],
  });

  return (
    <section className="py-20" style={{ backgroundColor: "#355C7D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Information</h1>
        </div>

        {/* First Featured Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Resources</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.resources.map((resource, index) => (
              <Card key={index} className="shadow-lg border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${resource.color.replace('bg-', 'bg-').replace('-500', '-100')} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className={`${resource.color.replace('bg-', 'text-')} h-8 w-8`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {resource.fileType} • {resource.fileSize} • {resource.date}
                        </span>
                        <Button className={resource.color}>
                          <a href={resource.filePath} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Second Featured Resources Section - Policy Research */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Resources - Policy Research</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.policyResearch.map((resource, index) => (
              <Card key={index + 1000} className="shadow-lg border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${resource.color.replace('bg-', 'bg-').replace('-500', '-100')} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className={`${resource.color.replace('bg-', 'text-')} h-8 w-8`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {resource.fileType} • {resource.fileSize} • {resource.date}
                        </span>
                        <Button className={resource.color}>
                          <a href={resource.filePath} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Third Featured Resources Section - Technical Research */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Resources - Technical Research</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.technicalResearch.map((resource, index) => (
              <Card key={index + 2000} className="shadow-lg border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${resource.color.replace('bg-', 'bg-').replace('-500', '-100')} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className={`${resource.color.replace('bg-', 'text-')} h-8 w-8`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {resource.fileType} • {resource.fileSize} • {resource.date}
                        </span>
                        <Button className={resource.color}>
                          <a href={resource.filePath} download>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Resources Table */}
        <Card className="shadow-lg border border-gray-200 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">All Resources</h2>
                <div className="flex items-center space-x-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.name} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {resources?.map((resource: any) => (
                    <tr key={resource.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="text-red-500 mr-3 h-5 w-5" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                            <div className="text-sm text-gray-500">{resource.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {resource.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(resource.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resource.fileSize}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 mr-2">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {resources?.length || 0} results
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm" className="bg-primary">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
