// src/ItemTransaksi.jsx

function ItemTransaksi({ transaksi, onHapus }) {
  // Format angka ke mata uang Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  const isPemasukan = transaksi.jenis === "pemasukan";

  return (
    <li className={`item-transaksi ${isPemasukan ? "border-hijau" : "border-merah"}`}>
      <div className="info-transaksi">
        <span className="keterangan-transaksi">{transaksi.keterangan}</span>
        <span className="tanggal-transaksi">{transaksi.tanggal}</span>
      </div>

      <div className="nominal-dan-aksi">
        {/* Kriteria (d): Nominal pemasukan berwarna hijau dan pengeluaran berwarna merah */}
        <span className={`nominal-teks ${isPemasukan ? "teks-hijau" : "teks-merah"}`}>
          {isPemasukan ? `+ ${formatRupiah(transaksi.nominal)}` : `- ${formatRupiah(transaksi.nominal)}`}
        </span>

        {/* Kriteria (b): Tombol hapus */}
        <button
          className="tombol tombol-merah tombol-kecil"
          onClick={() => onHapus(transaksi.id)}
          title="Hapus transaksi ini"
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTransaksi;
