import { Link } from "react-router-dom";
import Logo from "../images/Logo/HeaderLogo.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 mt-10 font-cinzel">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-white text-4xl font-semibold">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-300 mt-2">
              Get notified about the latest templates, components, inspiration
              examples, and more.
            </p>
          </div>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="bg-slate-800 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-6"
              required
            />
            <button
              type="submit"
              className="bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <Link to="/" className="site-title">
        <img src={Logo} className="h-65 w-60" alt="Logo" />
      </Link>
    </footer>
  );
}
