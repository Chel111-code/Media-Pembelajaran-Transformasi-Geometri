document.addEventListener('DOMContentLoaded', function () {
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');
  var gridSize3 = 25; // Ukuran grid
  var correctPoint3 = { x: 7, y: 7 }; // Titik yang benar
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
      drawLabel3(correctPoint3.x, correctPoint3.y, "H'");
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

// batas

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

function trueButton() {
  document.getElementById('titikB_yesno').classList.add('hidden');
  const rightAnswer = document.querySelector('.rightAnswer');
  rightAnswer.classList.remove('hidden');
  const audioElement2 = document.getElementById('myAudio2');
  audioElement2.play();
  document.getElementById('resultMessage1').classList.remove('hidden');
  setTimeout(() => {
    rightAnswer.classList.add('hidden');
  }, 1000);
  setTimeout(() => {
    document.getElementById('nextresultMessage1').classList.remove('hidden');
  }, 2000);
}

function falseButton() {
  document.getElementById('titikB_yesno').classList.add('hidden');
  const wrongAnswer = document.querySelector('.wrongAnswer');
  wrongAnswer.classList.remove('hidden');
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('resultMessage1').classList.remove('hidden');
  setTimeout(() => {
    wrongAnswer.classList.add('hidden');
  }, 1000);
  setTimeout(() => {
    document.getElementById('nextresultMessage1').classList.remove('hidden');
  }, 2000);
}

function trueButtonE() {
  document.getElementById('titikE_yesno').classList.add('hidden');
  const rightAnswer = document.querySelector('.rightAnswer');
  rightAnswer.classList.remove('hidden');
  const audioElement2 = document.getElementById('myAudio2');
  audioElement2.play();
  document.getElementById('resultMessage2').classList.remove('hidden');
  setTimeout(() => {
    rightAnswer.classList.add('hidden');
  }, 1000);
  setTimeout(() => {
    document.getElementById('nextresultMessage2').classList.remove('hidden');
  }, 2000);
}

function falseButtonE() {
  document.getElementById('titikE_yesno').classList.add('hidden');
  const wrongAnswer = document.querySelector('.wrongAnswer');
  wrongAnswer.classList.remove('hidden');
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('resultMessage2').classList.remove('hidden');
  setTimeout(() => {
    wrongAnswer.classList.add('hidden');
  }, 1000);
  setTimeout(() => {
    document.getElementById('nextresultMessage2').classList.remove('hidden');
  }, 2000);
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

const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');
const cekJawaban4 = document.querySelector('.cekJawaban4');
const jadiBenar4 = document.querySelector('.jadiBenar4');

function enableButton() {
  // Enable the button only if at least one checkbox is selected
  if (checkbox2.checked || checkbox3.checked) {
    cekJawaban4.disabled = false;
  } else {
    cekJawaban4.disabled = true;
  }
}

// Add event listeners to the checkboxes
checkbox1.addEventListener('change', enableButton);
checkbox2.addEventListener('change', enableButton);
checkbox3.addEventListener('change', enableButton);

// Check the answer when the button is clicked
cekJawaban4.addEventListener('click', () => {
  // Check if the correct checkboxes are selected
  if (checkbox2.checked && checkbox3.checked && !checkbox1.checked) {
    const rightAnswer = document.querySelector('.rightAnswer');
    rightAnswer.classList.remove('hidden');
    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play();
    setTimeout(() => {
      rightAnswer.classList.add('hidden');
    }, 1000);
    cekJawaban4.classList.add('hidden');
  } else {
    jadiBenar4.classList.remove('hidden');
    const wrongAnswer = document.querySelector('.wrongAnswer');
    wrongAnswer.classList.remove('hidden');
    const audioElement = document.getElementById('myAudio');
    audioElement.play();
    setTimeout(() => {
      wrongAnswer.classList.add('hidden');
    }, 1000);
    cekJawaban4.classList.add('hidden');
  }

  // Disable the button after use
  cekJawaban4.disabled = true;
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('geometryCanvas');
  const ctx = canvas.getContext('2d');
  const gridSize = 25;

  // Canvas dimensions
  canvas.width = 200;
  canvas.height = 200;

  // Triangle coordinates and draggable points
  const triangle = [
    { x: 3 * gridSize, y: 2 * gridSize },
    { x: 3 * gridSize, y: 6 * gridSize },
    { x: 1 * gridSize, y: 4 * gridSize },
  ];

  let points = [
    { x: 75, y: 50 },
    { x: 75, y: 150 },
    { x: 25, y: 100 },
  ];

  const labels = ['A', 'B', 'C'];
  const updatedLabels = ["A'", "B'", "C'"];
  let isMoved = false;
  let dragPoint = null;

  const targetPoints = [
    { x: 125, y: 50 },
    { x: 125, y: 150 },
    { x: 175, y: 100 },
  ];

  // Function to draw grid
  function drawGrid() {
    ctx.strokeStyle = '#f9fafb';
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
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
    drawTriangle(triangle, '#D8D7D7', labels, '#D8D7D7');
    drawTriangle(points, '#77F477', isMoved ? updatedLabels : labels, '#4ade80');
  }

  function drawTriangle(points, color, labels, labelColor) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();

    points.forEach((point, index) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.stroke();
      ctx.font = '12px Arial';
      ctx.fillStyle = labelColor;
      ctx.fillText(labels[index], point.x + 5, point.y - 5);
    });
  }

  function handleDown(e) {
    const pos = getEventPos(canvas, e);
    dragPoint = getDragPoint(pos);
  }

  function handleMove(e) {
    if (!dragPoint) return;
    const pos = getEventPos(canvas, e);
    dragPoint.x = pos.x;
    dragPoint.y = pos.y;
    isMoved = true;
    drawInitialState();
    document.getElementById('Check3').disabled = false;
  }

  function handleUp() {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
  }

  function getEventPos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
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
    if (!checkButton.clicked) {
      return;
    }

    const tolerance = 10;
    const correctPosition = points.every(
      (point, index) =>
        Math.abs(point.x - targetPoints[index].x) < tolerance &&
        Math.abs(point.y - targetPoints[index].y) < tolerance
    );

    if (correctPosition) {
      const rightAnswer = document.querySelector('.rightAnswer');
      document.getElementById('benar3').classList.remove('hidden');
      document.getElementById('benar3').classList.add('inline-block');
      document.getElementById('salah3').classList.add('hidden');
      rightAnswer.classList.remove('hidden');
      setTimeout(() => {
        rightAnswer.classList.add('hidden');
      }, 1000);
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
    } else {
      const wrongAnswer = document.querySelector('.wrongAnswer');
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
    checkButton.clicked = false;
  }

  document.getElementById('Check3').addEventListener('click', function () {
    this.clicked = true;
    updateNotification();
  });

  document.getElementById('Check3').disabled = true;

  // Mouse and touch event listeners
  canvas.addEventListener('mousedown', handleDown);
  canvas.addEventListener('mousemove', handleMove);
  canvas.addEventListener('mouseup', handleUp);

  canvas.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      handleDown(e);
    },
    { passive: false }
  );
  canvas.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
      handleMove(e);
    },
    { passive: false }
  );
  canvas.addEventListener(
    'touchend',
    (e) => {
      e.preventDefault();
      handleUp(e);
    },
    { passive: false }
  );

  drawInitialState();
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas2 = document.getElementById('geometryCanvas2');
  const ctx2 = canvas2.getContext('2d');
  const gridSize2 = 25;

  canvas2.width = 200;
  canvas2.height = 200;

  const triangle2 = [
    { x: 1 * gridSize2, y: 1 * gridSize2 },
    { x: 4 * gridSize2, y: 3 * gridSize2 },
    { x: 7 * gridSize2, y: 1 * gridSize2 },
  ];

  let points2 = [
    { x: 25, y: 25 },
    { x: 100, y: 75 },
    { x: 175, y: 25 },
  ];

  const labels2 = ['A', 'B', 'C'];
  const updateLabels2 = ["A'", "B'", "C'"];
  let isMoved2 = false;
  let dragPoint2 = null;

  const targetPoint2 = [
    { x: 175, y: 175 },
    { x: 100, y: 125 },
    { x: 25, y: 175 },
  ];

  function drawGrid() {
    ctx2.strokeStyle = '#f9fafb';

    for (let x = 0; x <= canvas2.width; x += gridSize2) {
      ctx2.beginPath();
      ctx2.moveTo(x, 0);
      ctx2.lineTo(x, canvas2.height);
      ctx2.stroke();
    }

    for (let y = 0; y <= canvas2.height; y += gridSize2) {
      ctx2.beginPath();
      ctx2.moveTo(0, y);
      ctx2.lineTo(canvas2.width, y);
      ctx2.stroke();
    }
  }

  function drawInitialState() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    drawGrid();
    drawTriangle(triangle2, '#D8D7D7', labels2, '#D8D7D7');
    drawTriangle(points2, '#77F477', isMoved2 ? updateLabels2 : labels2, '#4ade80');
  }

  function drawTriangle(points, color, labels, labelColor) {
    ctx2.beginPath();
    ctx2.moveTo(points[0].x, points[0].y);
    points.forEach((point) => ctx2.lineTo(point.x, point.y));
    ctx2.closePath();
    ctx2.strokeStyle = color;
    ctx2.stroke();

    points.forEach((point, index) => {
      ctx2.beginPath();
      ctx2.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx2.fillStyle = color;
      ctx2.fill();
      ctx2.stroke();

      ctx2.font = '12px Arial';
      ctx2.fillStyle = labelColor;
      ctx2.fillText(labels[index], point.x + 5, point.y - 5);
    });
  }

  function handleDown(e) {
    e.preventDefault();
    const pos = getEventPos(canvas2, e);
    dragPoint2 = getDragPoint(pos);
  }

  function handleMove(e) {
    if (!dragPoint2) return;
    e.preventDefault();
    const pos = getEventPos(canvas2, e);
    dragPoint2.x = pos.x;
    dragPoint2.y = pos.y;
    isMoved2 = true;
    drawInitialState();
    document.getElementById('Check4').disabled = false;
  }

  function handleUp(e) {
    e.preventDefault();
    if (dragPoint2) {
      const snappedPos = snapToGrid(dragPoint2);
      dragPoint2.x = snappedPos.x;
      dragPoint2.y = snappedPos.y;
    }
    dragPoint2 = null;
    drawInitialState();
  }

  function getEventPos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function getDragPoint(pos) {
    return points2.find((point) => Math.sqrt((point.x - pos.x) ** 2 + (point.y - pos.y) ** 2) < 10);
  }

  function snapToGrid(point) {
    return {
      x: Math.round(point.x / gridSize2) * gridSize2,
      y: Math.round(point.y / gridSize2) * gridSize2,
    };
  }

  function updateNotification() {
    const checkButton = document.getElementById('Check4');
    if (!checkButton.clicked) {
      return;
    }

    const tolerance = 10;
    const correctPosition = points2.every((point, index) => {
      const targetPoint = targetPoint2[index];
      return (
        Math.abs(point.x - targetPoint.x) < tolerance &&
        Math.abs(point.y - targetPoint.y) < tolerance
      );
    });

    if (correctPosition) {
      document.getElementById('benar4').classList.remove('hidden');
      document.getElementById('benar4').classList.add('inline-block');
      document.getElementById('salah4').classList.add('hidden');
      document.getElementById('myAudio2').play();
    } else {
      document.getElementById('salah4').classList.remove('hidden');
      document.getElementById('salah4').classList.add('inline-block');
      document.getElementById('benar4').classList.add('hidden');
      document.getElementById('myAudio').play();
    }
    checkButton.clicked = false;
  }

  document.getElementById('Check4').addEventListener('click', function () {
    this.clicked = true;
    updateNotification();
  });

  document.getElementById('Check4').disabled = true;

  canvas2.addEventListener('mousedown', handleDown);
  canvas2.addEventListener('mousemove', handleMove);
  canvas2.addEventListener('mouseup', handleUp);

  canvas2.addEventListener('touchstart', handleDown, { passive: false });
  canvas2.addEventListener('touchmove', handleMove, { passive: false });
  canvas2.addEventListener('touchend', handleUp, { passive: false });

  drawInitialState();
});

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

