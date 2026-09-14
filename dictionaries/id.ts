import type { Dictionary } from "./types";

export const id: Dictionary = {
  nav: {
    about: "Tentang",
    skills: "Keahlian",
    education: "Pendidikan",
    projects: "Proyek",
    contact: "Kontak",
    github: "GitHub",
    menuLabel: "Buka menu",
    closeLabel: "Tutup menu",
  },
  hero: {
    badge: "Terbuka untuk magang data & kolaborasi",
    greeting: "Halo, saya",
    roles: [
      "Calon Data Scientist",
      "Mahasiswa Informatika @ UNDIP",
      "Eksplorator Python & SQL",
      "Mengubah Data jadi Insight",
    ],
    description:
      "Mahasiswa Informatika Universitas Diponegoro ('24) yang fokus ke data science — belajar membersihkan, menganalisis, dan menyampaikan data secara jelas lewat proyek kecil yang jujur.",
    primaryCta: "Lihat Proyek",
    secondaryCta: "Hubungi Saya",
    githubLabel: "GitHub",
    emailLabel: "Email",
    copied: "Tersalin!",
    copyEmailLabel: "Salin email",
    stats: [
      { value: "UNDIP '24", label: "Informatika" },
      { value: "Data-first", label: "Fokus bidang" },
      { value: "Terbuka", label: "Untuk magang" },
    ],
    scroll: "gulir",
  },
  about: {
    eyebrow: "// tentang",
    title: "Mahasiswa yang penasaran data & suka membangun",
    description:
      "Jalur saya data science, tapi saya paling cepat belajar lewat membangun end-to-end.",
    paragraphs: [
      "Saya Muhammad Nauval Fadli, mahasiswa Informatika Universitas Diponegoro angkatan 2024. Minat utama saya adalah data science: bertanya, membersihkan dataset yang berantakan, dan menyajikan temuan agar mudah dipahami.",
      "Saya mulai dari fundamental pemrograman (C, C++, Java) dan basis data (SQL), lalu masuk ke Python untuk analisis dan dasar web dengan Laravel dan Next.js. Kombinasi ini membantu saya memahami alur penuh — dari mana data berasal sampai bagaimana ditampilkan.",
      "Saat ini saya membangun fondasi: statistika, data wrangling, visualisasi, dan storytelling yang jelas. Saya mendokumentasikan yang saya pelajari lewat proyek kecil, bukan mengklaim keahlian yang belum saya punya.",
    ],
    tags: [
      { label: "Semarang, Indonesia" },
      { label: "Informatika UNDIP '24" },
      { label: "Fokus Data Science" },
      { label: "Terbuka untuk magang" },
    ],
    highlights: [
      {
        title: "Fondasi data",
        desc: "Python, SQL, spreadsheet. Cleaning, join, agregasi, dan visualisasi dengan chart yang jujur.",
      },
      {
        title: "Dasar engineering",
        desc: "C/C++, Java, Git, dasar web (Laravel, Next.js). Cukup untuk membangun dan merilis aplikasi kecil.",
      },
      {
        title: "Belajar terbuka",
        desc: "Proyek kampus, eksperimen self-hosting, dan catatan dari ekosistem data.",
      },
    ],
  },
  education: {
    eyebrow: "// pendidikan",
    title: "Pendidikan & jalur belajar",
    description:
      "Studi formal plus belajar mandiri menuju data science.",
    items: [
      {
        period: "2024 — Sekarang",
        title: "S1 Informatika",
        org: "Universitas Diponegoro, Semarang",
        desc: "CS inti: pemrograman, struktur data, basis data, jaringan komputer, dan pengembangan platform (Laravel + Next.js).",
        tags: ["IPK: —", "Fokus: Data"],
      },
      {
        period: "2025 — Sekarang",
        title: "Jalur mandiri data science",
        org: "Mandiri + proyek kampus",
        desc: "Python untuk analisis, query SQL, exploratory analysis, dan visualisasi. Mengubah dataset kecil jadi insight yang terbaca.",
        tags: ["Python", "SQL", "EDA"],
      },
      {
        period: "Berikutnya",
        title: "Siap magang",
        org: "Terbuka untuk kesempatan",
        desc: "Mencari magang data di mana saya bisa membantu cleaning, dashboard, dan belajar dari tim yang nyata.",
        tags: ["Magang", "Entry-level"],
      },
    ],
  },
  skills: {
    eyebrow: "// keahlian",
    title: "Toolkit yang fokus & jujur",
    description:
      "Yang bisa saya pakai hari ini — dikelompokkan sesuai pemakaian nyata. Tanpa proficiency bar yang dilebihkan.",
    groups: [
      { id: "data", label: "Data & Pemrograman", hint: "Andalan harian" },
      { id: "web", label: "Web & Building", hint: "Untuk merilis app kecil" },
      { id: "tools", label: "Tools & Workflow", hint: "Untuk kerja rapi" },
    ],
    levels: {
      intermediate: "Menengah",
      familiar: "Familiar",
      learning: "Dipelajari",
    },
    learningNote:
      "Sedang dipelajari: Pandas, visualisasi data, dan statistika lebih dalam. Berikutnya: dasar Scikit-learn.",
  },
  projects: {
    eyebrow: "// proyek",
    title: "Karya pilihan",
    description:
      "Kecil tapi nyata. Satu proyek jadi plus yang sedang dibangun ke arah data.",
    filters: [
      { id: "all", label: "Semua" },
      { id: "data", label: "Data" },
      { id: "web", label: "Web" },
      { id: "graphics", label: "Grafis" },
    ],
    featuredLabel: "Unggulan",
    codeLabel: "Kode",
    demoLabel: "Demo",
    detailsLabel: "Detail",
    outcomesLabel: "Yang saya pelajari",
    roleLabel: "Peran",
    upcomingTitle: "Berikutnya",
    upcomingDesc: "Build berorientasi data yang sedang jalan — didokumentasikan sambil belajar.",
    upcomingItems: ["Booking Bioskop", "Catatan Data Analysis"],
    emptyTitle: "Belum ada proyek di kategori ini.",
  },
  contact: {
    eyebrow: "// kontak",
    title: "Mari ngobrol soal data",
    description:
      "Cara termudah menghubungi saya lewat email. Semua saya baca dan balas dalam beberapa hari.",
    emailTitle: "Email",
    emailHint: "Terbaik untuk magang & kolaborasi",
    githubTitle: "GitHub",
    githubHint: "Riwayat kode & proyek",
    primaryCta: "Kirim email",
    copyLabel: "Salin",
    copiedLabel: "Tersalin",
    lookingTitle: "Yang saya cari",
    lookingDesc:
      "Magang data atau proyek terbimbing di mana saya bisa bantu cleaning, analisis, dashboard, atau dokumentasi — dan belajar praktik yang baik dari tim.",
    tags: ["Magang data", "EDA & dashboard", "Python & SQL", "Mau belajar"],
  },
  footer: {
    rights: "Hak cipta dilindungi.",
    builtWith: "Dibangun dengan Next.js + Tailwind CSS.",
    backToTop: "Kembali ke atas",
  },
};
