document.addEventListener('DOMContentLoaded', () => {
  const volumeForm = document.getElementById('volumeForm');
  const radiusInput = document.getElementById('radius');
  const heightInput = document.getElementById('height');
  const unitSelect = document.getElementById('unit');
  const outputDiv = document.getElementById('output');

  volumeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let r = parseFloat(radiusInput.value);
    let h = parseFloat(heightInput.value);
    const unit = unitSelect.value;

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
      outputDiv.textContent = 'Please enter valid positive numbers.';
      return;
    }

    // หากผู้ใช้เลือกหน่วย mm ให้แปลงค่าเป็น cm โดยการหารด้วย 10
    if (unit === 'mm') {
      r /= 10;
      h /= 10;
    }

    // คำนวณปริมาตร V = π * r^2 * h
    const volume = Math.PI * Math.pow(r, 2) * h;

    // ปัดเศษทศนิยมให้อยู่ในตำแหน่งไม่เกิน 2 ตำแหน่ง (Nearest hundredth)
    const roundedVolume = Math.round(volume * 100) / 100;

    // แสดงผลลัพธ์
    outputDiv.innerHTML = `Volume = ${roundedVolume} cm<sup>3</sup>`;
  });
});