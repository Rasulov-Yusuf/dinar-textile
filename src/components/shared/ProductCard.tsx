import Image from 'next/image'

export default function ProductCard({url, name}:{url: string, name:string}) {
  return (
    <div data-aos='zoom-in' className='w-100 h-[540px] rounded-fn relative'>
      <Image src={url} alt={name} fill className='rounded-fn' loading='lazy'/>
    </div>
  )
}
