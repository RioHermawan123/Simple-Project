const kodeSelect = document.getElementById("kodeBarang");
const namaSelect = document.getElementById("namaBarang");
const form = document.getElementById("googleForm");

function populateOptions() {
  kodeSelect.length = 1; // keep placeholder
  namaSelect.length = 1;

  for (const kode in kodeNamaMap) {
    const opt = document.createElement("option");
    opt.value = kode;
    opt.textContent = kode;
    kodeSelect.appendChild(opt);
  }

  for (const nama in namaKodeMap) {
    const opt = document.createElement("option");
    opt.value = nama;
    opt.textContent = nama;
    namaSelect.appendChild(opt);
  }
}

$(document).ready(function () {
  populateOptions();

  $(".select2").select2({
    selectOnClose: true,
    width: "100%",
  });

  let isSyncing = false;

  $("#kodeBarang").on("change", function () {
    if (isSyncing) return;
    isSyncing = true;
    const kode = this.value;
    const nama = kodeNamaMap[kode];
    if (nama) {
      $("#namaBarang").val(nama).trigger("change");
    }
    setTimeout(() => {
      $("#namaBarang, #kodeBarang").select2("close");
      isSyncing = false;
    }, 0);
  });

  $("#namaBarang").on("change", function () {
    if (isSyncing) return;
    isSyncing = true;
    const nama = this.value;
    const kode = namaKodeMap[nama];
    if (kode) {
      $("#kodeBarang").val(kode).trigger("change");
    }
    setTimeout(() => {
      $("#kodeBarang, #namaBarang").select2("close");
      $("#qty").focus();
      isSyncing = false;
    }, 0);
  });
});

function validateForm() {
  const inputs = form.querySelectorAll("input[required], select[required]");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Mohon isi semua field!");
      input.focus();
      return false;
    }
  }
  return true;
}

const iframe = document.querySelector('iframe[name="hidden_iframe"]');
let submitted = false;

iframe.addEventListener("load", () => {
  if (submitted) {
    alert("✅ Data berhasil dikirim!");
    form.reset();
    $(".select2").val(null).trigger("change");
    submitted = false;
  }
});

form.addEventListener("submit", () => {
  submitted = true;
});
