
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


import { FaFacebook } from "react-icons/fa";
import Link from "next/link"
export default function Footer () {
    const year = new Date().getFullYear()

    return(
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py4 lg:px-2 lg:gap-0">
            <div>
                <p className="text-4xl text-blue-500 font-bold" >Artemis</p>
                <p className="text-xs text-gray-600"> &copy;{year} Business management application</p>
            </div>
            <div>
                <p className="text-md text-gray-700">Head office</p>
                <p className="text-md text-gray-700">Along nyanya-karshi road,Efko Mall</p>
            </div>
            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#"><FaFacebook className="text-blue-500 text-2xl"/></Link></li>
                    <li><Link href="#"><FaInstagramSquare className="text-blue-500 text-2xl"/></Link></li>
                    <li><Link href="#"><FaLinkedinIn  className="text-blue-500 text-2xl"/></Link></li>
                </ul>
                <ul className="flex lg:justify-end items-center gap-4">
                     <li><Link href="#" className="text-sm text-gray-600"></Link></li>
                      <li><Link href="#" className="text-sm text-gray-600"></Link></li>
                      <li><Link href="#" className="text-sm text-gray-600"></Link></li>

                </ul>
            </div>


        </footer>
    )
}