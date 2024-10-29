function btn1() {
  document.getElementById('img2').classList.remove('opacity-0');
  document.getElementById('img2').classList.add('zoomIn');
  document.getElementById('btn1').classList.add('hidden');
  document.getElementById('btn2').classList.remove('hidden');
  document.getElementById('lewati2').classList.add('hidden');
}

function btn2() {
  document.getElementById('img3').classList.remove('opacity-0');
  document.getElementById('img3').classList.add('zoomIn');
  document.getElementById('btn2').classList.add('hidden');
  document.getElementById('btn3').classList.remove('hidden');
}
function btn3() {
  document.getElementById('img4').classList.remove('opacity-0');
  document.getElementById('img4').classList.add('zoomIn');
  document.getElementById('btn3').classList.add('hidden');
  document.getElementById('btn4').classList.remove('hidden');
}

function btn5() {
  document.getElementById('img6').classList.remove('opacity-0');
  document.getElementById('img6').classList.add('zoomIn');
  document.getElementById('btn5').classList.add('hidden');
  document.getElementById('btn6').classList.remove('hidden');
  document.getElementById('lewati1').classList.add('hidden');
}

function btn6() {
  document.getElementById('img7').classList.remove('opacity-0');
  document.getElementById('img7').classList.add('zoomIn');
  document.getElementById('btn6').classList.add('hidden');
  document.getElementById('btn7').classList.remove('hidden');
}
function btn7() {
  document.getElementById('img8').classList.remove('opacity-0');
  document.getElementById('img8').classList.add('zoomIn');
  document.getElementById('btn7').classList.add('hidden');
  document.getElementById('btn8').classList.remove('hidden');
}
function btn8() {
  document.getElementById('percakapan').classList.add('hidden');
  document.getElementById('isi').classList.remove('hidden');
}
function btn4() {
  document.getElementById('percakapan').classList.add('hidden');
  document.getElementById('isi').classList.remove('hidden');
}
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

document.querySelectorAll('.okLine').forEach((lineElement) => {
  lineElement.addEventListener('click', () => {
    const parentOK = lineElement.parentElement;
    const nextLine = parentOK.nextElementSibling;

    if (nextLine && nextLine.classList.contains('lineCakap')) {
      nextLine.classList.remove('hidden');
      parentOK.classList.add('hidden');
    }
  });
});

function okLast() {
  document.getElementById('percakapan').classList.add('hidden');
}

const materi = document.getElementById('materi');

function playImg() {
  document.getElementById('imgSatu').classList.add('satu');
  document.getElementById('imgDua').classList.add('dua');
  document.getElementById('imgTiga').classList.add('tiga');
  const playImg = document.getElementById('playImg');
  playImg.classList.add('opacity-20', 'cursor-not-allowed');
  playImg.classList.remove('cursor-pointer');
  setTimeout(function () {
    materi.nextElementSibling.classList.remove('hidden');
    materi.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
  }, 7000);
}

const displayBenar = document.getElementById('benar');
const perubahanBenar = document.getElementById('perubahanBenar');

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
  isNextDisable = true;
  document.getElementById('tombolNext').setAttribute('href', 'page2.html');

  setTimeout(() => {
    benarElement.classList.add('hidden');
    benarElement.classList.add('opacity-0');
    checkCheckbox();
    materi.nextElementSibling.nextElementSibling.classList.remove('hidden');

    materi.nextElementSibling.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      document.getElementById('klikNext').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('chatbox').classList.remove('hidden');
        const audioNotif = document.getElementById('notifnih');
        audioNotif.play();
      }, 500);
    }, 500);
  }, 2000);
});

document.getElementById('closeChatbox').addEventListener('click', () => {
  document.getElementById('chatbox').classList.add('hidden');
});

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

function lewati() {
  document.getElementById('percakapan').classList.add('hidden');
}
