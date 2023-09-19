import phoneicon from "../images/icons/icons-phone.png";
import emailicom from "../images/icons/icons-email.png";
import streetphoto from "../images/exterior/street.jpg";
import outphoto from "../images/interior/kitchen-flame.jpeg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div>
        <img src={streetphoto} className="h-auto w-full object-cover" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center text-white font-xanh-mono">
          Welcome to Nimbus
          <p className="mt-4 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8 ml-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center text-white font-xanh-mono">
            by Chef Abhi.
          </p>
        </div>
        <div
          style={{
            top: "10%",
            left: "50%",
            fontSize: "16px",
            marginTop: "20px",
            left: "50%",
            fontWeight: "bold",
            fontSize: "50px",
            textAlign: "center",
          }}
          className="text-orange-800 font-xanh-mono"
        >
          <h1>Why Nimbus?</h1>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <p>
            {" "}
            Nimbus is one of the newest upcoming fine-dining experiences in
            Indian cuisine available in Gotham City. Founded by Chef Abhi out of
            his love for Indian food, Nimbus was named after his favorite
            Broomsticks in the classic literature "Harry Potter". Since it's
            conception, Nimbus has celebrated bold Indian flavors and
            time-honored techniques, presented through Chef Abhi's modernist
            lens. Nimbus has been lauded with several accolades including the
            2023 Munchelin Guide Star, and recognized by Time Magainze's "30
            Restaurants to Eat At" in Gotham City{" "}
          </p>

          <p
            style={{
              marginTop: "30px",
            }}
          >
            <i>
              "Living alone in Gotham City, sometimes I wished I had a Nimbus
              Broomstick to fly over to Metropolis where we can get great Indian
              food. So I named my restaurant Nimbus to pay homeage to Harry
              Potter, as well as remind myself and the customers that just like
              the Broomstick, this restaurant too, wants to deliver some of the
              best, most reliable, and promising service and food. - Abhi Joshi
            </i>
          </p>
        </div>
        {""}
        <div className="flex justify-center space-x-40 ml-auto mt-10 font-xanh-mono">
          <Link
            to="/menu"
            className=" text-white text-2xl font-normal font-['Istok Web'] bg-orange-800 rounded-xl p-7 transition-all duration-300 hover:text-orange-800 hover:bg-white border border-orange-800"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className=" text-orange-800 text-2xl font-normal font-['Istok Web'] bg-white rounded-xl p-7 transition-all duration-300 hover:text-white hover:bg-orange-800 border border-orange-800 ml-4"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="mt-10 relative font-cinzel">
        <img
          src={outphoto}
          className="h-auto w-full object-cover"
          alt="Contact"
        />
        <p
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Contact Us
        </p>
      </div>
     <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
          <img src={phoneicon} />
          <p className="text-gray-600 ml-5 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl object-cover">
            +1 (516)516-6615
          </p>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
          <img src={phoneicon} />
          <p className="text-gray-600 ml-5 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl object-cover">
            +1 (718)888-9910
          </p>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
          <img src={emailicom} />
          <p className="text-gray-600 ml-5 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl object-cover">
            nimbus@nimbus.com
          </p>
        </div>
      </div>
    </>
  );
}
