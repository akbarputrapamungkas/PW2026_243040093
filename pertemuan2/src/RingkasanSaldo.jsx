// src/RingkasanSaldo.jsx

function RingkasanSaldo({ daftarTransaksi }) {
  // Kriteria (c): Total saldo yang dihitung otomatis dari state (Derived State)
  const totalPemasukan = daftarTransaksi
    .filter((t) => t.jenis === "pemasukan")
    .reduce((total, t) => total + t.nominal, 0);

  const totalPengeluaran = daftarTransaksi
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((total, t) => total + t.nominal, 0);

  const totalSaldo = totalPemasukan - totalPengeluaran;

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="kartu-ringkasan-saldo">
      <div className="saldo-utama">
        <span>Total Saldo Saat Ini</span>
        <h3 className={totalSaldo >= 0 ? "teks-hijau" : "teks-merah"}>
          {formatRupiah(totalSaldo)}
        </h3>
      </div>

      <div className="detail-arus-kas">
        <div className="box-arus pemasukan">
          <span>Total Pemasukan</span>
          <strong className="teks-hijau">+{formatRupiah(totalPemasukan)}</strong>
        </div>
        <div className="box-arus pengeluaran">
          <span>Total Pengeluaran</span>
          <strong className="teks-merah">-{formatRupiah(totalPengeluaran)}</strong>
        </div>
      </div>
    </div>
  );
}

export default RingkasanSaldo;
