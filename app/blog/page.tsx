import Newsletters from "@/components/Newsletters";
import { ArrowRight, Book, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <section>
      <div className="h-[70vh] mx-[3%] bg-amber-100">BlogPage</div>

      <div className="mx-[5%] mt-[20px] flex flex-row justify-between">
        <h1 className="flex flex-row justify-between items-center bg-gray-200 w-[250px] p-[20px] text-[15px] font-light capitalize rounded-lg">checking out avariable campaigns</h1>
        <div className="w-[80%] flex flex-row items-center justify-center">
          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">Education</small>
          </span>

          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">Health</small>
          </span>

          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">sports</small>
          </span>

          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">food</small>
          </span>

          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">Education</small>
          </span>

          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">Education</small>
          </span>

          <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
            <span>
              <Book size={20}/>
            </span>
            <small className="text-center capitalize text-[13px] mt-[10px]">Education</small>
          </span>
        </div>
      </div>

      <div className="mx-[3%] mt-[50px]">
        <h1 className="flex flex-row justify-between items-center bg-orange-400 px-[30px] rounded-sm capitalize text-[13px] h-[30px] text-white">trending campaigns <Link href={""} className="hover:text-gray-300">see all</Link></h1>
        <div className="flex flex-row justify-evenly items-center mx-0 my-[5%] mb-[10%]">
      <div className="relative flex flex-col items-center bg-white w-[370px] rounded-[50px] rounded-tl-[0px] rounded-br-[0px]">
        <span className="absolute flex flex-col justify-center items-center top-[20px] left-[40px] h-[20px] px-[20px] py-[0px] capitalize text-[11px] text-white rounded-[5px] bg-black">unsuccessful</span>
        <span className="absolute flex flex-col justify-center items-center top-[20px] right-[40px] h-[20px] w-[30px] text-[11px] text-white rounded-[5px] bg-black"> <Video size={14}/> </span>
        <span className="absolute flex flex-col justify-center items-center bottom-[0px] right-[0px] h-[50px] w-[50px] text-white cursor-pointer bg-orange-400 rounded-tl-[35px]"> <ArrowRight size={15}/> </span>

        <div className="h-[250px] w-full bg-gray-200 rounded-tr-[50px] rounded-bl-[50px]"></div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between mx-[40px] my-[20px]">
            <span className="flex flex-col justify-center">
              <small className='text-[11px] capitalize'>current</small>
              <h4 className='text-[13px] font-semibold'>$960</h4>
            </span>
            <h1 className='text-[30px] font-black'>12 <sup>%</sup></h1>
            <span className="flex flex-col justify-center">
              <small className='text-[11px] capitalize'>target</small>
              <h4 className='text-[13px] font-semibold'>$8,000</h4>
            </span>
          </div>
          <h1 className='my-[20px] mx-[40px] text-[20px] capitalize'>minivan build match, double your gift, double your fund</h1>
          <p className='text-[13px] mx-[40px] my-[0px] mb-[50px]'>
            "Contribute to October's Minivan Build in Pahrump, and toward
            another build in 2020. An anonymous donor will match your gift,
            dollar for dollar..."
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center bg-white w-[370px] rounded-[50px] rounded-tl-[0px] rounded-br-[0px]">
        <span className="absolute flex flex-col justify-center items-center top-[20px] left-[40px] h-[20px] px-[20px] py-[0px] capitalize text-[11px] text-white rounded-[5px] bg-black">unsuccessful</span>
        <span className="absolute flex flex-col justify-center items-center top-[20px] right-[40px] h-[20px] w-[30px] text-[11px] text-white rounded-[5px] bg-black"> <Video size={14}/> </span>
        <span className="absolute flex flex-col justify-center items-center bottom-[0px] right-[0px] h-[50px] w-[50px] text-white cursor-pointer bg-orange-400 rounded-tl-[35px]"> <ArrowRight size={15}/> </span>

        <div className="h-[250px] w-full bg-gray-200 rounded-tr-[50px] rounded-bl-[50px]"></div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between mx-[40px] my-[20px]">
            <span className="flex flex-col justify-center">
              <small className='text-[11px] capitalize'>current</small>
              <h4 className='text-[13px] font-semibold'>$960</h4>
            </span>
            <h1 className='text-[30px] font-black'>12 <sup>%</sup></h1>
            <span className="flex flex-col justify-center">
              <small className='text-[11px] capitalize'>target</small>
              <h4 className='text-[13px] font-semibold'>$8,000</h4>
            </span>
          </div>
          <h1 className='my-[20px] mx-[40px] text-[20px] capitalize'>minivan build match, double your gift, double your fund</h1>
          <p className='text-[13px] mx-[40px] my-[0px] mb-[50px]'>
            "Contribute to October's Minivan Build in Pahrump, and toward
            another build in 2020. An anonymous donor will match your gift,
            dollar for dollar..."
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center bg-white w-[370px] rounded-[50px] rounded-tl-[0px] rounded-br-[0px]">
        <span className="absolute flex flex-col justify-center items-center top-[20px] left-[40px] h-[20px] px-[20px] py-[0px] capitalize text-[11px] text-white rounded-[5px] bg-black">unsuccessful</span>
        <span className="absolute flex flex-col justify-center items-center top-[20px] right-[40px] h-[20px] w-[30px] text-[11px] text-white rounded-[5px] bg-black"> <Video size={14}/> </span>
        <span className="absolute flex flex-col justify-center items-center bottom-[0px] right-[0px] h-[50px] w-[50px] text-white cursor-pointer bg-orange-400 rounded-tl-[35px]"> <ArrowRight size={15}/> </span>

        <div className="h-[250px] w-full bg-gray-200 rounded-tr-[50px] rounded-bl-[50px]"></div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between mx-[40px] my-[20px]">
            <span className="flex flex-col justify-center">
              <small className='text-[11px] capitalize'>current</small>
              <h4 className='text-[13px] font-semibold'>$960</h4>
            </span>
            <h1 className='text-[30px] font-black'>12 <sup>%</sup></h1>
            <span className="flex flex-col justify-center">
              <small className='text-[11px] capitalize'>target</small>
              <h4 className='text-[13px] font-semibold'>$8,000</h4>
            </span>
          </div>
          <h1 className='my-[20px] mx-[40px] text-[20px] capitalize'>minivan build match, double your gift, double your fund</h1>
          <p className='text-[13px] mx-[40px] my-[0px] mb-[50px]'>
            "Contribute to October's Minivan Build in Pahrump, and toward
            another build in 2020. An anonymous donor will match your gift,
            dollar for dollar..."
          </p>
        </div>
      </div>

    </div>
      </div>

      <div className="mx-[3%] mt-[50px]">
        <h1 className="flex flex-row justify-between items-center bg-black px-[30px] rounded-sm capitalize text-[13px] h-[30px] text-white mb-5">our top Articles<Link href={""} className="hover:text-gray-300">see all</Link></h1>
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>


          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>


          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>

          <div className="w-[400px]">
            <Link href={""} className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer">img</Link>
            <h1 className="font-light mx-5 capitalize text-[20px]">Supporting Young People With Self-Acceptance</h1>
            <span className="flex flex-row w-full mx-5 my-3 justify-start">
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">Education</small>
            </span>
            <p className="text-[13px] mx-5 my-2">Most children with Spina Bifida have Neurogenic bladder and bowel and no one wants them because of incontinence problems...</p>
          </div>
        </div>
      </div>



      <div className="mx-[3%] mt-[100px] mb-[150px]">
        <h1 className="text-[20px] capitalize font-light border-b-1 border-gray-300">current social posts</h1>
        <div className="">
          <span>
            
          </span>
        </div>
      </div>

      <Newsletters />
    </section>
  );
}
