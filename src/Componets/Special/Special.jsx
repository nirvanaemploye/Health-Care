import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Doc1 from "../../assets/doctor-1.jpg";
import Doc2 from "../../assets/doctor-2.jpg";
import Doc3 from "../../assets/doctor-3.jpg";

const DocData = [
  {
    id: "1",
    img: Doc1,
    name: "Dr. Emily Smith",
    spc: "Cardiologist",
  },
  {
    id: "2",
    img: Doc2,
    name: "Dr. James Anderson",
    spc: "Neurosugeon",
  },
  {
    id: "3",
    img: Doc3,
    name: "Dr. Michael lee",
    spc: "dermaologist",
  },
];

const Special = () => {
  return (
    <>
      <section className="py-20 ">
        <div className="container">
          {/* Heading Section  */}
          <div data-aos="fade-up" data-aos-duration="400" className="flex flex-row items-center justify-between px-4">
            <div>
              <h1 className="text-4xl font-semiblack">Our Special Doctors</h1>
              <p className="max-w-2xl mt-4">
                We take pride in our exceptional team of doctors, each a
                specialist in their respective fields.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-primary/5 px-3 py-4 text-primary text-xl">
                <FaArrowLeft />
              </div>
              <div className="bg-primary/5 px-3 py-4 text-primary text-xl">
                <FaArrowRight />
              </div>
            </div>
          </div>
          {/* Card Section  */}
          {/* <div className="py-8 flex flex-wrap"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 px-4">
              {DocData.map((Data) => (
                <div  data-aos="flip-left" data-aos-duration="800" key={Data.id} className="p-3" >
                  <div className="shadow-lg rounded-lg">
                    <img src={Data.img} alt="" />

                    <div className="text-center py-5">
                      <h1 className="font-semibold text-xl">{Data.name}</h1>
                      <p className="text-sm text-black/50">{Data.spc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Special;
