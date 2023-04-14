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

const Menu = ({showCatMenu,setShowCatMenu}) => {
  return (
    <div>
      <ul className='hidden md:flex items-center gap-8 font-meduim text-black'>
          {data.map((item)=>{
            return (
                <React.Fragment key={item.id}>
                    {!!item?.submenu?(
                        <li className='cursor-pointer flex items-center gap-2 relative'
                        onMouseEnter={()=> setShowCatMenu(true)}
                        onMouseLeave={()=> setShowCatMenu(false)}
                        >
                            {item.name}
                            <BsChevronDown size={14}/>

                            {
                                showCatMenu && (
                                    <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                                        {subMenuData.map((submenu)=>{
                                            return(
                                                <Link key={submenu.id} href="/" onClick={()=> setShowCatMenu(false)}>
                                                    <li className='h-12 flex justify-between  items-center px-3 hover:bg-black/[0.03]
                                                    rounded-md'>
                                                        {submenu.name}
                                                    <span className='opacity-50 text-sm'> 79 </span>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )
                            }
                        </li>
                    ):(
                        <li className='cursor-pointer'>
                          <Link href={item.name}>{item.name}</Link>
                        </li>
                    )}
                </React.Fragment>
            )
          })}
      </ul>
    </div>
  )
}

export default Menu
