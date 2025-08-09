// Mencegah klik kanan pada seluruh halaman
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  // Menampilkan pesan dengan gaya "tengil" dan menyindir
  alert(
    "MAU NGAPAIN?\n\nKLIK KANAN DILARANG!\nEMANG KAMU SIAPA?\nJANGAN NGINTIP KODE ORANG!\n"
  );
});

// Mencegah pintasan keyboard umum
document.addEventListener("keydown", function (e) {
  // Mencegah F12 (Dev Tools)
  if (e.key === "F12") {
    e.preventDefault();
    // alert(
    //   "F12 ITU UNTUK ORANG YANG BAYAR!\n\nKAMU BELUM BAYAR, JADI GAK BOLEH!"
    // );
    return false;
  }

  // Mencegah Ctrl+Shift+I (Dev Tools)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
    // alert("KETAHUAN WKWKWK!\n\nMAU NGINTIP YA?\n\n");
    return false;
  }

  // Mencegah Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
    // alert(
    //   "CONSOLE ITU RAHASIA!\n\nBUKAN UNTUK ORANG SEMBARANGAN!\n\nCUMAN HENGKER DOANG YANG BOLEH"
    // );
    return false;
  }

  // Mencegah Ctrl+U (Lihat sumber)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
    // alert(
    //   "LIAT SOURCE CODE?\n\nINI RAHASIA NEGARA\n\nBAYAR 100K DULU!\n\nJANGAN CUMA MAU GRATISAN!"
    // );
    return false;
  }

  // Mencegah Ctrl+S (Simpan)
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    // alert("MAU NYIMPEN WEB ORANG?\n\nITU PELANGGARAN HAK CIPTA!\n\n");
    return false;
  }

  // Mencegah Ctrl+P (Cetak)
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    // alert(
    //   "CETAK? BUAT DIJUAL LAGI?\n\nBOCAH GA PUNYA ETIKA!\n\nBAYAR 75K DULU!"
    // );
    return false;
  }

  // Mencegah Ctrl+A (Pilih semua)
  if (e.ctrlKey && e.key === "a") {
    e.preventDefault();
    // alert("PILIH SEMUA?\n\nMAU COPAS SEMUA?\n\n");
    return false;
  }
});

// Mencegah drag and drop gambar
document.addEventListener("dragstart", function (e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
    // alert("JANGAN NGAMBIL GAMBAR ORANG!\n\n");
  }
});

// Mencegah copy
document.addEventListener("copy", function (e) {
  e.preventDefault();
  // alert("DILARANG COPAS!\n\nLANGGAR HAK CIPTA!\n\n");
});

// Mencegah cut
document.addEventListener("cut", function (e) {
  e.preventDefault();
  // alert("MAU MUTER-MUTER TEKS?\n\nGA PUNYA MAGINASINYA?\n\n");
});

// Mencegah paste
document.addEventListener("paste", function (e) {
  e.preventDefault();
  // alert("DILARANG PASTE HASIL COPASAN!\n\n");
});

// Deteksi jika DevTools dibuka
let devtools = {
  open: false,
};

const threshold = 160;

setInterval(function () {
  if (
    window.outerHeight - window.innerHeight > threshold ||
    window.outerWidth - window.innerWidth > threshold
  ) {
    if (!devtools.open) {
      devtools.open = true;
      alert(
        "YEE KETAHUAN \n\nBUKA DEV TOOLS YA?\n\nITU UNTUK ORANG YANG SUDAH BAYAR!\n\nKIRIM 1JT BIAR BISA AKSES!"
      );
    }
  } else {
    if (devtools.open) {
      devtools.open = false;
    }
  }
}, 500);

// Deteksi screenshot
let isScreenshot = false;
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    isScreenshot = true;
  } else {
    if (isScreenshot) {
      // alert("SCREENSHOT DETECTED!\n\nWEE PELANGGARAN!\n\nBAYAR DENDA 100K!");
      isScreenshot = false;
    }
  }
});

// Efek menyebalkan saat klik berulang
// let clickCount = 0;
// document.addEventListener("click", function () {
//   clickCount++;
//   if (clickCount === 20) {
//     alert(
//       "UDAH 20 KALI KLIK!\n\nUDAH JANGAN KLIK KLIK\n\nDIBILANGIN JANGAN NGEYEL"
//     );
//   } else if (clickCount === 30) {
//     alert("30 KALI KLIK!\n\nLU GA PUNYA KERJAAN APA YAK\n\n");
//   } else if (clickCount === 50) {
//     alert("50 KALI KLIK!\n\nBOCAH GA PUNYA KERJAAN!\n\n");
//     clickCount = 0; // Reset counter
//   }
// });

// Mencegah akses ke developer tools via URL
if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  if (window.console && window.console.clear) {
    console.clear();
    console.log(
      "%c DILARANG MENGAKSES CONSOLE! %c\n\n%cINI UNTUK DEVELOPER BERBAYAR!\n\n%cKIRIM 500K",
      "color: red; font-size: 24px; font-weight: bold; background: black; padding: 10px;",
      "",
      "color: orange; font-size: 18px;",
      "color: yellow; font-size: 16px;"
    );
  }
}
