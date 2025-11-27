import ProductCard from '../shared/ProductCard'

export default function Cards() {
  return (
    <section className='mt-25'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <ProductCard url={'/images/girl.png'} name='girl image'/>
            <ProductCard url={'/images/girl.png'} name='girl image'/>
            <ProductCard url={'/images/girl.png'} name='girl image'/>
        </div>
      </div>
    </section>
  )
}
