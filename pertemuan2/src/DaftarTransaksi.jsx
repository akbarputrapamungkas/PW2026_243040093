// src/DaftarTransaksi.jsx
import ItemTransaksi from "./ItemTransaksi";

function DaftarTransaksi({ daftarTransaksi, onHapusTransaksi }) {
  return (
    <div className="daftar-transaksi-wrapper">
      {/* Kriteria (e): Pesan khusus jika belum ada transaksi */}
      {daftarTransaksi.length === 0 ? (
        <div className="pesan-kosong-keuangan">
          <p>Belum ada transaksi yang dicatat.</p>
          <small>Gunakan formulir di atas untuk mencatat pemasukan atau pengeluaran Anda.</small>
        </div>
      ) : (
        <ul className="daftar-transaksi">
          {daftarTransaksi.map((transaksi) => (
            <ItemTransaksi
              key={transaksi.id}
              transaksi={transaksi}
              onHapus={onHapusTransaksi}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default DaftarTransaksi;
