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

const wahyu = document.querySelector('.wahyu');
function sudah() {
  wahyu.classList.remove('hidden');
  document.querySelector('.sudah').classList.remove('hidden');
  document.getElementById('sudah').classList.add('hidden');
  document.getElementById('belum').classList.add('hidden');
  setTimeout(() => {
    wahyu.nextElementSibling.nextElementSibling.classList.remove('hidden');
  }, 1000);
}
function belum() {
  wahyu.nextElementSibling.classList.remove('hidden');
  document.querySelector('.belum').classList.remove('hidden');
  document.getElementById('sudah').classList.add('hidden');
  document.getElementById('belum').classList.add('hidden');
  setTimeout(() => {
    wahyu.nextElementSibling.nextElementSibling.classList.remove('hidden');
  }, 1000);
}

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
    { x: 1 * gridSize6, y: 4 * gridSize6 },
    { x: 4 * gridSize6, y: 4 * gridSize6 },
  ];

  let points6 = [
    { x: 75, y: 25 },
    { x: 25, y: 100 },
    { x: 100, y: 100 },
  ];

  const labels6 = ['A', 'B', 'C'];
  const updateLabels6 = ["A'", "B'", "C'"]; // Label setelah segitiga digeser
  let isMoved6 = false;

  let dragPoint6 = null;

  // Target coordinates - target spesifik untuk setiap titik
  const targetPoint6 = [
    { x: 125, y: 25 },
    { x: 25, y: 175 },
    { x: 175, y: 175 },
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

  // Mouse and touch event handlers
  function handleMouseDown6(e) {
    e.preventDefault();
    const mousePos = getMousePos6(canvas6, e);
    dragPoint6 = getDragPoint6(mousePos);
  }

  function handleMouseMove6(e) {
    if (!dragPoint6) return;
    e.preventDefault();
    const mousePos = getMousePos6(canvas6, e);
    dragPoint6.x = mousePos.x;
    dragPoint6.y = mousePos.y;
    isMoved6 = true;
    drawInitialState6();
    document.getElementById('Check6').disabled = false;
  }

  function handleMouseUp6(e) {
    e.preventDefault();
    if (dragPoint6) {
      const snappedPos6 = snapToGrid6(dragPoint6);
      dragPoint6.x = snappedPos6.x;
      dragPoint6.y = snappedPos6.y;
    }
    dragPoint6 = null;
    drawInitialState6();
  }

  function getMousePos6(canvas6, evt) {
    const rect = canvas6.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function getDragPoint6(mousePos) {
    return points6.find(
      (point) => Math.sqrt((point.x - mousePos.x) ** 2 + (point.y - mousePos.y) ** 2) < 10
    );
  }

  function snapToGrid6(point) {
    return {
      x: Math.round(point.x / gridSize6) * gridSize6,
      y: Math.round(point.y / gridSize6) * gridSize6,
    };
  }

  // Function to check if each point is on its specific target
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
      document.getElementById('showaja').classList.remove('hidden');
      document.getElementById('nextMateri').classList.remove('hidden');
      document.getElementById('showNextDivButton').classList.add('hidden');
      setTimeout(() => {
        document.getElementById('chatbox').classList.remove('hidden');
        document.getElementById('notifnih').play();
      }, 1000);
      setTimeout(() => {
        document.querySelector('.rightAnswer').classList.add('hidden');
      }, 1000);
      document.getElementById('myAudio2').play();
      document.querySelectorAll('.checkboxPenulisan').forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
    } else {
      document.getElementById('salah6').classList.remove('hidden');
      document.getElementById('salah6').classList.add('inline-block');
      document.getElementById('benar6').classList.add('hidden');
      document.getElementById('myAudio').play();
    }
    checkButton.clicked = false;
  }

  document.getElementById('Check6').addEventListener('click', function () {
    this.clicked = true;
    updateNotification6();
  });

  document.getElementById('Check6').disabled = true;

  canvas6.addEventListener('mousedown', handleMouseDown6);
  canvas6.addEventListener('mousemove', handleMouseMove6);
  canvas6.addEventListener('mouseup', handleMouseUp6);

  canvas6.addEventListener('touchstart', handleMouseDown6);
  canvas6.addEventListener('touchmove', handleMouseMove6);
  canvas6.addEventListener('touchend', handleMouseUp6);

  drawInitialState6();
});

