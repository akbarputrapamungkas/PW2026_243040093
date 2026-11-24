export interface Buku {
    id: string;
    judul: string;
    penulis: string;
    kategori: string;
    tahunterbit: number;
    status: 'Tersedia' | 'Dipinjam';
    ikon: string;
    ringkasan: string;
    lokasi: string;
}

export const daftarBuku: Buku[] = [
    {
        id: 'A-001',
        judul: 'Pemrograman Web',
        penulis: 'budi',
        kategori: 'Web',
        tahunterbit: 2025,
        status: 'Tersedia',
        ikon: '📚',
        ringkasan: 'lorem ipsum dolor sit amet.',
        lokasi: 'Rak A1'
    },
    {
        id: 'A-002',
        judul: 'Pemrograman Web Lanjutan',
        penulis: 'budi',
        kategori: 'Pemrograman',
        tahunterbit: 2025,
        status: 'Tersedia',
        ikon: '📚',
        ringkasan: 'lorem ipsum dolor sit amet.',
        lokasi: 'Rak A1'
    },
    {
        id: 'A-003',
        judul: 'Pemrograman Web Lanjutan 2',
        penulis: 'budi',
        kategori: 'Pemrograman',
        tahunterbit: 2025,
        status: 'Tersedia',
        ikon: '📚',
        ringkasan: 'lorem ipsum dolor sit amet.',
        lokasi: 'Rak A1'
    },
    {
        id: 'B-001',
        judul: 'Desain UI/UX Modern',
        penulis: 'Siti',
        kategori: 'UI/UX',
        tahunterbit: 2024,
        status: 'Tersedia',
        ikon: '🎨',
        ringkasan: 'Panduan lengkap merancang antarmuka yang menarik dan mudah digunakan.',
        lokasi: 'Rak B2'
    },
    {
        id: 'C-001',
        judul: 'Sistem Operasi Dasar',
        penulis: 'Andi',
        kategori: 'Sistem',
        tahunterbit: 2023,
        status: 'Dipinjam',
        ikon: '💻',
        ringkasan: 'Memahami konsep dasar sistem operasi modern.',
        lokasi: 'Rak C1'
    },
    {
        id: 'D-001',
        judul: 'Pengantar Ilmu Komputer',
        penulis: 'Dewi',
        kategori: 'Umum',
        tahunterbit: 2022,
        status: 'Tersedia',
        ikon: '📖',
        ringkasan: 'Buku pengantar untuk memahami ilmu komputer secara umum.',
        lokasi: 'Rak D3'
    }
]