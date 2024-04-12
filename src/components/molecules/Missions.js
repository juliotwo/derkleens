const missions = [
  {
    title: "Mission",
    description:
      "Our mission at StrenuusPro is to provide exceptional event preparation services to businesses, delivering seamless and memorable experiences that exceed our clients' expectations. We aim to be a reliable partner in creating successful corporate events that inspire, engage, and leave a lasting impact on attendees.",
  },
  {
    title: "Vision",
    description:
      "Our vision is to become a leading global provider of event solutions, renowned for our innovation, professionalism, and commitment to delivering unparalleled value to our clients. We strive to continually raise the bar in event management by embracing emerging technologies, fostering creativity, and fostering strong partnerships with our clients and suppliers.",
  },
  {
    title: "Values",
    description:
      "Excellence: We are committed to delivering excellence in every aspect of our work, from event planning and execution to customer service and client satisfaction. Collaboration: We believe in the power of collaboration and teamwork. We foster a culture of open communication, cooperation, and respect among our team members, clients, and partners. Integrity: We conduct our business with the utmost integrity, honesty, and transparency. We uphold ethical standards and maintain the confidentiality and trust of our clients and stakeholders. Innovation: We embrace innovation and constantly seek new and creative ways to enhance the event experience for our clients and attendees. We stay ahead of industry trends and leverage technology to deliver cutting-edge solutions. Customer Focus: Our clients are at the heart of everything we do. We listen to their needs, understand their objectives, and strive to exceed their expectations by providing personalized and tailored event solutions. Impact: We aim to make a positive impact on the businesses and individuals we serve. Through our events, we inspire, educate, and empower attendees, leaving a lasting impression and contributing to their success.",
  },
];

const Missions = () => {
  return (
    <section className="py-28 min-h-screen bg-black" id="more">
      <div className="container px-4 mx-auto grid grid-cols-2 gap-5 h-full">
        <div className="flex flex-col gap-5 h-full">
          {missions.slice(0, 2).map((item, i) =>
            item !== null ? (
              <div
                className="flex flex-col gap-3 text-black bg-white rounded-none shadow-lg p-10"
                key={i}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="font-light text-sm text-left lg:text-justify">
                  {item.description}
                </p>
              </div>
            ) : (
              <div key={i} />
            )
          )}
        </div>

        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-3 text-black bg-white h-full rounded-none shadow-lg p-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
              {missions[2].title}
            </h3>

            <p className="font-light text-sm text-left lg:text-justify">
              {missions[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;
