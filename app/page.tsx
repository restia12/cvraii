import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./resti-style.css";
import Skill from "./components/skills";
import PersonalInfo from "./components/personal-info";
import ContactForm from "./components/contact";
import Rating from "./components/contact";
import HobbiesGallery from "./components/hobi";

export default function CVOnline(){
     // Fungsi untuk menangani pengiriman data form
  const handleContactSubmit = (data: { name: string; comment: string; rating: number }) => {
    console.log('Data yang diterima:', data);}
 return(
<section>
 <Hero/>
 <RiwayatPendidikan/>
 <RiwayatPekerjaan/>
 <Skill/>
 <PersonalInfo/>
 <Rating/>
 <HobbiesGallery/>
</section>
 )
}