const checkboxArahTranslasi = document.querySelectorAll('.checkboxArahTranslasi');
const akhirCerminTitik = document.getElementById('akhirCerminTitik');

const observerCerminTitik = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkboxArahTranslasi.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = false;
        });
        nextMateri.classList.remove('hidden');
      }
    });
  },
  { threshold: 1.0 }
);

observerCerminTitik.observe(akhirCerminTitik);

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
  const canvas6 = document.getElementById('geometryCanvas6');
  const ctx6 = canvas6.getContext('2d');
  const gridSize6 = 25; // Ukuran grid dalam piksel

  // canvas6 dimensions
  canvas6.width = 200;
  canvas6.height = 200;

  // triangle6 coordinates and draggable points6
  const triangle6 = [
    { x: 3 * gridSize6, y: 1 * gridSize6 },
    { x: 1 * gridSize6, y: 3 * gridSize6 },
    { x: 3 * gridSize6, y: 3 * gridSize6 },
  ];

  let points6 = [
    { x: 75, y: 25 },
    { x: 25, y: 75 },
    { x: 75, y: 75 },
  ];

  const labels6 = ['A', 'B', 'C'];
  const updateLabels6 = ["A'", "B'", "C'"]; // Label setelah segitiga digeser
  let isMoved6 = false;

  let dragPoint6 = null;

  // Target coordinates - target spesifik untuk setiap titik
  const targetPoint6 = [
    { x: 175, y: 125 },
    { x: 125, y: 175 },
    { x: 125, y: 125 },
  ];

  // Function to draw grid
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

  // Function to draw the initial state
  function drawInitialState6() {
    ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
    drawGrid6();

    drawTriangle6(triangle6, '#D8D7D7', labels6, '#D8D7D7'); // Static triangle6 with label color D8D7D7
    drawTriangle6(points6, '#77F477', isMoved6 ? updateLabels6 : labels6, '#4ade80'); // Draggable triangle6
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

  function handleStart6(e) {
    e.preventDefault();
    const pos = getEventPos6(canvas6, e);
    dragPoint6 = getDragPoint6(pos);
  }

  function handleMove6(e) {
    if (!dragPoint6) return;
    e.preventDefault();
    const pos = getEventPos6(canvas6, e);
    dragPoint6.x = pos.x;
    dragPoint6.y = pos.y;
    isMoved6 = true;
    drawInitialState6();

    document.getElementById('Check6').disabled = false;
  }

  function handleEnd6() {
    if (dragPoint6) {
      const snappedPos6 = snapToGrid6(dragPoint6);
      dragPoint6.x = snappedPos6.x;
      dragPoint6.y = snappedPos6.y;
    }
    dragPoint6 = null;
    drawInitialState6();
  }

  function getEventPos6(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const evt = event.touches ? event.touches[0] : event;
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
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

  function updateNotification6() {
    const checkButton = document.getElementById('Check6');
    if (!checkButton.clicked) {
      return;
    }

    const tolerance = 10;
    const correctPosition6 = points6.every((point, index) => {
      const targetPoint = targetPoint6[index];
      return (
        Math.abs(point.x - targetPoint.x) < tolerance &&
        Math.abs(point.y - targetPoint.y) < tolerance
      );
    });

    if (correctPosition6) {
      document.getElementById('benar6').classList.remove('hidden');
      document.getElementById('benar6').classList.add('inline-block');
      document.getElementById('salah6').classList.add('hidden');
      document.getElementById('showNextDivButton').classList.add('hidden');
      document.getElementById('showaja').classList.remove('hidden');
      setTimeout(() => {
        document.querySelector('.rightAnswer').classList.add('hidden');
      }, 1000);
      document.getElementById('myAudio2').play();
      document.querySelectorAll('.checkboxPenulisan').forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      document.getElementById('nextMateri').classList.remove('hidden');
    } else {
      document.getElementById('salah6').classList.remove('hidden');
      document.getElementById('salah6').classList.add('inline-block');
      document.getElementById('benar6').classList.add('hidden');
      setTimeout(() => {
        document.querySelector('.wrongAnswer').classList.add('hidden');
      }, 1000);
      document.getElementById('myAudio').play();
    }
    checkButton.clicked = false;
  }

  document.getElementById('Check6').addEventListener('click', function () {
    this.clicked = true;
    updateNotification6();
  });

  document.getElementById('Check6').disabled = true;

  canvas6.addEventListener('mousedown', handleStart6);
  canvas6.addEventListener('mousemove', handleMove6);
  canvas6.addEventListener('mouseup', handleEnd6);

  canvas6.addEventListener('touchstart', handleStart6, { passive: false });
  canvas6.addEventListener('touchmove', handleMove6, { passive: false });
  canvas6.addEventListener('touchend', handleEnd6, { passive: false });

  drawInitialState6();
});

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
  document.getElementById('awwww').classList.add('hidden');
}
function checkAnswer1(element) {
  const isCorrect11 = element.getAttribute('data-answer') === 'true';
  const rightAnswer = document.querySelector('.rightAnswer');
  const wrongAnswer = document.querySelector('.wrongAnswer');

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

    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play(); // Highlight jawaban
    nextMateri.classList.remove('hidden');
    document.getElementById('akhirawww').classList.remove('hidden');
    document.getElementById('aww2').classList.remove('hidden');
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
