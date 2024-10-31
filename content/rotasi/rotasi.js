document.addEventListener('DOMContentLoaded', function () {
  const canvas6 = document.getElementById('geometryCanvas6');
  const ctx6 = canvas6.getContext('2d');
  const gridSize6 = 25; // Grid size in pixels

  // Set canvas dimensions
  canvas6.width = 200;
  canvas6.height = 200;

  // Initial triangle coordinates and draggable points
  const triangle6 = [
    { x: 1 * gridSize6, y: 1 * gridSize6 },
    { x: 1 * gridSize6, y: 3 * gridSize6 },
    { x: 3 * gridSize6, y: 3 * gridSize6 },
  ];

  let points6 = [
    { x: 25, y: 25 },
    { x: 25, y: 75 },
    { x: 75, y: 75 },
  ];

  const labels6 = ['A', 'B', 'C'];
  const updateLabels6 = ["A'", "B'", "C'"];
  let isMoved6 = false;

  let dragPoint6 = null;

  const targetPoint6 = [
    { x: 25, y: 175 },
    { x: 75, y: 175 },
    { x: 75, y: 125 },
  ];

  // Draw grid function
  function drawGrid6() {
    ctx6.strokeStyle = 'transparent';
    for (let x = 0; x <= canvas6.width; x += gridSize6) {
      ctx6.beginPath();
      ctx6.moveTo(x, 0);
      ctx6.lineTo(x, canvas6.height);
      ctx6.stroke();
    }
    for (let y = 0; y <= canvas6.height; y += gridSize6) {
      ctx6.beginPath();
      ctx6.moveTo(0, y);
      ctx6.lineTo(canvas6.width, y);
      ctx6.stroke();
    }
  }

  // Draw initial state
  function drawInitialState6() {
    ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
    drawGrid6();
    drawTriangle6(triangle6, '#D8D7D7', labels6, '#D8D7D7');
    drawTriangle6(points6, '#77F477', isMoved6 ? updateLabels6 : labels6, '#4ade80');
  }

  function drawTriangle6(points6, color, labels6, labelColor) {
    ctx6.beginPath();
    ctx6.moveTo(points6[0].x, points6[0].y);
    points6.forEach((point) => ctx6.lineTo(point.x, point.y));
    ctx6.closePath();
    ctx6.strokeStyle = color;
    ctx6.stroke();

    points6.forEach((point, index) => {
      ctx6.beginPath();
      ctx6.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx6.fillStyle = color;
      ctx6.fill();
      ctx6.stroke();
      ctx6.font = '12px Arial';
      ctx6.fillStyle = labelColor;
      ctx6.fillText(labels6[index], point.x + 5, point.y - 5);
    });
  }

  // Handle mouse and touch events
  function handlePointerDown6(e) {
    e.preventDefault();
    const pos = getPointerPos6(canvas6, e);
    dragPoint6 = getDragPoint6(pos);
  }

  function handlePointerMove6(e) {
    if (!dragPoint6) return;
    e.preventDefault();
    const pos = getPointerPos6(canvas6, e);
    dragPoint6.x = pos.x;
    dragPoint6.y = pos.y;
    isMoved6 = true;
    drawInitialState6();
    document.getElementById('Check6').disabled = false;
  }

  function handlePointerUp6() {
    if (dragPoint6) {
      const snappedPos6 = snapToGrid6(dragPoint6);
      dragPoint6.x = snappedPos6.x;
      dragPoint6.y = snappedPos6.y;
    }
    dragPoint6 = null;
    drawInitialState6();
  }

  function getPointerPos6(canvas6, evt) {
    const rect = canvas6.getBoundingClientRect();
    return {
      x: (evt.clientX || evt.touches[0].clientX) - rect.left,
      y: (evt.clientY || evt.touches[0].clientY) - rect.top,
    };
  }

  function getDragPoint6(pos) {
    return points6.find((point) => Math.sqrt((point.x - pos.x) ** 2 + (point.y - pos.y) ** 2) < 10);
  }

  function snapToGrid6(point) {
    return {
      x: Math.round(point.x / gridSize6) * gridSize6,
      y: Math.round(point.y / gridSize6) * gridSize6,
    };
  }

  // Update notification based on correct/incorrect position
  function updateNotification6() {
    const checkButton = document.getElementById('Check6');
    if (!checkButton.clicked) return;

    const tolerance = 10;
    const correctPosition6 = points6.every((point, index) => {
      const targetPoint = targetPoint6[index];
      return (
        Math.abs(point.x - targetPoint.x) < tolerance &&
        Math.abs(point.y - targetPoint.y) < tolerance
      );
    });

    if (correctPosition6) {
      document.getElementById('benar6').classList.replace('hidden', 'inline-block');
      document.getElementById('salah6').classList.add('hidden');
      const checkboxKordinat = document.querySelectorAll('.checkboxKordinat');
      checkboxKordinat.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      document.getElementById('showNextDivButton').classList.add('hidden');
      document.getElementById('showaja').classList.remove('hidden');
      nextMateri.classList.remove('hidden');
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
      const checkboxPenulisan = document.querySelectorAll('.checkboxPenulisan');
      checkboxPenulisan.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      document.getElementById('nextMateri').classList.remove('hidden');
    } else {
      document.getElementById('salah6').classList.replace('hidden', 'inline-block');
      document.getElementById('benar6').classList.add('hidden');
      const audioElement = document.getElementById('myAudio');
      audioElement.play();
    }
    checkButton.clicked = false;
  }

  document.getElementById('Check6').addEventListener('click', function () {
    this.clicked = true;
    updateNotification6();
  });

  // Initialize "Check" button as disabled
  document.getElementById('Check6').disabled = true;

  // Event listeners for mouse and touch
  canvas6.addEventListener('mousedown', handlePointerDown6);
  canvas6.addEventListener('mousemove', handlePointerMove6);
  canvas6.addEventListener('mouseup', handlePointerUp6);
  canvas6.addEventListener('touchstart', handlePointerDown6);
  canvas6.addEventListener('touchmove', handlePointerMove6);
  canvas6.addEventListener('touchend', handlePointerUp6);

  drawInitialState6();
});

