import Link from 'next/link';
import { notFound } from 'next/navigation';
import { daftarBuku } from '../../data/buku';
import TombolSimpan from '../../components/TombolSimpan';

export function generateStaticParams() {
	return daftarBuku.map((buku) => ({ id: buku.id }));
}

export default async function DetailBukuPage({ params }) {
	const { id } = await params;
	const buku = daftarBuku.find((item) => item.id === id);

	if (!buku) {
		notFound();
	}

	return (
		<div className="space-y-6">
			<Link
				href="/buku"
				className="inline-block text-sm font-medium text-slate-700 hover:underline"
			>
				&larr; Kembali ke Katalog Buku
			</Link>

			<article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
				<div className="flex flex-wrap items-center gap-4">
					<div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-4xl">
						{buku.ikon}
					</div>

					<div>
						<div className="flex flex-wrap items-center gap-2">
							<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
								{buku.kategori}
							</span>
							<span
								className={`rounded-full px-3 py-1 text-xs font-semibold ${
									buku.status === 'Tersedia'
										? 'bg-emerald-100 text-emerald-800'
										: 'bg-amber-100 text-amber-800'
								}`}
							>
								{buku.status}
							</span>
						</div>

						<h1 className="mt-2 text-2xl font-bold text-slate-900">
							{buku.judul}
						</h1>
						<p className="mt-1 text-sm text-slate-500">
							{buku.penulis} &middot; Terbit {buku.tahun}
						</p>
					</div>
				</div>

				<p className="mt-6 leading-relaxed text-slate-700">
					{buku.ringkasan}
				</p>

				<div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
					<strong className="text-slate-800">Lokasi Rak:</strong>{' '}
					{buku.lokasiRak}
				</div>

				<div className="mt-6 border-t border-slate-100 pt-6">
					<TombolSimpan judulBuku={buku.judul} />
				</div>
			</article>
		</div>
	);
}