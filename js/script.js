function hitungluas() {
  // Get the input values
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);

  // Check if the input is valid
  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    document.getElementById('result-1').innerHTML = 'Please enter valid positive numbers for both base and height.';
    return;
  }

  // Calculate the area
  const area = 0.5 * alas * tinggi;

  // Display the result
  document.getElementById('result-1').innerHTML = 'Area: ' + area.toFixed(2);
}

function hitungkeliling() {
  // Get the input values
  const sisi1 = parseFloat(document.getElementById('sisi1').value);
  const sisi2 = parseFloat(document.getElementById('sisi2').value);
  const sisi3 = parseFloat(document.getElementById('sisi3').value);

  // Check if the input is valid
  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
    document.getElementById('result-2').innerHTML = 'Please enter valid positive numbers for all sides.';
    return;
  }

  // Calculate the perimeter
  var perimeter = sisi1 + sisi2 + sisi3;

  // Display the result-2
  document.getElementById('result-2').innerHTML = 'Perimeter: ' + perimeter.toFixed(2);
}