document.addEventListener('DOMContentLoaded', function () {
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');
  var gridSize3 = 25; // Ukuran grid
  var correctPoint3 = { x: 5, y: 3 }; // Titik yang benar
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
      drawLabel3(correctPoint3.x, correctPoint3.y, "A'");
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

const canvas = document.getElementById('canvas9');
const ctx = canvas.getContext('2d');
const gridSize = 23; // Set grid size (each square is 25x25 pixels)

// Adjusted triangle vertices for the first triangle (ABC)
const triangle1 = {
  A: { x: 115, y: 161 },
  B: { x: 207, y: 115 },
  C: { x: 161, y: 207 },
};

// New triangle vertices (DEF)
const triangle2 = {
  D: { x: 115, y: 161 },
  E: { x: 207, y: 115 },
  F: { x: 161, y: 207 },
};

const pointP = { x: 207, y: 207 }; // Aligned with the grid

// Function to draw the grid
function drawGrid() {
  ctx.strokeStyle = '#e5e7eb ';
  ctx.lineWidth = 1;
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

// Function to draw triangles, labels, and point P
function drawTriangle(triangle, labelSuffix = '') {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  drawGrid(); // Draw the grid

  // Draw point P
  ctx.beginPath();
  ctx.arc(pointP.x, pointP.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = '#fca5a5';
  ctx.fill();

  // Draw label for point P
  ctx.font = '11px Arial';
  ctx.fillStyle = '#fca5a5';
  ctx.fillText('P', pointP.x + 8, pointP.y + 8);

  // Draw dashed connecting lines between triangle vertices and point P
  ctx.setLineDash([5, 5]); // Set dashed line style
  ctx.strokeStyle = '#fdba74 ';
  ctx.lineWidth = 1.5;

  for (const vertex of Object.values(triangle)) {
    ctx.beginPath();
    ctx.moveTo(vertex.x, vertex.y);
    ctx.lineTo(pointP.x, pointP.y);
    ctx.stroke();
  }

  // Reset line dash for the triangle
  ctx.setLineDash([]);

  // Draw triangle ABC or DEF
  ctx.beginPath();
  ctx.moveTo(triangle.A.x, triangle.A.y);
  ctx.lineTo(triangle.B.x, triangle.B.y);
  ctx.lineTo(triangle.C.x, triangle.C.y);
  ctx.closePath();
  ctx.strokeStyle = '#4ade80';
  ctx.stroke();

  // Draw labels for triangle vertices
  ctx.font = '11px Arial';
  ctx.fillStyle = '#4ade80';
  ctx.fillText(`A${labelSuffix}`, triangle.A.x - 8, triangle.A.y - 5);
  ctx.fillText(`B${labelSuffix}`, triangle.B.x - 2, triangle.B.y - 5);
  ctx.fillText(`C${labelSuffix}`, triangle.C.x - 3, triangle.C.y + 13);
}

// Function to draw the second triangle with connecting points
function drawSecondTriangle(triangle) {
  // Draw triangle DEF
  ctx.beginPath();
  ctx.moveTo(triangle.D.x, triangle.D.y);
  ctx.lineTo(triangle.E.x, triangle.E.y);
  ctx.lineTo(triangle.F.x, triangle.F.y);
  ctx.closePath();
  ctx.strokeStyle = '#d1d5db '; // Different color for the second triangle
  ctx.stroke();

  // Draw labels for the second triangle vertices D, E, and F
  ctx.font = '11px Arial';
  ctx.fillStyle = '#d1d5db ';
  ctx.fillText('A', triangle.D.x - 8, triangle.D.y - 5);
  ctx.fillText('B', triangle.E.x - 2, triangle.E.y - 5);
  ctx.fillText('C', triangle.F.x - 3, triangle.F.y + 13);

  // Draw dashed connecting lines from each vertex of triangle DEF to point P
  ctx.setLineDash([5, 5]); // Set dashed line style
  ctx.strokeStyle = '#d1d5db '; // Keep the same color for dashed lines

  for (const vertex of Object.values(triangle)) {
    ctx.beginPath();
    ctx.moveTo(vertex.x, vertex.y);
    ctx.lineTo(pointP.x, pointP.y);
    ctx.stroke();
  }

  // Reset line dash
  ctx.setLineDash([]);
}

// Function for dilation animation
function animateDilation(triangle, pointP, scale, duration = 1000) {
  const startTime = performance.now();
  const initialTriangle = { ...triangle };

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1

    // Linear interpolation for smooth scaling
    const currentScale = 1 + (scale - 1) * progress;
    const dilatedTriangle = dilate(initialTriangle, pointP, currentScale);
    const labelSuffix = progress === 1 ? "'" : ''; // Add suffix once animation completes

    drawTriangle(dilatedTriangle, labelSuffix);
    drawSecondTriangle(triangle2); // Draw the second triangle

    if (progress < 1) {
      requestAnimationFrame(step); // Continue animation
    }
  }

  requestAnimationFrame(step); // Start the animation
}

// Function for dilation calculation
function dilate(triangle, pointP, scale) {
  return {
    A: {
      x: pointP.x + (triangle.A.x - pointP.x) * scale,
      y: pointP.y + (triangle.A.y - pointP.y) * scale,
    },
    B: {
      x: pointP.x + (triangle.B.x - pointP.x) * scale,
      y: pointP.y + (triangle.B.y - pointP.y) * scale,
    },
    C: {
      x: pointP.x + (triangle.C.x - pointP.x) * scale,
      y: pointP.y + (triangle.C.y - pointP.y) * scale,
    },
  };
}

// Initial drawing
drawSecondTriangle(triangle2); // Draw second triangle first
drawTriangle(triangle1); // Then draw the first triangle on top

// Handle dilation when button is clicked
document.getElementById('translate-btn').addEventListener('click', function () {
  const scaleOption = document.getElementById('selectSkala').value;

  if (scaleOption === '') {
    alert('Pilih skala terlebih dahulu!');
    return;
  }

  let scale;
  if (scaleOption === 'option1') {
    scale = 0;
  } else if (scaleOption === 'option2') {
    scale = 0.5;
  } else if (scaleOption === 'option3') {
    scale = 1;
  } else if (scaleOption === 'option4') {
    scale = 2;
  }

  // Animate reset to original position for 1 second
  drawTriangle(triangle1); // Draw triangle at original position
  drawSecondTriangle(triangle2); // Draw second triangle at original position
  setTimeout(() => {
    animateDilation(triangle1, pointP, scale); // Animate dilation with selected scale after 1 second
  }, 1000); // 1000ms = 1 second delay
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
    const checkboxesJarakTranslasi = document.querySelectorAll('.checkboxArahTranslasi');

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

document.querySelectorAll('.question-container3').forEach((container, index3) => {
  const options3 = container.querySelectorAll(`.pilihan3`);
  const checkAnswerButton3 = container.querySelector(`.cekJawaban3`);
  const resultDiv3 = container.querySelector(`.jadiBenar3`);
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
    const correctAnswer3 = container.querySelector(`.benar3 .text-orange-300`).textContent.trim(); // Get correct answer letter
    const rightAnswer3 = document.querySelector('.rightAnswer');
    const wrongAnswer3 = document.querySelector('.wrongAnswer');
    const checkboxesJarakTranslasi3 = document.querySelectorAll('.checkboxPenulisan');

    if (isCorrect3) {
      resultDiv3.innerHTML = 'Jawaban benar!';
      resultDiv3.classList.remove('hidden');
      resultDiv3.style.color = 'green';
      rightAnswer3.classList.remove('hidden');
      nextMateri.classList.remove('hidden');
      checkboxesJarakTranslasi3.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      setTimeout(() => {
        rightAnswer3.classList.add('hidden');
      }, 1000);
      const audioElement3 = document.getElementById(`myAudio2`);
      audioElement3.play();
    } else {
      resultDiv3.innerHTML = `Jawaban yang benar adalah ${correctAnswer3}!`;
      resultDiv3.classList.remove('hidden');
      resultDiv3.style.color = 'red';
      wrongAnswer3.classList.remove('hidden');
      nextMateri.classList.remove('hidden');
      checkboxesJarakTranslasi3.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = false;
      });
      setTimeout(() => {
        wrongAnswer3.classList.add('hidden');
      }, 1000);

      const audioElement3 = document.getElementById('myAudio');
      audioElement3.play();
    }

    answerChecked3 = true; // Disable further checking
    checkAnswerButton3.classList.add('hidden'); // Hide the button after checking
  });
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

const checkboxJarakTranslasi = document.querySelectorAll('.checkboxJarakTranslasi');
const akhirJarakTranslasi = document.getElementById('akhirJarakTranslasi');
const observerJarakTranslasi = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkboxJarakTranslasi.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = false;
        });
        nextMateri.classList.remove('hidden');
      }
    });
  },
  { threshold: 1.0 }
);

observerJarakTranslasi.observe(akhirJarakTranslasi);

document.getElementById('closeChatbox').addEventListener('click', () => {
  document.getElementById('chatbox').classList.add('hidden');
});
