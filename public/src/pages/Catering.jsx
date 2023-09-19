import galapic from "../images/interior/gala.jpeg";

export default function Catering() {
  return (
    <>
      <div>
        <img src={galapic} style={{ height: "600px", width: "100%" }} />
        <div
          className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold font-xanh-mono"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          Gala by Nimbus
          <p style={{ marginTop: "16px" }}>Coming Soon</p>
        </div>
        <div></div>
      </div>
    </>
  );
}
