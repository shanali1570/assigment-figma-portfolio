import { Heebo } from "next/font/google"
import Link from "next/link"
import RecentPostCard from "./RecentPostCard"

const heebo = Heebo({ subsets: ['latin'] })

const RecentPost = () => {
  return (
    <div className="w-screen h-[520px] bg-[#f4e2e2] ">

      <div className="w-[1030px] h-[308] mx-auto ">

        <div className="pt-[26px] flex justify-between">
          <h6 className={`text-[22px] ${heebo.className} font-extrabold`}>
            Recent Post
          </h6>
          <h6 className={`text-[22px] text-[#F98585] font-semibold ${heebo.className}`}>
            <Link href="/"> View all </Link>
          </h6>
        </div>

        <div className="flex items-center justify-between mt-7">
          
          <RecentPostCard/>
          <RecentPostCard/>
          
          
        </div>

      </div>

    </div>
  )
}

export default RecentPost