// This function takes 3 seconds to get data from the database
export function getReviews() {
  //ideally we would have courseId to fetch the reviews for a particular course
  const courseReviews = [
    {
      userName: 'JohnDoe',
      review:
        'This course provided a great introduction to JavaScript. The instructor explained concepts clearly and the exercises were very helpful.',
    },
    {
      userName: 'JaneSmith',
      review:
        'I found the course content to be quite comprehensive. The real-world examples made it easy to understand how to apply the knowledge.',
    },
    {
      userName: 'AlexJohnson',
      review:
        'The course was well-structured and covered all the essential topics. However, I think it could benefit from more advanced material towards the end.',
    },
    {
      userName: 'EmilyDavis',
      review:
        'Excellent course! The pace was perfect for beginners, and the additional resources provided were very useful for further learning.',
    },
    {
      userName: 'MichaelBrown',
      review:
        'Good course overall, but some sections felt rushed. I appreciated the practical assignments which helped reinforce the learning.',
    },
  ];

  return new Promise<typeof courseReviews>((resolve) => {
    setTimeout(() => {
      resolve(courseReviews);
    }, 3000);
  });
}
