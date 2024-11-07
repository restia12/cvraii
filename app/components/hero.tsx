import foto from "../foto.jpeg";


function Profile() {
  return (<img src={foto.src} alt="Resti Aprillia Isma"  className="fotoku" />
  );
}

export default function Gallery() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-400 font-bold ">CV ONLINE </h1>
        <h2 className="text-3x1">Resti Aprillia Isma</h2>
        <Profile />
        <p>
          Saya adalah seorang mahasiswa semester 5 jurusan komputerisasi
          Akuntansi. Hobi saya adalah membaca Novel
  
        </p>
        </div>
        )
        }