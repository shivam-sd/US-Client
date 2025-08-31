import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallary = () => {
  const EventsCard = [
    {
      Name: "Lead Genration",
      Img: "/gallaryevent.png",
    },
    {
      Name: "Real State",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywWv-RlOFsYUVd-h6fEwqGomfGbIKQkMSbg&s",
    },
    // {
    //   Name: "Networking Events",
    //   Img: "https://media.licdn.com/dms/image/v2/D4E22AQE0KCwlL8_FSQ/feedshare-shrink_2048_1536/B4EZili10PGwAo-/0/1755124033462?e=1759363200&v=beta&t=IlyFVRJgh_1RJjDt8bS4LdX1-tWdd7QNz5q2SOmxJqQ",
    // },
    {
      Name: "🌲 ICAI Seattle Chapter – Summer Hike Invitation 🌲",
      Img: "https://media.licdn.com/dms/image/v2/D4E22AQEj-CoUaT3u0A/feedshare-shrink_800/B4EZhDs99bHgAg-/0/1753482519608?e=1759363200&v=beta&t=I0JumiZ7PI_Dc5UJGtDbd5lYgAKLTmVj0Dn0JmNe1T4",
    },
    // {
    //   Name: "Benifits Of Networking",
    //   Img: "https://www.michaelpage.co.in/sites/michaelpage.com.au/files/inline-images/benefits%20of%20networking%2002.jpg",
    // },
    // {
    //   Name: "Social Media Guide",
    //   Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi6A7hwHS-g0ZWnJfuWLsW4-MZlykNxhWqQ&s",
    // },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto p-5 lg:bg-white md:bg-white bg-gray-100">
        <div className="p-1 mt-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-32 max-w-7xl mx-auto">
          {EventsCard.map((elm, idx) => {
            return (
              <>
                <div className="lg:w-[480px] md:w-[400px] w-80 rounded-2xl border mt-20">
                  <img
                    src={elm.Img}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <p className="text-center mt-1 mb-4 text-2xl">{elm.Name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallary;
