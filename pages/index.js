import Head from 'next/head'
import Header from '../components/Header'
import 'tailwindcss/tailwind.css'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import discoverData from './discover.json'
import ExtraMediumCard from '../components/ExtraMediumCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Airbnb-clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-8xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='font-semibold text-3xl pb-4'>Explore nearby</h2>
          <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          xl:grid-cols-4 cursor-pointer'
          >
            {exploreData?.map((data) => (
              <SmallCard key={data.imag} {...data} />
            ))}
          </div>
        </section>
        <section className='pt-10'>
          <h2 className='font-semibold text-3xl pb-4'>Live anywhere</h2>
          <div className='flex overflow-scroll space-x-4 p-2 scrollbar-hide -ml-3'>
            {cardsData?.map((item) => (
              <MediumCard key={item.img} {...item} />
            ))}
          </div>
        </section>
        <LargeCard
          img='/lady.jpg'
          title='Try hosting'
          description='Earn extra income and unlock new opportunities by sharing your space'
          buttonText='Learn more'
        />
        <section className='pt-10'>
          <h2 className='font-bold text-3xl pb-4'>Discover Experiences</h2>
          <p className='font-semibold'>
            Unique activities with local experts – in person or online.
          </p>
          <div className='flex overflow-scroll space-x-4 p-2 scrollbar-hide -ml-3 mb-10'>
            {discoverData?.map((item) => (
              <ExtraMediumCard key={item.img} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch(
    'https://links.papareact.com/pyp'
  ).then((res) => res.json())
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
