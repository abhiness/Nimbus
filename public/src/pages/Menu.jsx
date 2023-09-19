import React from "react";
import spicy from "../images/icons/spicy.png";
import sugarfree from "../images/icons/sugar-free.png";
import limited from "../images/icons/limited.png";
import nuts from "../images/icons/nuts.png";

function Menu() {
  return (
    <div className="w-full bg-gray-200 p-4">
      <h2 className="text-5xl font-semibold mb-4 font-cinzel">Menu</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-orange-800 hover:text-blue-800">
            <b>Starters</b> <span className="text-sm">(Vegetarian)</span>
          </a>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Chaat Trolley
              </div>
              <span style={{ marginRight: "200px" }}>$9.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Avocado Kebab with Chopped Salsa
              </div>
              <span style={{ marginRight: "200px" }}>$12.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Mushroom Galouti Tarts</div>
              <span style={{ marginRight: "200px" }}>$10.49</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={nuts} alt="Contains Nuts" className="w-4 h-4 mr-2" />
                Paneeer Tikka Paturi
              </div>
              <span style={{ marginRight: "200px" }}>$11.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Dahi Kebab with Mango-Pepper Chutney
              </div>
              <span style={{ marginRight: "200px" }}>$10.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                65 Medley
              </div>
              <span style={{ marginRight: "200px" }}>$12.49</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Desi Taco Sliders
              </div>
              <span style={{ marginRight: "200px" }}>$11.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Masala Antipasti Salad</div>
              <span style={{ marginRight: "200px" }}>$9.99</span>
            </div>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-orange-800">
            <b>Starters</b> <span className="text-sm">(Non-Vegetarian)</span>
          </a>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Kebab Kart</div>
              <span style={{ marginRight: "200px" }}>$13.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Chicken Tikka (Malai or Charcoal)
              </div>
              <span style={{ marginRight: "200px" }}>$11.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Surf-&-Turf Kebab Platter</div>
              <span style={{ marginRight: "200px" }}>$15.49</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Seekh Connoli with Mint Chutney
              </div>
              <span style={{ marginRight: "200px" }}>$12.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Chicken-65 Skewers
              </div>
              <span style={{ marginRight: "200px" }}>$13.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={nuts} alt="Contains Nuts" className="w-4 h-4 mr-2" />
                Meaty Taco Sliders
              </div>
              <span style={{ marginRight: "200px" }}>$14.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Tandoori Prawns
              </div>
              <span style={{ marginRight: "200px" }}>$16.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Tenderloin Steak with Tomato-Chutney
              </div>
              <span style={{ marginRight: "200px" }}>$18.99</span>
            </div>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-orange-800">
            <b>Main Course</b>
            <span className="text-sm">(Vegetarian)</span>
          </a>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Rajasthani Papad ki Subzi with Missi Roti
              </div>
              <span style={{ marginRight: "200px" }}>$14.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Ghar ki Khichdi (Masala, Plain, Ghee)
              </div>
              <span style={{ marginRight: "200px" }}>$11.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Pav Bhaji</div>
              <span style={{ marginRight: "200px" }}>$12.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={nuts} alt="Contains Nuts" className="w-4 h-4 mr-2" />
                Pinwheel Paneer Saag
              </div>
              <span style={{ marginRight: "200px" }}>$13.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Baked Palak Paneer Bharta</div>
              <span style={{ marginRight: "200px" }}>$14.49</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={nuts} alt="Contains Nuts" className="w-4 h-4 mr-2" />
                Mixed Kofta with Toasted Makhana
              </div>
              <span style={{ marginRight: "200px" }}>$13.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
                Marathi Misal with House-Baked Butter Pav
              </div>
              <span style={{ marginRight: "200px" }}>$12.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Creamy Nawabi Sabz-Haandi</div>
              <span style={{ marginRight: "200px" }}>$15.49</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
                India in a Thali
              </div>
              <span style={{ marginRight: "200px" }}>$16.99</span>
            </div>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-orange-800">
            <b>Main Course</b>
            <span className="text-sm">(Non-Vegetarian)</span>
          </a>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Marathi Chicken Curry with Roti
              </div>
              <span style={{ marginRight: "200px" }}>$16.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={nuts} alt="Contains Nuts" className="w-4 h-4 mr-2" />
                Goan Curry
              </div>
              <span style={{ marginRight: "200px" }}>$15.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
                Bangali Kosha Mangsho
              </div>
              <span style={{ marginRight: "200px" }}>$18.49</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Ghee Roast (Choice of Prawn or Chicken)
              </div>
              <span style={{ marginRight: "200px" }}>$17.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
                Slow-Cooked Mutton Nalli Nahari
              </div>
              <span style={{ marginRight: "200px" }}>$19.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
                A5 Wagyu Steak Biryani (also available in Chicken and Prawn)
              </div>
              <span style={{ marginRight: "200px" }}>$24.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
                Chicken Chettinad
              </div>
              <span style={{ marginRight: "200px" }}>$17.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Traditional Butter Chicken
              </div>
              <span style={{ marginRight: "200px" }}>$16.99</span>
            </div>
          </ul>

          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
                India in a Thali (non-vegetarian)
              </div>
              <span style={{ marginRight: "200px" }}>$18.99</span>
            </div>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-orange-800">
            <b>Sides</b>
          </a>

          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Choice of Bread (Naan/Roti cooked to any requested flavor and
                texture)
              </div>
              <span style={{ marginRight: "200px" }}>$3.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Assorted Bread Basket</div>
              <span style={{ marginRight: "200px" }}>$4.49</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Appam</div>
              <span style={{ marginRight: "200px" }}>$3.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Rice (Steamed, Jeera, or Lemon)
              </div>
              <span style={{ marginRight: "200px" }}>$2.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Raita of the Day</div>
              <span style={{ marginRight: "200px" }}>$2.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Papad Sampler</div>
              <span style={{ marginRight: "200px" }}>$1.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Kachumbar Salad</div>
              <span style={{ marginRight: "200px" }}>$2.49</span>
            </div>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-orange-800">
            <b>Desserts</b>
            <span className="text-sm">
              (Menu Curated for and by Chef's favorite guests )
            </span>
          </a>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Jalebi-Rabdi</div>
              <span style={{ marginRight: "200px" }}>$7.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Basundi</div>
              <span style={{ marginRight: "200px" }}>$6.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Gulab Jamun</div>
              <span style={{ marginRight: "200px" }}>$5.99</span>
            </div>
          </ul>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={sugarfree}
                  alt="Sugar-Free Available"
                  className="w-4 h-4 mr-2"
                />
                Gajar Ka Halwa
              </div>
              <span style={{ marginRight: "200px" }}>$7.49</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Brownie with Vanilla Ice-Cream
              </div>
              <span style={{ marginRight: "200px" }}>$8.49</span>
            </div>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-orange-800">
            <b>Drinks</b>
          </a>
          <ul className="ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={sugarfree}
                  alt="Sugar-Free Available"
                  className="w-4 h-4 mr-2"
                />
                Mango Lassi
              </div>
              <span style={{ marginRight: "200px" }}>$4.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Masala Chhaas</div>
              <span style={{ marginRight: "200px" }}>$2.80</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Masala Soda</div>
              <span style={{ marginRight: "200px" }}>$2.75</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Shikanji</div>
              <span style={{ marginRight: "200px" }}>$3.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Royal Rooh-Afza Sherbat</div>
              <span style={{ marginRight: "200px" }}>$3.99</span>
            </div>
          </ul>
          <ul className="ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">Masala Chai</div>
              <span style={{ marginRight: "200px" }}>$3.99</span>
            </div>
          </ul>
        </li>
      </ul>
      <div className="mt-8 text-sm text-gray-600">
        <div className="flex items-center">
          <img src={spicy} alt="Spicy" className="w-4 h-4 mr-2" />
          <p>Spicy</p>
        </div>
        <div className="flex items-center">
          <img src={limited} alt="Limited" className="w-4 h-4 mr-2" />
          <p>Limited Quanity Cooked & Available Daily</p>
        </div>
        <div className="flex items-center">
          <img src={nuts} alt="Contains Nuts" className="w-4 h-4 mr-2" />
          <p>Spicy</p>
        </div>
        <div className="flex items-center">
          <img src={sugarfree} alt="Limited" className="w-4 h-4 mr-2" />
          <p>Sugar-Free Option Available</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
