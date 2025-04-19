import { RiMicroscopeLine, RiMentalHealthLine } from "react-icons/ri";
import { TbBuildingHospital } from "react-icons/tb";

const serviceData = [
  {
    id: "1",
    icon: (
      <RiMicroscopeLine
        size={40}
        className="text-primary group-hover:text-white duration-300"
      />
    ),
    name: "Laboratory Test",
    Sub: "Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.",
    text: "Learn More",
  },
  {
    id: "2",
    icon: <RiMentalHealthLine size={40} className="text-primary group-hover:text-white duration-300"  />,
    name: "Health Check",
    Sub: "Our thorough assessments and expert evaluations help you stay proactive about your health.",
    text: "Learn More",
  },
  {
    id: "3",
    icon: (
      <TbBuildingHospital
        size={40}
        className="text-primary group-hover:text-white duration-300"
      />
    ),
    name: "General Dentistry",
    Sub: "Experience comprehensive oral care with Dentistry. Trust us to keep your smile healthy and bright.",
    text: "Learn More",
  },
];

const Service = () => {
  return (
    <section className="py-20 container">
      <div className="container">
        {/* Heading Section */}
        <div data-aos="fade-up" className="md:flex flex-row items-center justify-between text-center md:text-start space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Our Special Services</h1>
            <p className="max-w-2xl">
              Beyond simply providing medical care, our commitment lies in
              delivering unparalleled service tailored to your unique needs.
            </p>
          </div>
          <button  className="py-2 px-4 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white duration-300">
            Ask A Service
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="pt-16 flex flex-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:p-4">
          {serviceData.map((data) => (
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500" key={data.id} className="shadow-xl rounded-lg cursor-pointer">
              <div className="justify-center items-center space-y-5 text-center py-8 hover:bg-transparent group">
                <span className="w-20 h-20 p-2 flex items-center mx-auto justify-center bg-primary/10 rounded-full group-hover:bg-primary duration-500 cursor-pointer">
                  {data.icon}
                </span>
                <p className="font-semibold text-xl">{data.name}</p>
                <p className="px-5 lg:px-12 text-sm text-black/40">{data.Sub}</p>
                <p className="text-primary/70 cursor-pointer hover:underline group-hover:text-primary">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
