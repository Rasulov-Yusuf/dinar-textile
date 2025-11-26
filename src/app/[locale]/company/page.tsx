import {
  AboutComponent,
  CompanyMission,
  CompanySertificates,
  CompanyStatistics,
} from "@/components";
import HeroPattern from "@/components/shared/HeroPattern";


export default function page() {
  
  return (
    <>
      <HeroPattern>Kompaniya</HeroPattern>


      <AboutComponent />


      <CompanyStatistics />


      <CompanyMission />


      <CompanySertificates/>
    </>
  );
}