document.addEventListener('DOMContentLoaded', function () {
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');
  var gridSize3 = 25; // Ukuran grid
  var correctPoint3 = { x: 3, y: 5 }; // Titik yang benar
  var clickedPoint3 = { x: -1, y: -1 }; // Titik yang dipilih oleh pengguna
  var checkButton3 = document.getElementById('Check5'); // Tombol "Cek jawaban"
  var isCorrectPointClicked3 = false; // Status apakah titik yang benar telah diklik
  var isPointClicked3 = false; // Status apakah titik telah diklik

  canvas3.width = 200;
  canvas3.height = 200;

  function drawGrid3() {
    ctx3.beginPath();
    for (var x = 0; x <= canvas3.width; x += gridSize3) {
      ctx3.moveTo(x, 0);
      ctx3.lineTo(x, canvas3.height);
    }
    for (var y = 0; y <= canvas3.height; y += gridSize3) {
      ctx3.moveTo(0, y);
      ctx3.lineTo(canvas3.width, y);
    }
    ctx3.strokeStyle = 'transparent';
    ctx3.stroke();
  }

  function drawPoint3(x, y) {
    ctx3.beginPath();
    ctx3.arc(x * gridSize3, y * gridSize3, 3, 0, Math.PI * 2);
    ctx3.fillStyle = '#77F477';
    ctx3.fill();
  }

  function drawLabel3(x, y, label) {
    ctx3.font = '12px Arial';
    ctx3.fillStyle = '#55E255'; // Warna teks
    ctx3.fillText(label, x * gridSize3 + 5, y * gridSize3 - 5); // Menambahkan teks pada titik yang benar
  }

  function clearCanvas3() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    drawGrid3();
  }

  function snapToGrid3(mouseX, mouseY) {
    return {
      x: Math.round(mouseX / gridSize3),
      y: Math.round(mouseY / gridSize3),
    };
  }

  function updateNotification3() {
    if (isCorrectPointClicked3) {
      const rightAnswer = document.querySelector('.rightAnswer');
      document.getElementById('benar5').classList.remove('hidden');
      document.getElementById('benar5').classList.add('inline-block');
      document.getElementById('salah5').classList.add('hidden');
      rightAnswer.classList.remove('hidden');
      setTimeout(() => {
        rightAnswer.classList.add('hidden');
      }, 1000);
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play(); // Putar audio jawaban benar

      // Gambarkan label H' di titik yang benar
      drawLabel3(correctPoint3.x, correctPoint3.y, "R'");
    } else {
      const wrongAnswer = document.querySelector('.wrongAnswer');
      document.getElementById('salah5').classList.remove('hidden');
      document.getElementById('salah5').classList.add('inline-block');
      document.getElementById('benar5').classList.add('hidden');
      wrongAnswer.classList.remove('hidden');
      setTimeout(() => {
        wrongAnswer.classList.add('hidden');
      }, 1000);
      const audioElement = document.getElementById('myAudio');
      audioElement.play(); // Putar audio jawaban salah
    }
  }

  // Pastikan grid digambar saat halaman dimuat
  drawGrid3();

  canvas3.addEventListener('click', function (e) {
    if (isCorrectPointClicked3) {
      // Jika titik yang benar sudah diklik, tidak melakukan apa-apa
      return;
    }

    var rect3 = canvas3.getBoundingClientRect();
    var mouseX3 = e.clientX - rect3.left;
    var mouseY3 = e.clientY - rect3.top;

    var snappedPoint3 = snapToGrid3(mouseX3, mouseY3);
    clickedPoint3.x = snappedPoint3.x;
    clickedPoint3.y = snappedPoint3.y;
    isPointClicked3 = true; // Menandai bahwa titik telah diklik

    clearCanvas3();
    drawPoint3(clickedPoint3.x, clickedPoint3.y);
  });

  checkButton3.addEventListener('click', function () {
    if (!isPointClicked3 || isCorrectPointClicked3) {
      // Jika titik belum diklik atau titik yang benar sudah diklik, tidak melakukan apa-apa
      return;
    }

    var correctPosition3 =
      clickedPoint3.x === correctPoint3.x && clickedPoint3.y === correctPoint3.y;
    isCorrectPointClicked3 = correctPosition3; // Menandai status apakah titik yang benar telah diklik
    updateNotification3();
  });
});

