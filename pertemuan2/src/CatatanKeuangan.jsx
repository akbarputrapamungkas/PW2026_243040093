// src/CatatanKeuangan.jsx
import { useState, useEffect } from "react";
import Kartu from "./Kartu";
import FormTransaksi from "./FormTransaksi";
import DaftarTransaksi from "./DaftarTransaksi";
import RingkasanSaldo from "./RingkasanSaldo";

function CatatanKeuangan() {
  // Kriteria (f): Data tersimpan di localStorage
  // 1. Inisialisasi state dari localStorage (atau data default jika belum ada)
  const [transaksi, setTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem("catatan-keuangan-mini");
    if (dataTersimpan) {
      try {
        return JSON.parse(dataTersimpan);
      } catch (err) {
        console.error("Gagal mengurai data localStorage:", err);
      }
    }
    // Data bawaan awal agar tampilan tidak kosong saat pertama dibuka
    return [
      {
        id: 1,
        keterangan: "Gaji Bulanan / Uang Saku",
        nominal: 1500000,
        jenis: "pemasukan",
        tanggal: "01 Nov 2026",
      },
      {
        id: 2,
        keterangan: "Beli Buku Modul Praktikum",
        nominal: 85000,
        jenis: "pengeluaran",
        tanggal: "03 Nov 2026",
      },
    ];
  });

  // 2. useEffect: Simpan data transaksi ke localStorage setiap kali state `transaksi` berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan-mini", JSON.stringify(transaksi));
  }, [transaksi]);

  // Handler: Tambah transaksi baru (immutable state update)
  const tambahTransaksi = (transaksiBaru) => {
    setTransaksi([transaksiBaru, ...transaksi]);
  };

  // Handler: Hapus transaksi berdasarkan ID
  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((item) => item.id !== id));
  };

  return (
    <div className="modul-keuangan">
      {/* Ringkasan Saldo Otomatis */}
      <Kartu judul="Ringkasan Saldo">
        <RingkasanSaldo daftarTransaksi={transaksi} />
      </Kartu>

      {/* Formulir Input Transaksi */}
      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambahTransaksi={tambahTransaksi} />
      </Kartu>

      {/* Daftar Transaksi */}
      <Kartu judul="Daftar Transaksi">
        <DaftarTransaksi
          daftarTransaksi={transaksi}
          onHapusTransaksi={hapusTransaksi}
        />
      </Kartu>
    </div>
  );
}

export default CatatanKeuangan;
