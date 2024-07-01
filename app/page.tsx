import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section className='w-full pt-12 md:pt-24 lg:pt-32'>
        <div className='container space-y-10 xl:space-y-16'>
          <div className='grid gap-4 px-10 md:grid-cols-2 md:gap-16'>
            <div>
              <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                Trusted by Businesses Worldwide
              </h1>
              <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                Our platform has helped countless businesses achieve their
                goals. Hear what our customers have to say.
              </p>
              <div className='mt-6'>
                <a
                  href='#'
                  className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className='flex flex-col items-start space-y-4'>
              <Image
                src='https://generated.vusercontent.net/placeholder.svg'
                width='550'
                height='310'
                alt='Hero'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
