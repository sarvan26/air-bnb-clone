import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-5xl mb-3 w-64 text-white font-bold'>{title}</h3>
        <p className='text-md mb-3 w-64 text-white '>{description}</p>
        <button
          className='text-sm bg-white text-gray-900 
          px-4 py-2 rounded-lg mt-5'
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default LargeCard
