import Image from 'next/image';
import { getReviews } from './db';
import { ReviewCard } from './components/review-card';
import { Suspense } from 'react';
import { cookies } from 'next/headers';

async function Reviews() {
  const user = cookies().get('user')?.value;
  const reviews = await getReviews();
  return reviews.map(({ review, userName }) => (
    <ReviewCard key={userName} review={review} userName={userName} />
  ));
}

export default function Home() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
        <div className='container m-auto px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                  Mastering React: A Comprehensive Course
                </h1>
                <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                  Dive deep into the world of React and become a proficient
                  frontend developer. This course covers everything from
                  fundamental concepts to advanced techniques.
                </p>
              </div>
              <button className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:bg-primary/90'>
                Enroll Now
              </button>
            </div>
            <Image
              src='https://generated.vusercontent.net/placeholder.svg'
              width='550'
              height='550'
              alt='Course Hero'
              className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
            />
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container m-auto px-4 md:px-6'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div>
              <h2 className='text-3xl font-bold tracking-tighter'>
                Course Curriculum
              </h2>
              <div className='mt-6 space-y-4 text-muted-foreground'>
                <div>
                  <h3 className='text-xl font-bold'>Introduction to React</h3>
                  <p>
                    Learn the fundamentals of React, including components,
                    state, and props.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold'>Advanced React Concepts</h3>
                  <p>
                    Explore advanced topics like hooks, context, and performance
                    optimization.
                  </p>
                </div>
                <div>
                  <h3 className='text-xl font-bold'>
                    Building Real-World Apps
                  </h3>
                  <p>
                    Apply your knowledge by building complex, production-ready
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className='text-3xl font-bold tracking-tighter'>
                About the Instructor
              </h2>
              <div className='mt-6 space-y-4 text-muted-foreground'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full border'>
                    <Image
                      src='https://generated.vusercontent.net/placeholder.svg'
                      alt='Instructor'
                      width={64}
                      height={64}
                      className='h-full w-full rounded-full object-cover'
                    />
                    <span className='sr-only'>JD</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>John Doe</h3>
                    <p>Senior Frontend Engineer</p>
                  </div>
                </div>
                <p>
                  John Doe is a seasoned frontend engineer with over 10 years of
                  experience. He has worked on a wide range of projects, from
                  small startups to large enterprises, and is passionate about
                  sharing his knowledge with others.
                </p>
                <div>
                  <h3 className='text-xl font-bold'>Course Duration</h3>
                  <p>24 hours of video content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
        <div className='container m-auto px-4 md:px-6'>
          <h2 className='text-3xl font-bold tracking-tighter mb-8'>
            Customer Reviews
          </h2>
          <Suspense fallback='loading..'>
            <Reviews />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