var specialAngles = [
  -360, -330, -315, -300, -270, -240, -225, -210, -180, -150, -135, -120, -90, -60, -45, -30, 0, 30,
  45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360,
];

function setRotation(degrees) {
  var kotak1 = document.getElementById('kotak1');
  var pusat = document.getElementById('pusat');
  var x =
    ((pusat.offsetLeft + pusat.offsetWidth / 2 - kotak1.offsetLeft) / kotak1.offsetWidth) * 100 +
    '%';
  var y =
    ((pusat.offsetTop + pusat.offsetHeight / 2 - kotak1.offsetTop) / kotak1.offsetHeight) * 100 +
    '%';
  kotak1.style.transformOrigin = x + ' ' + y;
  kotak1.style.transform = `rotate(${degrees}deg)`;
}

function findNearestAngle(currentAngle, direction) {
  var nearestAngle = specialAngles[0];
  var difference = Math.abs(currentAngle - specialAngles[0]);
  for (var i = 0; i < specialAngles.length; i++) {
    var currentDifference = Math.abs(currentAngle - specialAngles[i]);
    if (currentDifference < difference) {
      difference = currentDifference;
      nearestAngle = specialAngles[i];
    }
  }

  return nearestAngle;
}

function adjustRotation(direction) {
  var degreeInput = document.getElementById('degreeInput');
  var currentAngle = parseInt(degreeInput.value);
  var leftButton = document.querySelector('button[onclick="adjustRotation(-1)"]');
  var rightButton = document.querySelector('button[onclick="adjustRotation(1)"]');

  if (direction === -1) {
    // Tombol panah kiri (-)
    for (var i = 0; i < specialAngles.length; i++) {
      if (currentAngle === specialAngles[i]) {
        if (i === 0) {
          currentAngle = specialAngles[specialAngles.length - 1];
        } else {
          currentAngle = specialAngles[i - 1];
        }
        break;
      }
    }
  } else {
    // Tombol panah kanan (+)
    for (var i = 0; i < specialAngles.length; i++) {
      if (currentAngle === specialAngles[i]) {
        if (i === specialAngles.length - 1) {
          currentAngle = specialAngles[0];
        } else {
          currentAngle = specialAngles[i + 1];
        }
        break;
      }
    }
  }

  degreeInput.value = currentAngle;
  setRotation(-currentAngle);

  // Disable tombol jika mencapai batas
  if (currentAngle === -360) {
    leftButton.disabled = true;
    leftButton.classList.add('opacity-0'); // Nonaktifkan tombol kiri
  } else {
    leftButton.disabled = false;
    leftButton.classList.remove('opacity-0'); // Aktifkan kembali jika di luar batas
  }

  if (currentAngle === 360) {
    rightButton.disabled = true;
    rightButton.classList.add('opacity-0'); // Nonaktifkan tombol kanan
  } else {
    rightButton.disabled = false;
    rightButton.classList.remove('opacity-0'); // Aktifkan kembali jika di luar batas
  }
}

