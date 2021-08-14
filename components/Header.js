import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon
} from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function Header() {
  return (
    <header className='sticky z-50 bg-white grid-cols-3 top-0 p-3 md:px-10 grid shadow-md'>
      <div className='relative h-10 cursor-pointer flex items-center my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div className='flex w-full md:justify-center items-center'>
        <div
          className='flex w-[300px] md:border-2 rounded-full py-2 items-center 
      md:shadow-sm hover:shadow-md cursor-pointer'
        >
          <input
            type='text'
            placeholder='Start your search'
            className='cursor-pointer outline-none bg-transparent flex-grow pl-5 text-gray-600
          placeholder-gray-900'
          />
          <SearchIcon
            className='hidden md:inline-flex h-8 text-white
         rounded-full bg-red-400 p-2 cursor-pointer md:mx-2'
          />
        </div>
      </div>
      <div className='flex items-center text-gray-800 justify-end space-x-4'>
        <p className='hidden md:inline-flex cursor-pointer p-2 rounded-full hover:bg-gray-100 font-semibold'>
          Become a host
        </p>
        <div className='p-2 h-10 items-center hover:bg-gray-100 rounded-full'>
          <GlobeAltIcon className='h-6 cursor-pointer hover:bg-gray-200 rounded-full' />
        </div>
        <div className='flex border-2 rounded-full space-x-2 items-center hover:shadow-md'>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? '' : 'text-opacity-90'}
                group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <MenuIcon className='h-6 cursor-pointer' />
                  <UserCircleIcon className='h-6 cursor-pointer text-gray-500' />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute z-10 max-w-sm px-4 mt-3 transform -translate-x-1/2  sm:px-0 lg:max-w-3xl w-60 -left-6'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative bg-white py-1'>
                        <div className='border-b-2'>
                          <div className='cursor-pointer hover:bg-gray-100 p-3 font-semibold'>
                            Sign up
                          </div>
                          <div className='cursor-pointer hover:bg-gray-100 p-3'>
                            Login
                          </div>
                        </div>
                        <div className='cursor-pointer hover:bg-gray-100 p-3 mt-1'>
                          Host your home
                        </div>
                        <div className='cursor-pointer hover:bg-gray-100 p-3 mt-1'>
                          Host an experience
                        </div>
                        <div className='cursor-pointer hover:bg-gray-100 p-3 mt-1'>
                          Help
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header
