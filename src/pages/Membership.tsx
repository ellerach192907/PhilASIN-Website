import { useQuery, useMutation } from "@tanstack/react-query";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const submitMember = async (memberData) => {
  const response = await fetch("/api/members/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberData),
  });

  if (!response.ok) {
    throw new Error("Failed to register member");
  }
  return response.json();
};

export default function Membership() {
  const { data: memberStats } = useQuery({
    queryKey: ["/api/members/stats"],
  });

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    short_details: "",
  });

  const [showSection, setShowSection] = useState(null);

  const { mutate, isLoading } = useMutation(submitMember);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleShowSection = (section) => {
    setShowSection(section === showSection ? null : section);
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#355C7D" }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header
          className="text-center py-20"
          style={{
            backgroundImage: "url('/IMG_5300.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-semibold text-white">MEMBERSHIP</h1>
          <p className="text-xl text-white mt-4">
            Strengthening the Salt Industry Through Collaboration, Innovation,
            and Leadership.
          </p>
        </header>

        {/* How to Become a Member Section */}
        <div
          onClick={() => handleShowSection("howToApply")}
          className="flex justify-center items-center p-6 cursor-pointer transform transition duration-300 hover:scale-105 bg-[#6E9FC1] text-white rounded-lg shadow-lg mt-12"
        >
          <div className="max-w-lg w-full">
            <h2 className="text-2xl mb-4 font-semibold text-center">How to Become a Member</h2>
            <p className="mb-4 text-center">
              Step-by-step guide to apply for membership and enjoy the benefits.
            </p>
            <div className="text-center">
              <button
                className="bg-[#6E9FC1] text-white border-4 border-white py-2 px-6 rounded-full hover:bg-[#4A7E9D] hover:text-white hover:border-[#4A7E9D] transition duration-300 font-semibold"
                aria-label="Join Us Today"
              >
                JOIN US TODAY
              </button>
            </div>
            {showSection === "howToApply" && (
              <div className="mt-6 p-6 rounded-lg shadow-lg bg-transparent border-4 border-[#4A7E9D]">
                <h3 className="font-semibold text-white text-center">
                  Step-by-Step to Join
                </h3>
                <ol className="space-y-2 text-[#E1E9F0] list-inside">
                  <li>
                    <strong>Step 1:</strong> Fill out the membership form with your personal details.
                  </li>
                  <li>
                    <strong>Step 2:</strong> Submit the form and wait for the link to the PDF form.
                  </li>
                  <li>
                    <strong>Step 3:</strong> Fill out the PDF form and submit it back to us.
                  </li>
                  <li>
                    <strong>Step 4:</strong> Receive your membership confirmation and welcome packet.
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>


        {/* Join Today Section */}
        <div
          className="text-center py-20"
          style={{
            backgroundColor: "", // Transparent blue-like color
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white", // Ensure text is visible over the background color
            paddingLeft: "20px", // Left padding
            paddingRight: "20px", // Right padding
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            JOIN OUR EXCLUSIVE COMMUNITY WITH EASE...
          </h1>
          <p
            style={{ color: "#A5D8FF", fontSize: "1.2rem", marginTop: "20px" }}
          >
            You're on the brink of accessing the key insights, advice, and
            support that will help you establish, develop, and expand a
            successful membership.
          </p>
          <div>
            <button
              onClick={() => handleShowSection("contentSubmission")}
              style={{
                backgroundColor: "transparent", // Transparent background
                color: "#F79C42", // Text color for better visibility on the transparent background
                padding: "15px 30px",
                fontSize: "1rem",
                border: "2px solid #F79C42", // Border to maintain visibility
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "30px",
                transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for hover
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F79C42"; // Highlight color on hover
                e.target.style.color = "white"; // Change text color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"; // Revert to original state
                e.target.style.color = "#F79C42"; // Revert text color
              }}
            >
              BECOME A MEMBER
            </button>
          </div>
        </div>

        {/* Membership Form Section */}
        {showSection === "contentSubmission" && (
          <div
            className="mt-6 p-6 rounded-lg shadow-lg bg-transparent"
            style={{ backgroundColor: "rgba(23, 43, 77, 0.7)" }}
          >
            <h3 className="font-bold text-white text-center">
              Register for Membership
            </h3>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="first_name"
                  className="block text-sm text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="last_name" className="block text-sm text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone_number"
                  className="block text-sm text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="short_details"
                  className="block text-sm text-white"
                >
                  Short Details
                </label>
                <textarea
                  id="short_details"
                  name="short_details"
                  placeholder="Short Details"
                  value={formData.short_details}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
