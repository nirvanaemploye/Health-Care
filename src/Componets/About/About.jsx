import AboutImg from "../../assets/about.jpg"
const About = () => {
  return (
    <>
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-4">
            <div className="flex flex-col space-y-5 lg:p-4 order-2 lg:order-1 text-center lg:text-start">
                <h1 data-aos="fade-right" data-aos-delay="200" className="text-3xl font-semibold">About Us </h1>
                <p data-aos="fade-right" data-aos-delay="400">Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.</p>
                <p data-aos="fade-right" data-aos-delay="600">Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.</p>
                <p data-aos="fade-right" data-aos-delay="800">Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and were here to guide you on your path to a healthier and happier you.</p>
            </div>
            <div data-aos="zoom-out" data-aos-duration="400" data-aos-delay="1000" className="lg:order-2 order-1">
                <img src={AboutImg} alt="" className="max-h-[500px] rounded-xl mx-auto" />
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
