const materi = document.getElementById('materi');
const canvas = document.getElementById('interactiveGridCanvas');
const context = canvas.getContext('2d');
const gridSpacing = 25;

let pointB = { x: 50, y: 50, label: 'A' };
let activePoint = null;

// Function to draw the grid
function drawGrid() {
  context.strokeStyle = '#e5e7eb';
  for (let x = 0; x <= canvas.width; x += gridSpacing) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }
  for (let y = 0; y <= canvas.height; y += gridSpacing) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }
}

// Function to draw the point
function renderPoint(point) {
  context.font = 'bold 13px Arial'; // Set the font size to make it larger
  context.beginPath();
  context.arc(point.x, point.y, 5, 0, 2 * Math.PI);
  context.fillStyle = '#2AC32A';
  context.fill();
  context.fillText(point.label, point.x + 3, point.y - 7); // Adjust the label position
  context.stroke();
}

// Function to clear the canvas and redraw everything
function renderScene() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  renderPoint(pointB);
}

// Utility function to get mouse position relative to canvas
function getMousePosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

// Snap point to the nearest grid intersection
function snapToGrid(point) {
  return {
    x: Math.round(point.x / gridSpacing) * gridSpacing,
    y: Math.round(point.y / gridSpacing) * gridSpacing,
  };
}

// Function to create and show the div with id 'titikBayangan'
function showTitikBayangan() {
  const div = document.getElementById('titikBayangan');
  // Menampilkan elemen
  div.style.display = 'block';

  setTimeout(() => {
    const jadiTitik = document.getElementById('jadiTitik');
    jadiTitik.classList.remove('hidden');
    jadiTitik.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      materi.nextElementSibling.classList.remove('hidden');

      materi.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
      window.scrollBy({ top: 200, behavior: 'smooth' });
    }, 1000); // waktu tambahan untuk animasi opacity
  }, 1000);
}

// Event listeners for drag and drop functionality
canvas.addEventListener('mousedown', (e) => {
  const mousePosition = getMousePosition(canvas, e);
  if (Math.sqrt((mousePosition.x - pointB.x) ** 2 + (mousePosition.y - pointB.y) ** 2) < 10) {
    activePoint = pointB;
    canvas.style.cursor = 'grabbing'; // Change cursor to grabbing when point is being dragged
  }
});

canvas.addEventListener('mousemove', (e) => {
  const mousePosition = getMousePosition(canvas, e);

  if (activePoint) {
    activePoint.x = mousePosition.x;
    activePoint.y = mousePosition.y;
    renderScene();
  } else {
    // Change cursor to grab if near the point, else revert to default
    if (Math.sqrt((mousePosition.x - pointB.x) ** 2 + (mousePosition.y - pointB.y) ** 2) < 10) {
      canvas.style.cursor = 'grab';
    } else {
      canvas.style.cursor = 'default';
    }
  }
});

canvas.addEventListener('mouseup', () => {
  if (activePoint) {
    const snappedPosition = snapToGrid(activePoint);
    activePoint.x = snappedPosition.x;
    activePoint.y = snappedPosition.y;
    activePoint.label = "A'";
    activePoint = null;
    renderScene();
    canvas.style.cursor = 'default'; // Revert cursor to default after dragging ends
    showTitikBayangan(); // Call the function to show the div
  }
});

// Event listeners for touch events
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousemove', {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener('touchend', (e) => {
  const mouseEvent = new MouseEvent('mouseup', {});
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener('mousedown', (e) => {
  const mousePosition = getMousePosition(canvas, e);

  // Periksa apakah titik B (A) yang diklik
  if (Math.sqrt((mousePosition.x - pointB.x) ** 2 + (mousePosition.y - pointB.y) ** 2) < 10) {
    activePoint = pointB;
    canvas.style.cursor = 'grabbing'; // Ubah kursor menjadi grabbing

    // Sembunyikan elemen dengan kelas 'cursorNih'
    const cursorNihElement = document.querySelector('.cursorNih');
    if (cursorNihElement) {
      cursorNihElement.classList.add('hidden'); // Tambahkan kelas 'hidden'
    }
  }
});

// Initial drawing
renderScene();

//Umum
const displayBenar = document.getElementById('benar');
const perubahanBenar = document.getElementById('perubahanBenar');

function playImg3() {
  document.getElementById('persegiABCD').classList.remove('hidden');
  document.getElementById('persegikeABCD').classList.remove('border-green-500');
  document.getElementById('persegikeABCD').classList.add('border-gray-300', 'text-secondary');
  const playImg3 = document.getElementById('playImg3');
  playImg3.classList.add('opacity-20', 'cursor-not-allowed');
  playImg3.classList.remove('cursor-pointer');
  setTimeout(() => {
    const sadarkah = document.getElementById('sadarkah');
    sadarkah.classList.remove('hidden');
    sadarkah.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      materi.nextElementSibling.nextElementSibling.classList.remove('hidden');
      materi.nextElementSibling.nextElementSibling.scrollIntoView({ behavior: 'smooth' });

      window.scrollBy({ top: 200, behavior: 'smooth' });
    }, 1000);
  }, 5000);
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
  document.getElementById('tombolNext').setAttribute('href', 'page4.html');
  checkCheckbox();
  setTimeout(() => {
    benarElement.classList.add('hidden');
    benarElement.classList.add('opacity-0');
    const kesimpulanPage3 = document.getElementById('kesimpulanPage3');
    kesimpulanPage3.classList.remove('hidden');
    kesimpulanPage3.scrollIntoView({
      behavior: 'smooth',
    });
    setTimeout(() => {
      document.getElementById('klikNext').classList.remove('hidden');
    }, 1000);
  }, 1000);
});
