import { Heebo } from "next/font/google"
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const heebo = Heebo({ subsets: ['latin'] })

const Footer = () => {

    return (
        <div className='bg-footerBackground h-[243pxx] flex flex-col justify-center items-center space-y-6'>

            <div className="flex space-x-10">
                <Link href=""><FaFacebookSquare className="w-[30px] h-[30px]" /></Link>
                <Link href=""><FaInstagram className="w-[30px] h-[30px]" /></Link>
                <Link href=""><FaTwitter className="w-[36.92px] h-[30px]" /></Link>
                <Link href=""><FaLinkedinIn className="w-[30px] h-[30px]" /></Link>

            </div>
            <p className={`${heebo.className} text-center text-[22px] font-medium`}>
                Copyright ©2020 All rights reserved
            </p>

        </div>
    )
}

export default Footer