const Hero = () => {
  return (
    <>
      <section className="">
        <div className="container py-24 p-12">
          <div className="flex md:flex-row flex-col text-white">
            {/* Hero text  */}
            <div className="lg:flex flex-row gap-4 text-start items-center">
              <div className="flex flex-col lg:w-8/12 items-start gap-6">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-5xl lg:text-6xl font-bold"
                >
                  Providing an Exceptional Patient Experience
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="lg:max-w-xl"
                >
                  Welcome, where exceptional patient experiences are our
                  priority. With compassionate care, state-of-the-art
                  facilities, and a patient-centered approach, were dedicated to
                  your well-being. Trust us with your health and experience the
                  difference.
                </p>
                <button
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                  className="text-md bg-secondary px-6 py-2 rounded-md "
                >
                  See Services
                </button>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" className="mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg w-full max-w-sm mt-10 lg:mt-0">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Book Now
                </h3>
                <form className="flex flex-col space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="p-3 bg-primary/10 placeholder:text-primary rounded-md"
                    // onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-3 bg-primary/10 placeholder:text-primary rounded-md"
                    // onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="p-3 bg-primary/10 placeholder:text-primary rounded-md"
                    // onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    className="p-3 bg-primary/10 placeholder:text-primary rounded-md"
                    // onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
