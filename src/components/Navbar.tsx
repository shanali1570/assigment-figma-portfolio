import {Inter} from 'next/font/google';
import Link from 'next/link';

//For Google Fonts
const inter = Inter({subsets: ['latin']});

const Navbar = () => {

    const navItems = [

        // Navbar item here
        {
            name:"Works",
            link:"#",
        },
        {
            name:"Blog",
            link:"#",
        },
        {
            name:"Contact",
            link:"#"
        }
    ]

    return (

   <ul className={`${inter.className} flex items-center justify-end m-[66px] h-[24px] font-medium text-[20px] space-x-6`}>

        {navItems.map((item,i)=>(
            <li key={i}><Link href={item.link}>{item.name}</Link></li>
        ))}

{/*     
    <li>Works</li>
    <li>Blog</li>
    <li>Contact</li> */}
   </ul>
    
)
}

export default Navbar