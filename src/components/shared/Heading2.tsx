export default function Heading2({children}:{children: string}) {
  return (
    <>
      <h2 className='font-archivo font-semibold leading-[140%] tracking-[-1%] text-3xl md:text-[40px]'>{children}</h2>
    </>
  )
}
