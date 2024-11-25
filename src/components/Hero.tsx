import { Heebo } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const heebo = Heebo({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div className='my-[179px] px-1 w-[1030px] h-[308] mx-auto flex items-center justify-between'>

      {/* Hero left section */}
      <div className='w-[521px] h-[305px] flex flex-col space-y-6'>
        <h1 className={`${heebo.className} text-[48px]`}>Hi, I am John, <br />
          Creative Technologist</h1>

        <p className={`${heebo.className} text-[16px] w-[497px] h-[66px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.</p>

        {/* Downolad button */}

        <div className='w-[205px] h-[50px] z-50 relative flex items-center'>
          <p className={`${heebo.className} text-[17px] text-[#FFFFFF] m-auto w-[151px] h-[26px]`}>
            <Link href='/'>Download Resume</Link>

          </p>
          <div className='bg-myPink w-[205px] h-[50px] -z-10 absolute shadow-lg shadow-black/50 rounded-md' />
        </div>
      </div>

      {/* Hero left section */}
      <div className='w-[292px] h-[299px] relative z-50'>
        <Image alt='Hero' src="/hero.png" width={292} height={299} className='ml-1 ' />
        <div className='bg-heroElipse w-[292px] h-[299px] rounded-full absolute mt-1 top-0 -z-10' />
      </div>

    </div>
  )
}

export default Hero