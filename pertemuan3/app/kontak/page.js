export default function KontakPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-slate-900">Kontak Pustakawan</h1>
      <p className="mt-1 text-sm text-slate-600">
        Hubungi kami jika Anda membutuhkan bantuan atau informasi lebih lanjut.
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">🕐 Jam Layanan</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex justify-between">
            <span>Senin – Jumat</span>
            <span className="font-medium">08.00 – 16.00 WIB</span>
          </li>
          <li className="flex justify-between">
            <span>Sabtu</span>
            <span className="font-medium">08.00 – 12.00 WIB</span>
          </li>
          <li className="flex justify-between">
            <span>Minggu / Hari Libur</span>
            <span className="font-medium text-red-500">Tutup</span>
          </li>
        </ul>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">📞 Kontak Pustakawan</h2>
        <ul className="mt-3 space-y-3 text-sm text-slate-700">
          <li>
            <p className="font-semibold">Budi Santoso</p>
            <p>📧 budi.santoso@kampus.ac.id</p>
            <p>📱 +62 812-3456-7890</p>
          </li>
          <li className="border-t border-slate-100 pt-3">
            <p className="font-semibold">Siti Rahayu</p>
            <p>📧 siti.rahayu@kampus.ac.id</p>
            <p>📱 +62 821-9876-5432</p>
          </li>
        </ul>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">📍 Lokasi Perpustakaan</h2>
        <p className="mt-2 text-sm text-slate-700">
          Gedung Perpustakaan Pusat, Lantai 2<br />
          Kampus Utama, Jl. Pendidikan No. 1<br />
          Bandung, Jawa Barat 40123
        </p>
      </div>
    </div>
  );
}
