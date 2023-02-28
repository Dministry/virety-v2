import Image from "next/image"
const Product = () => {
    return (
        <div>
             <div className="relative w-[250px] h-[160px] p-2 border-1 rounded-full shadow">
                <Image
                    src="/test/1.jpg"
                    alt="beautiful house"
                    fill
                />
            </div>
            <p>Address</p>
        </div>
    )
}

export default Product