function setRotationFromInput() {
  var degreeInput = document.getElementById('degreeInput');
  var inputAngle = parseInt(degreeInput.value);
  var nearestAngle = findNearestAngle(inputAngle, 1);
  degreeInput.value = nearestAngle;
  setRotation(nearestAngle);
}

document.querySelectorAll('.playTitikA').forEach((playTitikA) => {
  playTitikA.addEventListener('click', () => {
    playTitikA.nextElementSibling.classList.remove('hidden');
    playTitikA.classList.add('hidden');
  });
});

dropdownButton.addEventListener('click', function () {
  // Tampilkan atau sembunyikan menu dropdown
  dropdownMenu.classList.toggle('-translate-y-[600px]');
  dropdownButton.classList.toggle('bg-gray-200');
});

window.addEventListener('click', function (e) {
  if (!dropdownButton.contains(e.target)) {
    dropdownMenu.classList.add('-translate-y-[600px]');
    dropdownButton.classList.remove('bg-gray-200');
  }
});

function setRotationFromInput() {
  var degreeInput = document.getElementById('degreeInput');
  var inputAngle = parseInt(degreeInput.value);
  var nearestAngle = findNearestAngle(inputAngle, 1);
  degreeInput.value = nearestAngle;
  setRotation(nearestAngle);
}

document.querySelectorAll('.playTitikA').forEach((playTitikA) => {
  playTitikA.addEventListener('click', () => {
    playTitikA.nextElementSibling.classList.remove('hidden');
    playTitikA.classList.add('hidden');
  });
});

function toggleNavbar() {
  var sidebar = document.getElementById('sidebar');
  var sidebarToggle = document.getElementById('sidebarToggle');

  sidebar.classList.toggle('translate-x-full');

  // Menambahkan atau menghapus kelas 'hidden'
}

document.querySelectorAll('.question-container').forEach((container) => {
  const options = container.querySelectorAll('.pilihan');
  const checkAnswerButton = container.querySelector('.cekJawaban');
  const resultDiv = container.querySelector('.jadiBenar');
  let selectedOption = null;
  let answerChecked = false;

  options.forEach((option) => {
    option.addEventListener('click', () => {
      if (answerChecked) return; // Disable option selection after answer check

      // Remove selection from other options
      options.forEach((opt) => opt.classList.remove('bg-orange-100'));
      // Mark the selected option
      option.classList.add('bg-orange-100');
      selectedOption = option;
      checkAnswerButton.disabled = false; // Enable the check answer button
    });
  });

  checkAnswerButton.addEventListener('click', () => {
    if (!selectedOption || answerChecked) return;

    const isCorrect = selectedOption.classList.contains('benar');
    const correctAnswer = container.querySelector('.benar .text-orange-300').textContent.trim(); // Get correct answer letter
    const rightAnswer = document.querySelector('.rightAnswer');
    const wrongAnswer = document.querySelector('.wrongAnswer');

    if (isCorrect) {
      resultDiv.innerHTML = 'Jawaban benar!';
      resultDiv.classList.remove('hidden');
      resultDiv.style.color = 'green';
      rightAnswer.classList.remove('hidden');
      setTimeout(() => {
        rightAnswer.classList.add('hidden');
      }, 1000);
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
    } else {
      resultDiv.innerHTML = `Jawaban yang benar adalah ${correctAnswer}!`;
      resultDiv.classList.remove('hidden');
      resultDiv.style.color = 'red';
      wrongAnswer.classList.remove('hidden');
      setTimeout(() => {
        wrongAnswer.classList.add('hidden');
      }, 1000);

      const audioElement = document.getElementById('myAudio');
      audioElement.play();
    }

    answerChecked = true; // Disable further checking
    checkAnswerButton.classList.add('hidden'); // Hide the button after checking
  });
});

