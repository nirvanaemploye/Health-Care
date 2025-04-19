import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import {
  FaHeart,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="py-20 bg-primary/10 container">
        <div className="">
          <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* frist Section  */}
            <div className="m-2 pr-">
              <h1 className="text-xl font-semibold text-primary">
                Health<span className="text-secondary">Care</span>
              </h1>
              <p className="mt-4 hover:text-primary/80 cursor-pointer duration-300">
                {" "}
                We are honored to be a part of your healthcare journey and
                committed to delivering compassionate, personalized, and
                top-notch care every step of the way.
              </p>
              <p className="mt-4 hover:text-primary/80 cursor-pointer duration-300">
                Trust us with your health, and let us work together to achieve
                the best possible outcomes for you and your loved ones.
              </p>
            </div>
            {/* Seccond Section  */}
            <div className="grid grid-cols-2 gap-10 m-2">
              <div className="space-y-4 ">
                <h1 className=" text-xl font-semibold text-primary">
                  Aboout Us
                </h1>
                <div>
                  <ul className="space-y-4">
                    <li className="cursor-pointer hover:text-primary duration-300">
                      Home
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                      About Us
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                      Work With Us
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                      Our Blog
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                      Terms & Conditions
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className=" text-xl font-semibold text-primary">
                Service
                </h1>
                <div>
                  <ul className="space-y-4">
                    <li className="cursor-pointer hover:text-primary duration-300">
                    Search Terms
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                    Advance Search
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                    Privacy Policy
                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                    Suppliers                    </li>
                    <li className="cursor-pointer hover:text-primary duration-300">
                    Our Stores
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
            {/* third section  */}
            <div className=" space-y-4 m-2">
              <h1 className="text-xl font-semibold text-primary">Contact Us</h1>

              <p className="cursor-pointer hover:text-primary duration-300 flex flex-row gap-2">
                <span>
                  <FaLocationDot />
                </span>
                123, London Bridge Street, London
              </p>
              <p className="cursor-pointer hover:text-primary duration-300 flex flex-row gap-2">
                <span>
                  <MdEmail />
                </span>
                support@care.com
              </p>
              <p className="cursor-pointer hover:text-primary duration-300 flex flex-row gap-2">
                <span>
                  <span>
                    <MdCall />
                  </span>
                </span>
                (+012) 3456 789
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-primary text-white container">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xs py-3">Copyright © 2023 Web Design Mastery. All rights reserved.</p>
          <div className="flex flex-row gap-6">
            <FaInstagram />
            <FaFacebookSquare />
            <FaHeart />
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
