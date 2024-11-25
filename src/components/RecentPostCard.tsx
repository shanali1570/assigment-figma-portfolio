import { Heebo } from "next/font/google"

const heebo = Heebo({ subsets: ['latin'] })


const RecentPostCard = () => {
  return (
    <div className="w-[483px] h-[356] bg-white text-black">

            <div className="w-[391px] h-[286px] mx-auto mt-9 ">
              <h1 className={`${heebo.className} text-[26px] font-bold`}>
                Making a design system from scratch
              </h1>
              <div className="my-6 flex space-x-8">
                <p className={`${heebo.className} text-[18px]`}>12 Feb 2020</p>
                <div className="border-2 border-black" />
                <p className={`${heebo.className} text-[18px]`}>Design , Pattern</p>
              </div>
              <p className={`${heebo.className} text-[16px]`}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>


          </div>
  )
}

export default RecentPostCard