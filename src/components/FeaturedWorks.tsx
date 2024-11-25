import { Heebo } from "next/font/google"
import Image from "next/image"

const heebo = Heebo({ subsets: ['latin'] })


const FeaturedWorks = () => {

  const FeaturedItems = [
    {
      image : "Rectangle30.png",
      name : "Designing Dashboards",
      year : 2020,
      text : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
    },
    {
      image : "Rectangle32.png",
      name : "Designing Dashboards",
      year : 2020,
      text : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
    },
    {
      image : "Rectangle34.png",
      name : "Designing Dashboards",
      year : 2020,
      text : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
    },
  ]

  return (
    <div className="w-[1030px] mx-auto mt-20 mb-40 ">
      <h1 className={`text-[22px] ${heebo.className} font-bold`}>
        Featured works
      </h1>

      {
        FeaturedItems.map((item,i)=>(
          
      <div key={i} className="mt-6 mb-20 flex space-x-6">
      <Image src={`/${item.image}`} alt="Rectangle 30" width={246} height={180} />
      <div className="flex flex-col justify-between">
        <h2 className={`${heebo.className} text-[30px] font-extrabold`}>{item.name}</h2>
        
        <div className="flex space-x-8">
          <div className="bg-[#F98585] text-white w-[68px] h-[24px] text-center rounded-xl">
            <p className={`${heebo.className} text-[18px]`}>{item.year}</p>
          </div>
          <p className={`${heebo.className} text-[20px]`}>Dashboard</p>
        </div>
        <p className={`${heebo.className} text-[18px] w-[622px]`}>
          {item.text}
          </p>
      </div>
    </div>
        ))
      }

    </div>
  )
}

export default FeaturedWorks