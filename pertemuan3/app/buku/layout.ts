import { createElement, type ReactNode } from "react";

export default function BukuLayout({ children }: { children: ReactNode }) {
	return createElement(
		"section",
		{ className: "space-y-6" },
		createElement(
			"div",
			{ className: "rounded-xl border border-slate-300 bg-slate-100 px-5 py-4" },
			createElement(
				"p",
				{ className: "text-sm font-semibold text-slate-900" },
				"Info Peminjaman—Maksimal 3 buku selama 7 hari kerja dengan menunjukkan KTM aktif.",
			),
			createElement(
				"p",
				{ className: "mt-1 text-xs text-slate-600" },
				"Banner ini berasal dari Nested Layout (app/buku/layout.js), sehingga tetap muncul di halaman katalog maupun halaman detail buku.",
			),
		),
		children,
	);
}