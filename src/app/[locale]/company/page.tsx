import AboutComponent from "@/components/company/AboutComponent";
import CompanyMission from "@/components/company/CompanyMission";
import CompanySertificates from "@/components/company/CompanySertificates";
import CompanyStatistics from "@/components/company/CompanyStatistics";
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