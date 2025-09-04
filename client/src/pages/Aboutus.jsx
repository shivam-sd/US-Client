import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutus = () => {
  const boardMembers = [
    {
      name: "CA. Nitin Nigam",
      role: "Chair",
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGdImLbez6nSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722901582015?e=1759363200&v=beta&t=Y1yg7LlCLMEa8nEsmtq4C80Wnhu_vYn7SgeAp1qSLIU",
    },
    {
      name: "CA. Amrita Choudhary",
      role: "Vice-Chair",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGCMvit-_zdSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716348758467?e=1759363200&v=beta&t=yM3yoM2qTKb2vunbRMDmx1F9rCFtA8z7BLJ-vhGusdc",
    },
    {
      name: "CA. Sailesh Kr.Ropolu",
      role: "Secretary",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHe74xyfaM3PA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730773221631?e=1759363200&v=beta&t=nlpxYombHnA0PUpDSFb1TO8Xq0NcsM3MF6TJef_GvBA",
    },
    {
      name: "CA. Rohit Gupta",
      role: "Treasurer",
      img: "https://media.licdn.com/dms/image/v2/C5603AQE4HN_nlfQUQg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1656473769823?e=1759363200&v=beta&t=DI1m20zi2-vvjf0sDlMqEwddPfMPQru1tmFxLCcn-XQ",
    },
    {
      name: "CA. Ananya Jauhari",
      role: "Director - Communication",
      img: "https://media.licdn.com/dms/image/v2/D5603AQF4JI4YmzmyEw/profile-displayphoto-shrink_200_200/B56Zdy2HV3HoAc-/0/1749978478620?e=1759363200&v=beta&t=6wAEKlLV60IFsMZl37kqJzO9Qxpdi3Mltomb-vreV7o",
    },
    {
      name: "CA. Radhika Bhartia",
      role: "Director - CPE Events",
      img: "/RadhikaBhartia.png",
    },
    {
      name: "CA. Ananya Chidananda",
      role: "Director Membership",
      img: "https://media.licdn.com/dms/image/v2/C5603AQGazldaOkaYuQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1594542809029?e=1759363200&v=beta&t=6GX_AHpKKwODvnIRzQjbgRm0pdB2qi0yCv7FPIvulGE",
    },
    {
      name: "CA. Mayuri Kulkarni",
      role: "Director - Social Media",
      img: "https://media.licdn.com/dms/image/v2/D5603AQGBSqEA9uumtQ/profile-displayphoto-shrink_200_200/B56ZcTCodUHEAY-/0/1748371147740?e=1759363200&v=beta&t=wiBpvRQqzRBZJH-vDopEACeaAWBRU2PJP5yfWPZAyxo",
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
            The ICAI Seattle Chapter of the Institute of Chartered Accountants of India (ICAI) aims to build a network of Chartered Accountants based in the State of Washington.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <span className="text-xl font-extrabold w-full mb-4">Our key objectives are to:</span> 
            <br />

1. Provide a platform for members of The ICAI based in the Greater Seattle Region to connect/network. <br />
2. Promote professional development through periodic meetings and educational forums for The ICAI members. <br />
3. Generate goodwill between the accounting fraternities of the United States and the rest of the world.  <br />
4. Pave the path for ICAI members to work with and advance the relationship with local institutions and businesses and contribute to the well-being of the Greater Seattle Region. <br />
5. Work towards the formation of an ICAI Chapter in the Greater Seattle Region. 
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you are a Chartered Accountant (CA) from India living in Seattle, or are interested in joining the ICAI Seattle Chapter, we
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
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
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
