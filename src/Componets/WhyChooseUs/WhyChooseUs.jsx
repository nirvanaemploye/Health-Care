import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import img from "../../assets/choose-us.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { RiHospitalLine } from "react-icons/ri";
const WhyChooseUs = () => {
  return (
    <>
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center p-4 ">
          <div>
            <img
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-delay="1000"
              src={img}
              alt=""
              className="max-h-[500px] rounded-xl mx-auto"
            />
          </div>
          <div className="flex flex-col space-y-5 p-3 ">
            <h1 data-aos="fade" className="text-3xl font-semibold text-center">
              Why Choose Us
            </h1>
            <p data-aos="fade" data-aos-delay="200" className="text-center text-black/50">
              With a steadfast commitment to your well-being, our team of highly
              trained healthcare professionals ensures that you receive nothing
              short of exceptional patient experiences.
            </p>
            <div className="space-y-6 ">
              <div data-aos="fade-down" data-aos-delay="400" className="flex flex-row items-center gap-6 pt-5">
                <div className="shadow-2xl rounded-xl px-5 py-7">
                  <LiaHandHoldingHeartSolid className="h-full w-full text-6xl text-primary " />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Intensive Care</p>
                  <p>
                    Our Intensive Care Unit is equipped with advanced technology
                    and staffed by team of professionals
                  </p>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="500" className="flex flex-row items-center gap-6">
                <div className="shadow-2xl rounded-xl px-5 py-7">
                  <TbTruckDelivery className="font-bold h-full w-full text-6xl text-primary " />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Free Ambulance Car</p>
                  <p>
                    A compassionate initiative to prioritize your health and
                    well-being without any financial burden.
                  </p>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="600" className="flex flex-row items-center gap-6">
                <div className="shadow-2xl rounded-xl px-5 py-7">
                  <RiHospitalLine className="h-full w-full text-6xl text-primary " />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Medical and Surgical</p>
                  <p>
                    Our Medical and Surgical services offer advanced healthcare
                    solutions to address medical needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
