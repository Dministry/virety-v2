import Image from "next/image";
import { 
    MagnifyingGlassCircleIcon,
    GlobeAltIcon, UserIcon, UserCircleIcon, UsersIcon, Bars3Icon
 }  from "@heroicons/react/24/solid";


const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md p-4 md:px-10">
            <div className="flex justify-between h-8">
                {/* logo */}
                <div className="md:p-1 flex items-center bg-black rounded shadow cursor-pointer">
                    <Image
                        src="/header/virety-logo-32.png"
                        alt="virety logo"
                        width={120}
                        height={30}
                        className="text-black"
                    />
                </div>
                {/* middle-search */}
                <div className="rounded-full p-1 md:border-2 flex items-center justify-between basis-1/4 mx-auto h-10">
                    <input 
                        type="text"
                        placeholder="Start your search"
                        name="" 
                        id=""
                        className="text-sm text-gray-600 bg-transparent placeholder:text-sm placeholder:px-1 placeholder-gray-400 outline-none" 
                    />
                    <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 text-green-500 cursor-pointer"/>
                </div>
                <div className="flex space-x-4 items-center justify-end text-gray-500 w-10 md:w-auto">
                    <p className="text-sm md:text-md cursor-pointer hidden md:inline-flex">Become a host</p>
                    <GlobeAltIcon className="h-6 cursor-pointer hidden md:inline-flex" />
                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                        <Bars3Icon className="h-6 cursor-pointer" />
                        <UserCircleIcon className="h-6 cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;