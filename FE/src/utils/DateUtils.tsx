// Fungsi untuk validasi tanggal
export const validateDate = (date: string): boolean => {
  const regex = /^(\d{2})-(\d{2})-(\d{4})$/; // Format DD-MM-YYYY
  if (!regex.test(date)) {
    return false;
  }

  const [day, month, year] = date.split('-').map(Number);

  if (
    day < 1 ||
    day > 31 || // Hari tidak valid
    month < 1 ||
    month > 12 || // Bulan tidak valid
    year < 1940 || // Tahun terlalu kecil
    year > 2007
  ) {
    return false;
  }

  return true;
};

// Fungsi untuk menangani input dan auto-format tanggal
export const handleDateChange = (
  text: string,
  setDateCallback: (date: string) => void,
  setErrorCallback: (error: boolean) => void
) => {
  let formattedText = text.replace(/\D/g, ''); // Hanya angka

  // Format hari (DD)
  if (formattedText.length > 2) {
    formattedText = formattedText.slice(0, 2) + '-' + formattedText.slice(2);
  }

  // Format bulan (MM)
  if (formattedText.length > 5) {
    formattedText = formattedText.slice(0, 5) + '-' + formattedText.slice(5);
  }

  // Format tahun (YYYY)
  if (formattedText.length > 10) {
    formattedText = formattedText.slice(0, 10);
  }

  setDateCallback(formattedText);
  setErrorCallback(!validateDate(formattedText)); // Validasi input saat pengguna mengetik
};
