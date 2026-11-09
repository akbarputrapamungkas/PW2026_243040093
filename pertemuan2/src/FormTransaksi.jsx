// src/FormTransaksi.jsx
import { useState } from "react";

function FormTransaksi({ onTambahTransaksi }) {
  // Formulir terkendali (controlled form): state untuk setiap input
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("pemasukan"); // 'pemasukan' atau 'pengeluaran'
  const [pesanGalat, setPesanGalat] = useState("");

  const tanganiSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana: pastikan keterangan dan nominal terisi
    if (keterangan.trim() === "" || nominal === "") {
      setPesanGalat("Keterangan dan nominal wajib diisi!");
      return;
    }

    // Petunjuk Modul 2: Nilai input selalu berupa teks, ubah menjadi angka
    const nilaiNominal = Number(nominal);
    if (isNaN(nilaiNominal) || nilaiNominal <= 0) {
      setPesanGalat("Nominal harus berupa angka lebih besar dari 0!");
      return;
    }

    // Buat objek transaksi baru
    const transaksiBaru = {
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: nilaiNominal,
      jenis: jenis,
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    // Kirim data ke komponen induk
    onTambahTransaksi(transaksiBaru);

    // Reset nilai formulir
    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
    setPesanGalat("");
  };

  return (
    <form onSubmit={tanganiSubmit} className="form-keuangan">
      {pesanGalat && <p className="galat">{pesanGalat}</p>}

      <div className="form-grup">
        <label>Keterangan</label>
        <input
          type="text"
          className="input"
          placeholder="Contoh: Gaji Bulanan, Makan Siang"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>

      <div className="form-baris">
        <div className="form-grup" style={{ flex: 2 }}>
          <label>Nominal (Rp)</label>
          <input
            type="number"
            className="input"
            placeholder="Contoh: 50000"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>

        <div className="form-grup" style={{ flex: 1 }}>
          <label>Jenis Transaksi</label>
          <select
            className="input"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <option value="pemasukan">Pemasukan (+)</option>
            <option value="pengeluaran">Pengeluaran (-)</option>
          </select>
        </div>
      </div>

      <button type="submit" className="tombol tombol-simpan">
        + Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
