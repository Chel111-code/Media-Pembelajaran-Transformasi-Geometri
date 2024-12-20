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
  document.getElementById('percakapan').classList.add('hidden');
  document.getElementById('materi').classList.remove('hidden');
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
  document.getElementById('percakapan').classList.add('hidden');
  document.getElementById('materi').classList.remove('hidden');
}
function lewati() {
  document.getElementById('percakapan').classList.add('hidden');
  document.getElementById('materi').classList.remove('hidden');
}

const checkboxesPengertianTranslasi = document.querySelectorAll('.checkboxPengertianTranslasi');
const akhirPengertiantranslasi = document.getElementById('akhirPengertiantranslasi');
const nextMateri = document.getElementById('nextMateri');

const observerPengertianTranslasi = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkboxesPengertianTranslasi.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = false;
        });
        nextMateri.classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('chatbox').classList.remove('hidden');
          const audioNotif = document.getElementById('notifnih');
          audioNotif.play();
        }, 1000);

        // Memutus observer agar kode hanya berjalan sekali
        observer.disconnect();
      }
    });
  },
  { threshold: 1.0 }
);

observerPengertianTranslasi.observe(akhirPengertiantranslasi);

document.getElementById('closeChatbox').addEventListener('click', () => {
  document.getElementById('chatbox').classList.add('hidden');
});

document.getElementById('closeChatbox2').addEventListener('click', () => {
  document.getElementById('chatbox2').classList.add('hidden');
});

const checkboxesJarakTranslasi = document.querySelectorAll('.checkboxJarakTranslasi');
const akhirJaraktranslasi = document.getElementById('akhirJaraktranslasi');

const observerJarakTranslasi = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkboxesJarakTranslasi.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = false;
        });
        nextMateri.classList.remove('hidden');
      }
    });
  },
  { threshold: 1.0 }
);

observerJarakTranslasi.observe(akhirJaraktranslasi);

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
        window.scrollBy(0, 500); // Scroll 200px ke atas
      }); // Sesuaikan waktu tunggu jika perlu
      nextMateri.classList.add('hidden');
      currentElement = currentElement.nextElementSibling; // Pindah ke elemen berikutnya
    }
  });
});

