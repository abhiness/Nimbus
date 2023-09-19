import galapic from "../images/interior/gala.jpeg";

export default function Catering() {
  return (
    <>
      <div>
        <img
          src={galapic}
          style={{ height: "600px", width: "100%" }}
          className="object-cover"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-xanh-mono">
          Gala by Nimbus
          <p className="mt-4 sm:mt-2 md:mt-2 lg:mt-4 xl:mt-2 ml-4">
            Coming Soon
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}
