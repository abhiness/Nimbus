import aboutpic from "../images/interior/aboutpic.jpeg";
import mypic from "../images/People/chef.jpg";

export default function About() {
  return (
    <>
      <div>
        <img src={aboutpic} className="object-cover" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-bold font-cinzel text-center">
          About Us
        </div>
        <div
          style={{
            top: "10%",
            left: "50%",
            fontSize: "18px",
            marginTop: "20px",
            left: "50%",
            fontWeight: "light",
            textAlign: "center",
          }}
          className="text-black"
        >
          <p>
            I have always been intrigued with the UI/UX of restaurant websites,
            as the goal is to strike the balance of providing user with the
            right amount of information, without overhwelming them while also
            being as inviting to them as possible.<br></br> That being said,
            Nimbus was born as a concept restaurant to be a part of "Chef
            Abhi's" front-end development portfolio. As much as I enjoy Indian
            food, I cannot imagine the level of challenges that go into running
            and operation a succesful culinary venture of the magnitude that is
            portrayed on this website. The name came to me as I was preparing
            the wireframe for this project and had Harry Potter playing in the
            back. The scene was from the first movie when Harry gets his Nimbus
            2000 Broomstick for the first time. <br></br>
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <p className="text-orange-800 text-lg font-bold ">
            About the chef: Abhi Joshi
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            ipsum euismod, cursus sapien ac, consequat nunc. Donec sed ligula ac
            mauris fringilla bibendum. Nullam consequat, ex auctor efficitur
            viverra, urna metus ullamcorper sapien, ac gravida diam sem sed
            tellus.
          </p>
        </div>
        <img src={mypic} style={{ width: "585px", marginLeft: "20px" }} />
      </div>
    </>
  );
}
