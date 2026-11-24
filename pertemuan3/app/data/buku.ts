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
        kategori: 'teknologi',
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
        kategori: 'teknologi',
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
    kategori: 'teknologi',
    tahunterbit: 2025,
    status: 'Tersedia',
    ikon: '📚',
    ringkasan: 'lorem ipsum dolor sit amet.',
    lokasi: 'Rak A1'
    }
]