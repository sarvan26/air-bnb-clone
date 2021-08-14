import Image from 'next/image'

function SmallCard({ location, img, distance }) {
  return (
    <div className='flex mt-5 m-2 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition delay-100 ease-out'>
      <div className='relative h-16 w-16'>
        <Image src={img} layout='fill' className='rounded-xl' />
      </div>
      <div className=''>
        <h2 className='font-semibold'>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