document.querySelectorAll('.question-container2').forEach((container) => {
  const options2 = container.querySelectorAll('.pilihan2');
  const checkAnswerButton2 = container.querySelector('.cekJawaban2');
  const resultDiv2 = container.querySelector('.jadiBenar2');
  let selectedOption2 = null;
  let answerChecked2 = false;

  options2.forEach((option) => {
    option.addEventListener('click', () => {
      if (answerChecked2) return; // Disable option selection after answer check

      // Remove selection from other options
      options2.forEach((opt) => opt.classList.remove('bg-orange-100'));
      // Mark the selected option
      option.classList.add('bg-orange-100');
      selectedOption2 = option;
      checkAnswerButton2.disabled = false; // Enable the check answer button
    });
  });

  checkAnswerButton2.addEventListener('click', () => {
    if (!selectedOption2 || answerChecked2) return;

    const isCorrect2 = selectedOption2.classList.contains('benar2');
    const correctAnswer2 = container.querySelector('.benar2 .text-orange-300').textContent.trim(); // Get correct answer letter
    const rightAnswer = document.querySelector('.rightAnswer');
    const wrongAnswer = document.querySelector('.wrongAnswer');
    const checkboxesJarakTranslasi = document.querySelectorAll('.checkboxJarakTranslasi');

    if (isCorrect2) {
      resultDiv2.innerHTML = 'Jawaban benar!';
      resultDiv2.classList.remove('hidden');
      resultDiv2.style.color = 'green';
      rightAnswer.classList.remove('hidden');
      nextMateri.classList.remove('hidden');
      checkboxesJarakTranslasi.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      setTimeout(() => {
        rightAnswer.classList.add('hidden');
      }, 1000);
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
    } else {
      resultDiv2.innerHTML = `Jawaban yang benar adalah ${correctAnswer2}!`;
      resultDiv2.classList.remove('hidden');
      resultDiv2.style.color = 'red';
      wrongAnswer.classList.remove('hidden');
      nextMateri.classList.remove('hidden');
      checkboxesJarakTranslasi.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      setTimeout(() => {
        wrongAnswer.classList.add('hidden');
      }, 1000);

      const audioElement = document.getElementById('myAudio');
      audioElement.play();
    }

    answerChecked2 = true; // Disable further checking
    checkAnswerButton2.classList.add('hidden'); // Hide the button after checking
  });
});

document.getElementById('cekSelect').addEventListener('click', function () {
  // Ambil elemen select dan nilai yang dipilih
  const select1 = document.getElementById('select1');
  const select2 = document.getElementById('select2');
  const rightAnswer = document.querySelector('.rightAnswer');
  const wrongAnswer = document.querySelector('.wrongAnswer');

  const selectedValue1 = select1.value;
  const selectedValue2 = select2.value;
  const checkboxArahTranslasi = document.querySelectorAll('.checkboxArahTranslasi');

  // Ambil nilai jawaban yang benar dari atribut data-answer
  const correctAnswer1 = select1.getAttribute('data-answer');
  const correctAnswer2 = select2.getAttribute('data-answer');

  // Periksa apakah pilihan pengguna cocok dengan jawaban yang benar
  if (selectedValue1 === correctAnswer1 && selectedValue2 === correctAnswer2) {
    rightAnswer.classList.remove('hidden');
    checkboxArahTranslasi.forEach((checkbox) => {
      checkbox.checked = true;
      checkbox.disabled = false;
    });
    nextMateri.classList.remove('hidden');
    setTimeout(() => {
      rightAnswer.classList.add('hidden');
    }, 1000);

    // Disable input dan sembunyikan tombol setelah jawaban benar
    select1.disabled = true;
    select2.disabled = true; // Sembunyikan tombol setelah jawaban benar

    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play();
    document.getElementById('cekSelect').classList.add('hidden');
  } else {
    wrongAnswer.classList.remove('hidden');
    setTimeout(() => {
      wrongAnswer.classList.add('hidden');
    }, 1000);

    const audioElement = document.getElementById('myAudio');
    audioElement.play(); // Putar audio jawaban salah
  }
});

