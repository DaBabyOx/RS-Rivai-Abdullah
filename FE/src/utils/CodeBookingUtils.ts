import { router } from "expo-router";
import Toast from "react-native-toast-message"; // Menggunakan Toast untuk menampilkan pesan error

// Validasi Kode Booking
export const validateBookingCode = (bookingCode: string): { isValid: boolean; errorMessage: string } => {
    if (bookingCode.trim() === '') {
        return { isValid: false, errorMessage: "Kode Booking tidak boleh kosong" };
    }

    if (bookingCode.length < 10 || bookingCode.length > 16) {
        return { isValid: false, errorMessage: "Kode Booking harus terdiri dari 16 digit angka" };
    }

    const bookingCodeRegex = /^[A-Z0-9]{10,16}$/; // Hanya huruf dan angka antara 10 hingga 16 karakter
    if (bookingCodeRegex.test(bookingCode)) {
        return { isValid: true, errorMessage: '' };
    } else {
        return { isValid: false, errorMessage: "Kode Booking harus terdiri dari 16 digit angka" };
    }
};

// Cek Kode Booking dan handle state
export const handleCheckBookingCode = (
    bookingCode: string,
    setBookingCodeError: (error: string) => void,
    setIsBookingConfirmed: (status: boolean) => void
) => {
    const { isValid, errorMessage } = validateBookingCode(bookingCode);

    if (isValid) {
        setIsBookingConfirmed(true);
        setBookingCodeError('');
        router.push("/ui/rencana/validasi-bukti-pendaftaran/kode-booking/page"); // Navigasi ke halaman OTP jika booking valid
    } else {
        setIsBookingConfirmed(false);
        setBookingCodeError(errorMessage);
        setTimeout(() => {
            setBookingCodeError('');
        }, 1500);
    }
};
