// https://www.omnicalculator.com/other/edpi

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const eDPIRadio = document.getElementById('eDPIRadio');
const DPIRadio = document.getElementById('DPIRadio');
const sensitivityRadio = document.getElementById('sensitivityRadio');

let eDPI;
let DPI = v1;
let sensitivity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

eDPIRadio.addEventListener('click', function() {
  variable1.textContent = 'DPI';
  variable2.textContent = 'Sensitivity';
  DPI = v1;
  sensitivity = v2;
  result.textContent = '';
});

DPIRadio.addEventListener('click', function() {
  variable1.textContent = 'eDPI';
  variable2.textContent = 'Sensitivity';
  eDPI = v1;
  sensitivity = v2;
  result.textContent = '';
});

sensitivityRadio.addEventListener('click', function() {
  variable1.textContent = 'eDPI';
  variable2.textContent = 'DPI';
  eDPI = v1;
  DPI = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(eDPIRadio.checked)
    result.textContent = `eDPI = ${computeeDPI().toFixed(2)}`;

  else if(DPIRadio.checked)
    result.textContent = `DPI = ${computeDPI().toFixed(2)}`;

  else if(sensitivityRadio.checked)
    result.textContent = `Sensitivity = ${computesensitivity().toFixed(2)}`;
})

// calculation

function computeeDPI() {
  return Number(DPI.value) * Number(sensitivity.value);
}

function computeDPI() {
  return Number(eDPI.value) / Number(sensitivity.value);
}

function computesensitivity() {
  return Number(eDPI.value) / Number(DPI.value);
}