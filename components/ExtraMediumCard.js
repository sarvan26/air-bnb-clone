import Image from 'next/image'

function ExtraMediumCard({ img, title, description }) {
  return (
    <div
      className='hover:scale-105
      transition duration-300 ease-out py-7'
    >
      <div className='relative h-[450px] w-[450px]'>
        <Image src={img} layout='fill' className='rounded-2xl' />
      </div>
      <h3 className='text-xl mt-3 font-semibold'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ExtraMediumCard
