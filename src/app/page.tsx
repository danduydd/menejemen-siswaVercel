
function hitungPoin(kehadiran: number) {
  return kehadiran * 5;
}

function InfoSiswa() {
  return (
    <div style={{ border: "5px solid red", padding: "30px",
    marginTop: "30px", borderRadius: "20px", maxWidth: "300px"}}>
      <h3>Nama: Dandy Septiano</h3>
      <p>Status: Aktif</p>
    </div>
  );
}

export default function HomePage () {
  const totalPoin = hitungPoin(10);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif"}}>
      <h1>Welcome to the Home Page</h1>
      <h2>Total Poin Kehadiran: {totalPoin}</h2>
      <InfoSiswa />
    </div>
  );
}