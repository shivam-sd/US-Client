import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Aboutus = () => {

  document.title = "About || ICAI SEATTLE"

  const boardMembers = [
    {
      name: "CA. Nitin Nigam",
      link:"https://www.linkedin.com/in/nitin-nigam-8330b68/",
      role: "Chair",
      img: "nitin.jpg",
    },
    {
      name: "CA. Amrita Choudhary",
      link:"https://www.linkedin.com/in/amrita-choudhary-a460b2101/",
      role: "Vice-Chair",
      img: "amrita.jpg",
    },
    {
      name: "CA. Sailesh Kr.Ropolu",
      link:"https://www.linkedin.com/in/sailesh-kumar-rapolu/",
      role: "Secretary",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHe74xyfaM3PA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730773221631?e=2147483647&v=beta&t=Y_275h4nHmIuSvgAgStM7uKX9876uDVSkAeTG9eq0Ss",
    },
    {
      name: "CA. Rohit Gupta",
      link:"https://www.linkedin.com/in/rohitguptafinance/",
      role: "Treasurer",
      img: "rohit.jpg",
    },
    {
      name: "CA. Dimple Lulla",
      link:"https://www.linkedin.com/in/dimple-lulla18/",
      role: "Empower Women Circle Representative",
      img: "dimple.jpg",
    },
    {
      name: "CA. Radhika Bhartia",
      link:"https://www.linkedin.com/in/radhika-bhartia-cpa-ca-74347530/",
      role: "Director - CPE Events",
      img: "/RadhikaBhartia.png",
    },
    {
      name: "CA. Ananya Chidananda",
      link:"https://www.linkedin.com/in/ananyahc/",
      role: "Director Membership",
      img: "https://media.licdn.com/dms/image/v2/C5603AQGazldaOkaYuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1594542809029?e=2147483647&v=beta&t=4PmrnUHpHoqj2xKkYba51NwJ8gQKqoxODH1RC3E1sJ8",
    },
    {
      name: "CA. Mayuri Kulkarni",
      link:"https://www.linkedin.com/in/camayurikulkarni/",
      role: "Director - Social Media",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGBSqEA9uumtQ/profile-displayphoto-shrink_400_400/B56ZcTCodUHEAg-/0/1748371147714?e=2147483647&v=beta&t=BzEVmEYUTe777fMWxbFyAucskRPxW3mjrcB2oZF6D9I",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <Header />

      {/* About Section */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About ICAI Seattle
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
The ICAI Seattle Chapter of the Institute of Chartered Accountants of India (ICAI) aims to build a network of Chartered Accountants based in the Greater Seattle region. If you are a Chartered Accountant (CA) from India living in Seattle or Greater Seattle Area, and are interested in joining the ICAI Seattle we invite you to explore our Membership and LinkedIn pages.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <span className="text-xl font-extrabold w-full mb-4">Our key objectives are to:</span> 
            <br />

1. Provide a platform for members of the ICAI based in the Greater Seattle Region to connect/network. <br />
2. Promote professional development through periodic meetings and educational forums for the ICAI members. <br />
3. Generate goodwill between the accounting fraternities of the United States and the rest of the world.  <br />
4. Pave the path for ICAI members to work with and advance the relationship with local institutions and businesses and contribute to the well-being of the Greater Seattle Region. <br />
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you are a Chartered Accountant (CA) from India living in Seattle or Greater Seattle Area, and are interested in joining the ICAI Seattle  Area Chapter, we
            invite you to explore our Membership and LinkedIn pages.
          </p>
        </div>

        {/* Meet The Board Section */}
        <div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Meet The Board
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="w-48 h-48 mx-auto mb-4">
                  <Link to={member.link} target="_blanck" ><img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                  /></Link>
                </div>
                <Link to={member.link} target="_blanck" ><h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3></Link>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
