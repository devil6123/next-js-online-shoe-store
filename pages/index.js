import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return <main >
            <HeroBanner/>
            <Wrapper> 
{/* Heading and paragraph start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            Cushioning for your Miles
                            </div>
                    <div className="text-md:text-xl ">
                    A light weight Nike ZoomX midsole is comnbnined
                     with increased stack heights to help provide
                    cushioning during extended stretches of running 
                    </div>
                </div>
{/* Heading and paragraph End */}

Product Grid start
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
{/* <ProductCard/> */}
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
        </div>
{/* Product Grid End */}
            </Wrapper>
    </main>;
}
