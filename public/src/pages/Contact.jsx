import Hero from "../components/Hero";

export default function Contact() {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold">Restaurant Information</h2>

          <p>Hours of Operation</p>
          <p>Open Daily</p>
          <p>Lunch: 12 PM to 4 PM</p>
          <p>Dinner: 7 PM to 11 PM</p>
          <p>Last Reservation: 9:30 PM</p>
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold">Contact Details</h2>
          <p className="mt-4">Contact Us</p>
          <p>+1 (516)615-6615</p>
          <p>+1 (718)888-9910</p>
          <p>Email: nimbus@nimbus.com</p>
          <p>Dress Code:</p>
          <p>Smart,Formal, Elegant</p>
          <p>No shorts, no open-toed foot-wear allowed for Men</p>
          <p>Location:</p>
          <p>1026 Main Street, Gotham City</p>
        </div>
      </div>
    </>
  );
}
