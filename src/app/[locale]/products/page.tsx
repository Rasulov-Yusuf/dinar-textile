import Categories from "./Categories";
import Commodity from './Commodity';
import ProducstColor from './ProducstColor';
<<<<<<< HEAD

=======
>>>>>>> 34b595b (news component)

export default function page() {
  return (
    <div>
      <div className=" w-full  flex items-center justify-center text-center bg-[#CD333A]  min-h-[340px] font-semibold font-archivo bg-[url('/images/Union.png')] bg-cover bg-center bg-no-repeat">
        <h1 className=' font-archivo text-4xl uppercase text-white sm:text-[64px]'>Mahsulotlar</h1>
      </div>
      <div className='py-5'>
        <Categories />
      </div>
      <div className='py-5 h-full'>
        <Commodity />
      </div>  
      <div className='py-5 h-full  sm:h-screen flex justify-center items-center'>
         <ProducstColor/>
      </div>
    </div>
  )
}
