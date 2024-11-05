const materi = document.getElementById('materi');

function playImg2() {
  document.getElementById('contohTransGeo').classList.add('contohTransGeo');
  const playImg2 = document.getElementById('playImg2');
  playImg2.classList.add('opacity-20', 'cursor-not-allowed');
  playImg2.classList.remove('cursor-pointer');
  setTimeout(function () {
    materi.nextElementSibling.classList.remove('hidden');
    materi.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
  }, 5000);
}

document.querySelectorAll('.okInfo').forEach((okinfoElement) => {
  okinfoElement.addEventListener('click', () => {
    const parentokInfo = okinfoElement.parentElement;
    if (parentokInfo) {
      parentokInfo.classList.add('hidden');
    }
  });
});

let currentlyVisibleElement = null;

document.querySelectorAll('.info').forEach((infoElement) => {
  infoElement.addEventListener('click', () => {
    // Menyembunyikan elemen yang saat ini ditampilkan, jika ada
    if (currentlyVisibleElement) {
      currentlyVisibleElement.classList.add('hidden');
    }

    // Mengambil elemen berikutnya
    const nextElement = infoElement.nextElementSibling;

    // Menampilkan elemen berikutnya dan menyimpannya sebagai elemen yang saat ini ditampilkan
    if (nextElement) {
      nextElement.classList.remove('hidden');
      infoElement.classList.add('hidden');
      currentlyVisibleElement = nextElement;
    }
  });
});

// Umum
const displayBenar = document.getElementById('benar');
const perubahanBenar = document.getElementById('perubahanBenar');
const jadiBerubah = document.getElementById('jadiBerubah');

function checkCheckbox() {
  const checkbox1 = document.getElementById('checkboxTransformasi1');
  const checkbox2 = document.getElementById('checkboxTransformasi2');

  if (checkbox1 && checkbox2) {
    checkbox1.checked = true;
    checkbox2.checked = true;

    checkbox1.disabled = false; // Enables the first checkbox if it was disabled
    checkbox2.disabled = false; // Enables the second checkbox if it was disabled
  }
}

// Ambil elemen tombol dan menu dropdown
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Tambahkan event listener untuk mengubah status visibilitas menu dropdown
dropdownButton.addEventListener('click', function () {
  // Tampilkan atau sembunyikan menu dropdown
  dropdownMenu.classList.toggle('-translate-y-[500px]');
  dropdownButton.classList.toggle('bg-gray-200');
});

window.addEventListener('click', function (e) {
  if (!dropdownButton.contains(e.target)) {
    dropdownMenu.classList.add('-translate-y-[500px]');
    dropdownButton.classList.remove('bg-gray-200');
  }
});
// Menutup dropdown jika pengguna mengklik di luar menu

document.querySelectorAll('.jawabanSalah').forEach((jawabanSalah) => {
  jawabanSalah.addEventListener('click', () => {
    // Sembunyikan elemen jawabanSalah yang diklik
    jawabanSalah.classList.add('hidden');

    // Tampilkan elemen dengan ID 'salah'
    const salahElement = document.getElementById('salah');
    salahElement.classList.remove('hidden');
    salahElement.classList.remove('opacity-0');

    const audioElement = document.getElementById('myAudio');
    audioElement.play();

    // Sembunyikan elemen 'salah' setelah 2 detik
    setTimeout(() => {
      salahElement.classList.add('opacity-0');
      setTimeout(() => {
        salahElement.classList.add('hidden');
      }, 500); // waktu tambahan untuk animasi opacity
    }, 500); // waktu untuk elemen 'salah' terlihat, dalam milidetik
  });
});

const jawabanBenar = document.querySelector('.jawabanBenar');
jawabanBenar.addEventListener('click', () => {
  jawabanBenar.parentElement.classList.add('hidden');
  const benarElement = document.getElementById('benar');
  const audioElement2 = document.getElementById('myAudio2');
  document.getElementById('perubahanBenar').classList.remove('hidden');
  audioElement2.play();
  benarElement.classList.remove('hidden');
  setTimeout(() => {
    benarElement.classList.add('hidden');
    benarElement.classList.add('opacity-0');
    jadiBerubah.classList.remove('hidden');
    jadiBerubah.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      materi.nextElementSibling.nextElementSibling.classList.remove('hidden');
      materi.nextElementSibling.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('akhirbanget').classList.remove('hidden');
      }, 1000);
    }, 1000);
  }, 1000);
});

let isNextDisable = false;

document.getElementById('tombolNext').addEventListener('click', function () {
  if (!isNextDisable) {
    document.getElementById('notif').classList.remove('hidden');
    const audioElement3 = document.getElementById('myAudio3');
    audioElement3.play();
    setTimeout(function () {
      document.getElementById('notif').classList.add('hidden');
    }, 3000);
  }
});

const nihAkhir = document.getElementById('nihAkhir');
const observerJarakTranslasi = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isNextDisable = true;
        document.getElementById('tombolNext').setAttribute('href', 'page3.html');
        checkCheckbox();
        document.getElementById('klikNext').classList.remove('hidden');
      }
    });
  },
  { threshold: 1.0 }
);

observerJarakTranslasi.observe(nihAkhir);
