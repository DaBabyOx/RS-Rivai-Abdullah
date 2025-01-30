import { router } from "expo-router";

// Data Dummy
export const dummyData = {
    namaLengkap: 'John Undoe',
    jenisKelamin: 'Laki-laki',
    provinsi: 'Banten',
    kabupaten: 'Kota Tangerang',
    kelurahan: 'Alam Sutera',
    rw: '02',
    rt: '10',
};

// Validasi NIK
export const validateNIK = (nik: string): { isValid: boolean; errorMessage: string } => {
    if (nik.trim() === '') {
        return { isValid: false, errorMessage: 'NIK tidak boleh kosong' };
    }

    const nikRegex = /^\d{16}$/;
    if (nikRegex.test(nik)) {
        return { isValid: true, errorMessage: '' };
    } else {
        return { isValid: false, errorMessage: 'NIK harus terdiri dari 16 digit angka' };
    }
};

// Cek NIK dan handle state
export const handleCheckNIK = (
    nik: string, 
    setNikError: (error: string) => void, 
    setAdditionalFields: (fields: any) => void
) => {
    const { isValid, errorMessage } = validateNIK(nik);

    if (isValid) {
        setAdditionalFields(dummyData); // Menampilkan data dummy ke state
        setNikError(''); // Clear error message jika valid
    } else {
        setNikError(errorMessage); // Menampilkan error jika NIK tidak valid
        setTimeout(() => {
            setNikError(''); // Clear error message setelah 1 detik 
        }, 1000);
    }
};

// Fungsi untuk navigasi ke halaman OTP setelah konfirmasi KTP
export const handleConfirm = () => {
    router.push('/ui/profile/auth/mail-auth/page'); // Navigasi ke halaman OTP
};
