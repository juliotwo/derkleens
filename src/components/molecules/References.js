import Image from 'next/image';

export const referencesData = [
  {
    name: 'John Smith',
    description:
      'I had the privilege of attending one of your international leadership conferences, and it was truly an eye-opening experience. The lineup of speakers was impressive, featuring renowned experts from various industries. The sessions were well-structured, informative, and highly engaging. The conference provided valuable insights and practical strategies that I could immediately implement in my own leadership role. The networking opportunities with professionals from around the globe were also invaluable. I highly recommend your international leadership conferences to anyone looking to enhance their leadership skills.',
  },
  {
    name: 'Sophie Martin',
    description:
      'Attending your international innovation and technology course was a game-changer for my business. The course covered a wide range of topics, from emerging technologies to digital transformation strategies. The instructors were highly knowledgeable and provided real-world examples and case studies. The interactive nature of the course allowed for engaging discussions and hands-on learning. I left the course with a renewed perspective on innovation and a clear roadmap for implementing technological advancements in my organization. I highly recommend your international innovation courses to any business looking to stay ahead in the digital age.',
  },
  {
    name: 'Carlos Ramirez',
    description:
      'I recently participated in your international finance process efficiency workshop, and it exceeded my expectations. The workshop provided a comprehensive understanding of financial processes and best practices for improving efficiency. The facilitators were experts in the field and shared valuable insights and practical tools. The workshop exercises and case studies were highly relevant and allowed for hands-on learning. The international focus of the workshop provided a global perspective on financial process optimization. I highly recommend your workshops to finance professionals seeking to streamline their processes and drive greater efficiency.',
  },
  {
    name: 'Emma Chen',
    description:
      'As an international attendee at your leadership seminar, I was impressed by the caliber of the speakers and the quality of the content. The seminar offered a unique opportunity to learn from industry leaders and experts from different countries and cultural backgrounds. The sessions were thought-provoking, inspiring, and provided practical takeaways that transcended borders. The networking aspect of the seminar was exceptional, allowing me to connect with like-minded professionals from around the world. I highly recommend your leadership seminars to anyone seeking international perspectives on leadership and personal growth.',
  },
  {
    name: 'Andres Morales',
    description:
      'Participating in your international finance conference was an enriching experience. The conference brought together finance professionals from various countries, creating a diverse and dynamic learning environment. The topics covered were highly relevant, ranging from global financial trends to risk management strategies. The panel discussions and keynote presentations were insightful and provided valuable industry insights. Additionally, the opportunity to network with professionals from different parts of the world was invaluable. I highly recommend your international finance conferences to anyone looking to expand their global financial knowledge and network.',
  },
];

const References = () => {
  return (
    <section
      className='w-full relative min-h-screen flex flex-col py-28 bg-white'
      id='review'
    >
      <div className='container px-4 mx-auto min-h-screen flex flex-col justify-center'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase'>
          Reviews
        </h1>

        <div className='grid grid-cols-2 gap-5 mt-10'>
          <div className='grid grid-cols-2 gap-3'>
            {referencesData.map((item, i) => (
              <div
                className='p-8 bg-white flex justify-center flex-col shadow-green-200 shadow-md gap-4 rounded-xl'
                key={i}
              >
                <h3 className='font-bold flex items-center'>{item.name}</h3>

                <p className='font-light italic text-left lg:text-justify text-xs'>
                  &quot;{item.description}&quot;
                </p>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <Image
              src='/images/review.png'
              width={400}
              height={400}
              alt='Review'
              className='h-full w-full object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