function addEventListeners() {
  const checkAnswerButtons = document.querySelectorAll('.checkAnswerButton');

  checkAnswerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const inputElement = document.querySelectorAll('.answerInput')[index];
      const userAnswer = inputElement.value;
      const correctAnswer = inputElement.getAttribute('data-answer');

      // Ambil elemen rightAnswer dan wrongAnswer global
      const rightAnswer = document.querySelector('.rightAnswer');
      const wrongAnswer = document.querySelector('.wrongAnswer');

      if (userAnswer == correctAnswer) {
        rightAnswer.classList.remove('hidden');
        const oii = inputElement.closest('.drop-shadow-md').nextElementSibling.nextElementSibling;
        oii.classList.remove('hidden');
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

document.getElementById('playMeja').addEventListener('click', () => {
  const playMeja = document.getElementById('playMeja');
  playMeja.nextElementSibling.classList.add('meja');
  playMeja.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hidden');
  playMeja.classList.add('opacity-0');
});

document.querySelectorAll('.playTitikA').forEach((playTitikA) => {
  playTitikA.addEventListener('click', () => {
    playTitikA.nextElementSibling.classList.remove('hidden');
    playTitikA.classList.add('hidden');
  });
});

document.querySelectorAll('.playPilgand').forEach((playPilgand) => {
  playPilgand.addEventListener('click', () => {
    // Mengakses elemen div kedua di dalam playPilgand.nextElementSibling
    const targetDiv = playPilgand.nextElementSibling.children[1];
    if (targetDiv) {
      targetDiv.classList.remove('hidden');
    }
    playPilgand.classList.add('hidden');
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

  // Ambil nilai jawaban yang benar dari atribut data-answer
  const correctAnswer1 = select1.getAttribute('data-answer');
  const correctAnswer2 = select2.getAttribute('data-answer');

  // Periksa apakah pilihan pengguna cocok dengan jawaban yang benar
  if (selectedValue1 === correctAnswer1 && selectedValue2 === correctAnswer2) {
    rightAnswer.classList.remove('hidden');
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

document.getElementById('cekSelect2').addEventListener('click', function () {
  // Ambil elemen select dan nilai yang dipilih
  const select3 = document.getElementById('select3');
  const select4 = document.getElementById('select4');
  const rightAnswer = document.querySelector('.rightAnswer');
  const wrongAnswer = document.querySelector('.wrongAnswer');

  const selectedValue3 = select3.value;
  const selectedValue4 = select4.value;

  // Ambil nilai jawaban yang benar dari atribut data-answer
  const correctAnswer3 = select3.getAttribute('data-answer');
  const correctAnswer4 = select4.getAttribute('data-answer');

  // Periksa apakah pilihan pengguna cocok dengan jawaban yang benar
  if (selectedValue3 === correctAnswer3 && selectedValue4 === correctAnswer4) {
    rightAnswer.classList.remove('hidden');
    setTimeout(() => {
      rightAnswer.classList.add('hidden');
    }, 1000);

    // Disable input dan sembunyikan tombol setelah jawaban benar
    select3.disabled = true;
    select4.disabled = true; // Sembunyikan tombol setelah jawaban benar

    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play();
    document.getElementById('cekSelect2').classList.add('hidden');
  } else {
    wrongAnswer.classList.remove('hidden');
    setTimeout(() => {
      wrongAnswer.classList.add('hidden');
    }, 1000);

    const audioElement = document.getElementById('myAudio');
    audioElement.play(); // Putar audio jawaban salah
  }
});

document.querySelectorAll('.question-container').forEach((container) => {
  const options = container.querySelectorAll('.pilihan');
  const checkAnswerButton = container.querySelector('.cekJawaban');
  const resultDiv = container.querySelector('.jadiBenar');
  const akhirArahTranslasi2 = document.getElementById('akhirArahTranslasi'); // Tambahkan elemen akhirArahTranslasi

  let selectedOption = null;
  let answerChecked = false;

  options.forEach((option) => {
    option.addEventListener('click', () => {
      if (answerChecked) return;

      // Reset warna pilihan lain
      options.forEach((opt) => opt.classList.remove('bg-orange-100'));

      // Beri warna pada opsi yang dipilih
      option.classList.add('bg-orange-100');
      selectedOption = option;
      checkAnswerButton.disabled = false;
    });
  });

  checkAnswerButton.addEventListener('click', () => {
    if (!selectedOption || answerChecked) return;

    const isCorrect = selectedOption.classList.contains('benar');
    const correctAnswer = container.querySelector('.benar .text-orange-300').textContent.trim();
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

      // Tampilkan akhirArahTranslasi saat jawaban benar
      akhirArahTranslasi2.classList.remove('hidden');
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
      akhirArahTranslasi2.classList.remove('hidden');
    }

    answerChecked = true;
    checkAnswerButton.classList.add('hidden');
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

    if (isCorrect2) {
      resultDiv2.innerHTML = 'Jawaban benar!';
      resultDiv2.classList.remove('hidden');
      resultDiv2.style.color = 'green';
      rightAnswer.classList.remove('hidden');

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

document.querySelectorAll('.question-container3').forEach((container) => {
  const options3 = container.querySelectorAll('.pilihan3');
  const checkAnswerButton3 = container.querySelector('.cekJawaban3');
  const resultDiv3 = container.querySelector('.jadiBenar3');
  let selectedOption3 = null;
  let answerChecked3 = false;

  options3.forEach((option) => {
    option.addEventListener('click', () => {
      if (answerChecked3) return; // Disable option selection after answer check

      // Remove selection from other options
      options3.forEach((opt) => opt.classList.remove('bg-orange-100'));
      // Mark the selected option
      option.classList.add('bg-orange-100');
      selectedOption3 = option;
      checkAnswerButton3.disabled = false; // Enable the check answer button
    });
  });

  checkAnswerButton3.addEventListener('click', () => {
    if (!selectedOption3 || answerChecked3) return;

    const isCorrect3 = selectedOption3.classList.contains('benar3');
    const correctAnswer3 = container.querySelector('.benar3 .text-orange-300').textContent.trim(); // Get correct answer letter
    const rightAnswer = document.querySelector('.rightAnswer');
    const wrongAnswer = document.querySelector('.wrongAnswer');
    const checkboxPenulisan = document.querySelectorAll('.checkboxPenulisan');

    if (isCorrect3) {
      resultDiv3.innerHTML = 'Jawaban benar!';
      resultDiv3.classList.remove('hidden');
      resultDiv3.style.color = 'green';
      rightAnswer.classList.remove('hidden');

      checkboxPenulisan.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      document.getElementById('nextMateri').classList.remove('hidden');
      setTimeout(() => {
        rightAnswer.classList.add('hidden');
      }, 1000);
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
    } else {
      resultDiv3.innerHTML = `Jawaban yang benar adalah ${correctAnswer3}!`;
      resultDiv3.classList.remove('hidden');
      resultDiv3.style.color = 'red';
      wrongAnswer.classList.remove('hidden');
      checkboxPenulisan.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      document.getElementById('nextMateri').classList.remove('hidden');
      setTimeout(() => {
        wrongAnswer.classList.add('hidden');
      }, 1000);

      const audioElement = document.getElementById('myAudio');
      audioElement.play();
    }

    answerChecked3 = true; // Disable further checking
    checkAnswerButton3.classList.add('hidden'); // Hide the button after checking
  });
});

function penjelasan() {
  document.getElementById('penjelasan').classList.remove('hidden');
}
function ok() {
  document.getElementById('penjelasan').classList.add('hidden');
  document.querySelector('.imgklik').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('tesCanvas');
  const ctx = canvas.getContext('2d');
  const notification = document.getElementById('notification');
  const gridSize = 24; // Ukuran grid dalam piksel

  // Canvas dimensions
  canvas.width = 240;
  canvas.height = 240;

  // Triangle coordinates and draggable points
  const triangle = [
    { x: 8 * gridSize, y: 4 * gridSize },
    { x: 9 * gridSize, y: 7 * gridSize },
    { x: 6 * gridSize, y: 6 * gridSize },
  ];
  let points = [
    { x: 48, y: 24 },
    { x: 24, y: 72 },
    { x: 72, y: 72 },
  ];
  let dragPoint = null;

  // Target coordinates
  const targetPoints = [
    { x: 96, y: 120 },
    { x: 72, y: 48 },
    { x: 24, y: 96 },
  ];

  // Function to draw grid
  function drawGrid() {
    ctx.strokeStyle = '#ddd'; // Warna grid

    // Menggambar garis vertikal
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Menggambar garis horizontal
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  // Function to draw the initial state
  function drawInitialState() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    // Draw mirror line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = 'transparent';
    ctx.stroke();

    // Draw static triangle
    drawTriangle(triangle, '#B5AAAA');

    // Draw draggable points
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#3CD69F';
      ctx.fill();
      ctx.stroke();
    });

    // Connect draggable points
    drawTriangle(points, '#3CD69F');
  }

  function drawTriangle(points, color) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  // Mouse and touch event handlers
  function handleMouseDown(e) {
    const mousePos = getMousePos(canvas, e);
    dragPoint = getDragPoint(mousePos);
  }

  function handleMouseMove(e) {
    if (!dragPoint) return;
    const mousePos = getMousePos(canvas, e);
    dragPoint.x = mousePos.x;
    dragPoint.y = mousePos.y;
    drawInitialState();
  }

  function handleMouseUp(e) {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
    updateNotification();
  }

  // Touch event adaptations
  function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }

  function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }

  function handleTouchEnd(e) {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
    const mouseEvent = new MouseEvent('mouseup', {});
    canvas.dispatchEvent(mouseEvent);
  }

  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('touchstart', handleTouchStart, false);
  canvas.addEventListener('touchmove', handleTouchMove, false);
  canvas.addEventListener('touchend', handleTouchEnd, false);

  // Utility functions
  function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function getDragPoint(mousePos) {
    return points.find(
      (point) => Math.sqrt((point.x - mousePos.x) ** 2 + (point.y - mousePos.y) ** 2) < 10
    );
  }

  function snapToGrid(point) {
    return {
      x: Math.round(point.x / gridSize) * gridSize,
      y: Math.round(point.y / gridSize) * gridSize,
    };
  }

  function updateNotification() {
    const checkButton = document.getElementById('Check3');
    // Memeriksa apakah tombol "Check" telah diklik
    if (!checkButton.clicked) {
      // Jika belum diklik, tidak melakukan apa-apa
      return;
    }

    // Memeriksa apakah setiap titik berada dalam jarak tertentu dari titik target
    const tolerance = 10; // Jarak toleransi
    const correctPosition = points.every((point) =>
      targetPoints.some(
        (targetPoint) =>
          Math.abs(point.x - targetPoint.x) < tolerance &&
          Math.abs(point.y - targetPoint.y) < tolerance
      )
    );

    const rightAnswer = document.querySelector('.rightAnswer');
    const wrongAnswer = document.querySelector('.wrongAnswer');
    // Memperbarui pesan notifikasi berdasarkan hasil pengecekan
    if (correctPosition) {
      // Menghilangkan kelas hidden dari elemen dengan id 'benar3' jika posisi benar
      const checkboxKordinat = document.querySelectorAll('.checkboxKordinat');
      checkboxKordinat.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      document.getElementById('nextMateri').classList.remove('hidden');
      document.getElementById('benar3').classList.remove('hidden');
      document.getElementById('benar3').classList.add('inline-block');
      document.getElementById('salah3').classList.add('hidden');
      document.getElementById('showNextDivButton').classList.add('hidden');
      document.getElementById('showaja').classList.remove('hidden');
      rightAnswer.classList.remove('hidden');
      setTimeout(() => {
        rightAnswer.classList.add('hidden');
      }, 1000);
      setTimeout(() => {
        document.getElementById('chatbox2').classList.remove('hidden');
        const audioNotif = document.getElementById('notifnih');
        audioNotif.play();
      }, 1000);
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
      setTimeout(() => {
        document.getElementById('games').classList.add('hidden');
      }, 2000);
    } else {
      document.getElementById('salah3').classList.remove('hidden');
      document.getElementById('salah3').classList.add('inline-block');
      document.getElementById('benar3').classList.add('hidden');
      wrongAnswer.classList.remove('hidden');
      setTimeout(() => {
        wrongAnswer.classList.add('hidden');
      }, 1000);

      const audioElement = document.getElementById('myAudio');
      audioElement.play();
    }

    // Mengatur kembali status tombol "Check" menjadi belum diklik
    checkButton.clicked = false;
  }

  // Event listener untuk tombol "Check"
  document.getElementById('Check3').addEventListener('click', function () {
    // Set flag clicked ke true ketika tombol "Check" diklik
    this.clicked = true;
    // Panggil fungsi updateNotification setelah tombol diklik
    updateNotification();
  });

  drawInitialState();
});

const canvas9 = document.getElementById('canvas9');
const ctx = canvas9.getContext('2d');
const translateXInput = document.getElementById('translate-x');
const translateYInput = document.getElementById('translate-y');
const translateBtn = document.getElementById('translate-btn');
const resetBtn = document.getElementById('reset-btn');
const notif = document.getElementById('notifcoba');
const gridSize = 25;

// Initial position for the point B
let pointB = { x: 100, y: 100, label: 'B' };
let pointBPrime = null;
let isTranslating = false; // Track if the translation is happening

// Draw the grid
function drawGrid() {
  ctx.strokeStyle = '#e5e7eb ';
  for (let x = 0; x <= canvas9.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas9.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas9.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas9.width, y);
    ctx.stroke();
  }
}

// Draw the point
function drawPoint(point, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fillText(point.label, point.x + 5, point.y - 5);
}

// Draw everything on the canvas
function draw() {
  ctx.clearRect(0, 0, canvas9.width, canvas9.height);
  drawGrid();

  // Draw original point in gray (always present behind) as reference
  if (isTranslating || pointBPrime) {
    drawPoint(pointB, '#d1d5db'); // Original point in gray (only shown during/after translation)
  }

  // Draw the new position of the point in green
  if (pointBPrime) {
    drawPoint(pointBPrime, '#4ade80'); // Translated point in green
  } else if (!isTranslating) {
    // Initial state before translation, pointB is green if translation hasn't started
    drawPoint(pointB, '#4ade80'); // Initial point in green
  }
}

draw();

// Utility function to translate a point
function translatePoint(point, dx, dy) {
  return { x: point.x + dx * gridSize, y: point.y + dy * -gridSize, label: point.label + "'" };
}

// Animate translation
function animateTranslation(start, end, duration) {
  const startTime = performance.now();
  isTranslating = true; // Mark that translation is happening
  draw(); // Redraw canvas immediately to show gray point

  function animate(time) {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const dx = (end.x - start.x) * progress;
    const dy = (end.y - start.y) * progress;

    const currentPoint = { x: start.x + dx, y: start.y, label: start.label };

    draw();
    drawPoint(currentPoint, '#4ade80'); // Moving point in green

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      const endPoint = { x: end.x, y: start.y, label: start.label };
      requestAnimationFrame(() => animateVertical(endPoint, end, duration));
    }
  }

  requestAnimationFrame(animate);
}

// Animate vertical translation
function animateVertical(start, end, duration) {
  const startTime = performance.now();

  function animate(time) {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const dy = (end.y - start.y) * progress;

    const currentPoint = { x: start.x, y: start.y + dy, label: start.label };

    draw();
    drawPoint(currentPoint, '#4ade80'); // Moving point in green

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      pointBPrime = end;
      isTranslating = false; // Translation finished
      draw();
    }
  }

  requestAnimationFrame(animate);
}

// Show notification
function showNotification() {
  notif.classList.remove('hidden');
  const audioElement3 = document.getElementById('myAudio3');
  audioElement3.play(); // Play correct answer audio
  setTimeout(() => {
    notif.classList.add('hidden');
  }, 3000);
}

// Translate button click handler
translateBtn.addEventListener('click', () => {
  const dx = parseInt(translateXInput.value);
  const dy = parseInt(translateYInput.value);

  if (dx < -3 || dx > 3 || dy < -3 || dy > 3) {
    showNotification();
    return;
  }

  isTranslating = true; // Mark that translation has started
  pointBPrime = null; // Remove the previous translation result
  const newPoint = translatePoint(pointB, dx, dy);
  animateTranslation(pointB, newPoint, 1000);
});

// Reset button click handler
resetBtn.addEventListener('click', () => {
  pointB = { x: 100, y: 100, label: 'B' }; // Reset point B to its original position
  pointBPrime = null;
  isTranslating = false; // Reset translation status
  draw();
});

function petunjukButton() {
  const kuis = document.getElementById('petunjukMenu');
  const icon = document.getElementById('dropdownIcon');

  if (kuis.style.maxHeight) {
    // Tutup dropdown
    kuis.style.opacity = '0'; // Fade-out
    kuis.style.maxHeight = null; // Hapus tinggi agar collapse
    icon.classList.add('-rotate-90'); // Kembalikan posisi ikon
  } else {
    // Buka dropdown
    kuis.style.maxHeight = kuis.scrollHeight + 'px'; // Set tinggi dinamis
    kuis.style.opacity = '1'; // Fade-in
    icon.classList.remove('-rotate-90'); // Putar ikon ke bawah
    document.getElementById('petunjuk1').classList.add('hidden');
  }
}
function checkAnswer1(element) {
  const isCorrect11 = element.getAttribute('data-answer') === 'true';
  const rightAnswer = document.querySelector('.rightAnswer');
  const wrongAnswer = document.querySelector('.wrongAnswer');
  const checkboxesArahTranslasi = document.querySelectorAll('.checkboxArahTranslasi');

  if (isCorrect11) {
    // Jika jawaban benar

    element.classList.remove('bg-[#F8F5F5]');
    element.classList.add('bg-green-400');
    rightAnswer.classList.remove('hidden');
    setTimeout(() => {
      rightAnswer.classList.add('hidden');
    }, 1000);
    setTimeout(() => {
      document.getElementById('games').classList.add('hidden');
    }, 2000);
    checkboxesArahTranslasi.forEach((checkbox) => {
      checkbox.checked = true;
      checkbox.disabled = false;
    });
    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play(); // Highlight jawaban
    nextMateri.classList.remove('hidden');
  } else {
    // Jika jawaban salah

    element.remove();
    wrongAnswer.classList.remove('hidden');
    setTimeout(() => {
      wrongAnswer.classList.add('hidden');
    }, 1000);

    const audioElement = document.getElementById('myAudio');
    audioElement.play(); // Putar audio jawaban salah // Hapus elemen yang dipilih
  }
}
function dropupbutton() {
  const kuis2 = document.getElementById('dropupmenu');
  const icon2 = document.getElementById('dropupIcon');
  if (kuis2.style.maxHeight === '0px') {
    // Jika tertutup, buka kuis2
    kuis2.style.maxHeight = kuis2.scrollHeight + 'px';
    // Tinggi sesuai konten
    icon2.style.transform = 'rotate(0deg)';
    // Rotasi ikon ke atas
  } else {
    // Jika terbuka, tutup kuis2
    kuis2.style.maxHeight = '0px'; // Tinggi menjadi nol
    icon2.style.transform = 'rotate(-90deg)';
    kuis2.classList.remove('pb-4'); // Rotasi ikon ke bawah
  }
}
function mulaiKuis() {
  document.getElementById('games').classList.remove('hidden');
  document.getElementById('mulaiKuis').classList.add('hidden');
}
