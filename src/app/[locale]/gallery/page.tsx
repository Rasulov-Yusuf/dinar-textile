import Cards from '@/components/gallery/Cards'
import GalleryCarousel from '@/components/gallery/GalleryCarousel'
import HeroPattern from '@/components/shared/HeroPattern'

export default function page() {
  return (
    <>
      <HeroPattern>Galareya</HeroPattern>
      <GalleryCarousel/>
      <Cards/>
    </>
  )
}
