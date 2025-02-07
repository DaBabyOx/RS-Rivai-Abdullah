export const insuranceData = [
    { label: "BPJS Kesehatan", value: "1" },
    { label: "Prudential Indonesia", value: "2" },
    { label: "Allianz Indonesia", value: "3" },
    { label: "AXA Mandiri", value: "4" },
    { label: "Manulife Indonesia", value: "5" },
    { label: "Sinarmas MSIG Life", value: "6" },
    { label: "AIA Financial", value: "7" },
    { label: "BCA Life", value: "8" },
    { label: "Tokio Marine Indonesia", value: "9" },
    { label: "Cigna Indonesia", value: "10" },
    { label: "Zurich Insurance Indonesia", value: "11" },
    { label: "Chubb Life", value: "12" },
    { label: "Hanwha Life Insurance", value: "13" },
    { label: "BNI Life", value: "14" },
    { label: "BRI Life", value: "15" },
    { label: "Generali Indonesia", value: "16" },
    { label: "Sequis Life", value: "17" },
    { label: "Mega Insurance", value: "18" },
    { label: "Great Eastern Life", value: "19" },
    { label: "Asuransi Jiwa Taspen", value: "20" },
];

export const poliklinikData = [
    { label: "Poliklinik Umum", value: "1" },
    { label: "Poliklinik Gigi", value: "2" },
    { label: "Poliklinik Mata", value: "3" },
    { label: "Poliklinik Jantung", value: "4" },
    { label: "Poliklinik Kulit dan Kelamin", value: "5" },
    { label: "Poliklinik THT", value: "6" },
    { label: "Poliklinik Bedah", value: "7" },
    { label: "Poliklinik Saraf", value: "8" },
    { label: "Poliklinik Penyakit Dalam", value: "9" },
    { label: "Poliklinik Anak", value: "10" },
    { label: "Poliklinik Kandungan", value: "11" },
    { label: "Poliklinik Ortopedi", value: "12" },
    { label: "Poliklinik Gizi", value: "13" },
    { label: "Poliklinik Rehabilitasi Medis", value: "14" },
    { label: "Poliklinik Paru", value: "15" },
    { label: "Poliklinik Psikiatri", value: "16" },
    { label: "Poliklinik Urologi", value: "17" },
    { label: "Poliklinik Endokrinologi", value: "18" },
    { label: "Poliklinik Hematologi", value: "19" },
    { label: "Poliklinik Onkologi", value: "20" },
];



export const doctorData = [
    { label: "Dr. Andi Firmansyah, SpPD", value: "1", schedule: ["Senin", "Rabu", "Kamis"] },
    { label: "Dr. Siti Aisyah, SpM", value: "2", schedule: ["Selasa", "Jumat"] },
    { label: "Dr. Budi Santoso, SpA", value: "3", schedule: ["Senin", "Kamis", "Sabtu"] },
    { label: "Dr. Rani Kusuma, SpKK", value: "4", schedule: ["Rabu", "Jumat"] },
    { label: "Dr. Aditya Nugraha, SpOG", value: "5", schedule: ["Selasa", "Minggu"] },
    { label: "Dr. Iqbal Pratama, SpOT", value: "6", schedule: ["Senin", "Kamis"] },
    { label: "Dr. Citra Dewi, SpJP", value: "7", schedule: ["Selasa", "Sabtu"] },
    { label: "Dr. Johan Hartono, SpU", value: "8", schedule: ["Rabu", "Minggu"] },
    { label: "Dr. Melani Tanjung, SpTHT", value: "9", schedule: ["Senin", "Jumat"] },
    { label: "Dr. Ahmad Faisal, SpB", value: "10", schedule: ["Selasa", "Kamis"] },
    { label: "Dr. Dwi Lestari, SpP", value: "11", schedule: ["Rabu", "Sabtu"] },
    { label: "Dr. Heru Gunawan, SpRad", value: "12", schedule: ["Jumat", "Minggu"] },
    { label: "Dr. Lina Kartika, SpPD-KGEH", value: "13", schedule: ["Senin", "Rabu"] },
    { label: "Dr. Fajar Hidayat, SpAn", value: "14", schedule: ["Kamis", "Minggu"] },
    { label: "Dr. Laila Nuraini, SpKJ", value: "15", schedule: ["Selasa", "Sabtu"] },
    { label: "Dr. Yudi Hartawan, SpN", value: "16", schedule: ["Jumat", "Minggu"] },
    { label: "Dr. Tri Utami, SpG", value: "17", schedule: ["Senin", "Rabu", "Kamis"] },
    { label: "Dr. Rudi Suhendra, SpHem", value: "18", schedule: ["Selasa", "Sabtu"] },
    { label: "Dr. Devi Pramesti, SpOnk", value: "19", schedule: ["Kamis", "Minggu"] },
    { label: "Dr. Wahyu Ramdhan, SpEndo", value: "20", schedule: ["Senin", "Jumat"] },
  ];
  



export const doctorScheduleData: {[key: string]: string[]} = {
    "Dokter A": ["Senin", "Selasa", "Kamis"],
    "Dokter B": ["Rabu", "Jumat"],
    "Dokter C": ["Senin", "Rabu", "Sabtu"],
}