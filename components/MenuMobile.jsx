import Link from 'next/link';
import React from 'react'
import {BsChevronDown} from "react-icons/bs";

const data=[
    {id:1,name:"Home",url:"/" },
    {id:2,name:"about",url:"/about" },
    {id:3,name:"Categories",submenu:true },
    {id:1,name:"Contact",url:"/contact" }
];

const subMenuData=[
    {id:1,name:"jordan",doc_count:11},
    {id:2,name:"Sneakers",doc_count:8},
    {id:3,name:"Runnning Shoes",doc_count:64},
    {id:4,name:"Football Shoes",doc_count:107}
];

const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu }) => {
  return (
    <div>
      <ul className='flex flex-col mf:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50vh)] bg-white border-t text-black '>
          {data.map((item)=>{
            return (
                <React.Fragment key={item.id}>
                    {!!item?.submenu?(
                        <li className='cursor-pointer py-5 px-5 border-b flex felx-col relative'
                            onClick={()=>setShowCatMenu(!showCatMenu)}
                        >
                            <div className='flex justify-between items-center '>
                            {item.name}
                            <BsChevronDown size={14}/>
                            </div>

                            {
                                showCatMenu && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4 '>
                                        {subMenuData.map((submenu)=>{
                                            return(
                                                <Link key={submenu.id} href="/" onClick={()=> 
                                                 {   setShowCatMenu(false)
                                                     setMobileMenu(false)
                                                 }}>
                                                    <li className="py-4 px-8 border-t flex justify-between">
                                                <div>
                                                        {submenu.name}
                                                    <span className='opacity-50 text-sm'> 
                                                        79
                                                     </span>
                                                </div>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )
                            }
                        </li>
                    ):(
                        <li className='py-4 px-5 border-b'>
                          <Link href={item.name}
                          onClick={()=>setMobileMenu(fasle
                            )}
                          >
                        {item.name}</Link>
                        </li>
                    )}
                </React.Fragment>
            )
          })}
      </ul>
    </div>
  )
}

export default MenuMobile
