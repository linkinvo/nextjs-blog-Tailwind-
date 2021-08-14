import Link from "next/link";

const Test = () => {
    return (
        <div className="
                    bg-white
                     mx-auto 
                     max-w-sm 
                     shadow-lg 
                     rounded-lg 
                     overflow-hidden"
                >
            <div className="sm:flex sm:items-center px-6 py-4">
                <div className="text-center sm:text-left sm:flex-grow">
                    <div className="mb-4">
                        <p className="text-xl leading-tight">Vladimir</p>
                        <p className="text-sm leading-tight text-grey-dark">Developer.</p>
                    </div>
                    <div>
                    <Link href="/">
     <button className="
                    text-xs font-semibold 
                    rounded-full 
                    px-2 py-3 
                    leading-normal 
                    bg-white 
                    border 
                    border-purple 
                    text-purple 
                    hover:bg-purple 
                    hover:text-red-500
                    ">
                            back
    </button>
                        </Link>

                        <Link href="google.com">
    <button className="
                    text-xs font-semibold 
                    rounded-full 
                    px-4 py-1 
                    leading-normal 
                    bg-white 
                    border 
                    border-purple 
                    text-purple 
                    hover:bg-purple 
                    hover:text-green-500
                    m-2
                    ">
                            Message
    </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Test;