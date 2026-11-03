import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./penghitung"; 
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";

function App() {
  // 1. State utama: ambil dari localStorage atau gunakan data contoh
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: "Install Node.js dan Vite", selesai: true },
      { id: 2, judul: "Pelajari useState", selesai: false },
    ];
  });

  // State baru untuk fitur filter ('semua', 'belum', 'selesai')
  const [filter, setFilter] = useState("semua");

  // Efek A: dijalankan SEKALI saat App pertama kali tampil
  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  // Efek B: perbarui judul tab peramban setiap daftar tugas berubah
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `${sisa} Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan daftarTugas ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // 2. Menambah tugas
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // 3. Mengubah status selesai
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  // 4. Menghapus tugas berdasarkan ID
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Latihan 2: Fungsi untuk menghapus semua tugas yang sudah selesai
  const hapusTugasSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // Latihan 1: Logika memfilter tugas berdasarkan state 'filter'
  const daftarTampil = daftarTugas.filter((tugas) => {
    if (filter === "belum") return !tugas.selesai;
    if (filter === "selesai") return tugas.selesai;
    return true; // 'semua'
  });

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">
        Laboratorium Informatika Modul 2: React Lanjutan
      </p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Latihan 1: Tombol-tombol Filter */}
        <div className="filter-container">
          <button
            className={`tombol-filter ${filter === "semua" ? "aktif" : ""}`}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>
          <button
            className={`tombol-filter ${filter === "belum" ? "aktif" : ""}`}
            onClick={() => setFilter("belum")}
          >
            Belum Selesai
          </button>
          <button
            className={`tombol-filter ${filter === "selesai" ? "aktif" : ""}`}
            onClick={() => setFilter("selesai")}
          >
            Selesai
          </button>
        </div>

        {/* Conditional rendering dengan ternary: tampilkan pesan jika kosong */}
        {daftarTampil.length === 0 ? (
          <p className="kosong">Tidak ada tugas pada kategori ini.</p>
        ) : (
          <ul className="daftar">
            {daftarTampil.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}

        {/* Latihan 2: Tombol Hapus Semua Selesai (muncul jika ada min 1 tugas selesai) */}
        {jumlahSelesai > 0 && (
          <button className="tombol-hapus-semua" onClick={hapusTugasSelesai}>
            Hapus Semua yang Selesai
          </button>
        )}
      </Kartu>
    </div>
  );
}

export default App;