function addEventListeners() {
  const checkAnswerButtons = document.querySelectorAll('.checkAnswerButton');
  const answerInputs = document.querySelectorAll('.answerInput');

  // Event listener untuk setiap input, agar tombol 'Check' aktif setelah input diisi
  answerInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      const checkButton = checkAnswerButtons[index];
      checkButton.disabled = input.value.trim() === ''; // Disable tombol jika input kosong
    });
  });

  // Event listener untuk tombol 'Check' setelah input terisi
  checkAnswerButtons.forEach((button, index) => {
    button.disabled = true; // Awalnya tombol dinonaktifkan
    button.addEventListener('click', () => {
      const inputElement = answerInputs[index];
      const userAnswer = inputElement.value.trim(); // Hapus spasi kosong
      const correctAnswer = inputElement.getAttribute('data-answer');

      // Ambil elemen rightAnswer dan wrongAnswer global
      const rightAnswer = document.querySelector('.rightAnswer');
      const wrongAnswer = document.querySelector('.wrongAnswer');

      if (userAnswer === correctAnswer) {
        rightAnswer.classList.remove('hidden');
        setTimeout(() => {
          rightAnswer.classList.add('hidden');
        }, 1000);

        // Disable input dan sembunyikan tombol setelah jawaban benar
        inputElement.disabled = true;
        button.classList.add('hidden'); // Sembunyikan tombol setelah jawaban benar

        const audioElement2 = document.getElementById('myAudio2');
        audioElement2.play(); // Putar audio jawaban benar
      } else {
        wrongAnswer.classList.remove('hidden');
        setTimeout(() => {
          wrongAnswer.classList.add('hidden');
        }, 1000);

        const audioElement = document.getElementById('myAudio');
        audioElement.play(); // Putar audio jawaban salah
      }

      // Check if all answers are correct (implementasi fungsi ini perlu disesuaikan dengan kebutuhan Anda)
      checkAllAnswers();
    });
  });
}

// Panggil fungsi untuk menambahkan event listener setelah DOM siap
document.addEventListener('DOMContentLoaded', addEventListeners);

function checkAllAnswers() {
  // Implementasikan logika untuk memeriksa apakah semua jawaban benar
  // Ini bisa disesuaikan dengan kebutuhan aplikasi Anda
}

document.addEventListener('DOMContentLoaded', function () {
  const startElement = document.getElementById('materi'); // Element sebelum yang ingin ditampilkan
  let currentElement = startElement.nextElementSibling; // Mulai dari elemen setelah #materi

  const button = document.getElementById('showNextDivButton');
  button.addEventListener('click', function () {
    if (currentElement && currentElement.classList.contains('hidden')) {
      currentElement.classList.remove('hidden');

      // Scroll elemen ke tampilan dengan smooth behavior
      currentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Menunggu sebentar sebelum menggulir ke atas
      setTimeout(() => {
        window.scrollBy(0, -200); // Scroll 200px ke atas
      }, 500); // Sesuaikan waktu tunggu jika perlu
      nextMateri.classList.add('hidden');
      currentElement = currentElement.nextElementSibling; // Pindah ke elemen berikutnya
    }
  });
});

const checkboxesPengertianTranslasi = document.querySelectorAll('.checkboxPengertianTranslasi');
const akhirPengertiantranslasi = document.getElementById('akhirPengertiantranslasi');
const nextMateri = document.getElementById('nextMateri');

const observerPengertianTranslasi = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkboxesPengertianTranslasi.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = false;
        });
        nextMateri.classList.remove('hidden');
      }
    });
  },
  { threshold: 1.0 }
);

observerPengertianTranslasi.observe(akhirPengertiantranslasi);

const checkboxPenulisan = document.querySelectorAll('.checkboxPenulisan');
const akhirSudutRotasi = document.getElementById('akhirSudutRotasi');

const observerSudutRotasi = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkboxPenulisan.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = false;
        });
        nextMateri.classList.remove('hidden');
      }
    });
  },
  { threshold: 1.0 }
);

observerSudutRotasi.observe(akhirSudutRotasi);
