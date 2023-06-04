// Fungsi untuk mengirim nama ke sessionStorage dan menampilkan pesan selamat datang
function submitName() {
  var name = document.getElementById("nameInput").value;
  sessionStorage.setItem("name", name);
  document.getElementById("welcomeMessage").textContent = "Hi, " + name + "!";
  document.getElementById("welcomeOverlay").style.display = "none";
}

// Cek apakah nama sudah tersimpan di sessionStorage saat halaman pertama dimuat
window.addEventListener("DOMContentLoaded", function() {
  if (sessionStorage.getItem("name")) {
    var name = sessionStorage.getItem("name");
    document.getElementById("welcomeMessage").textContent = "Hi, " + name + "!";
    document.getElementById("welcomeOverlay").style.display = "none";
  } else {
    document.getElementById("welcomeOverlay").style.display = "block";
  }
});

// Fungsi untuk menghapus data nama dari sessionStorage saat halaman ditutup
window.addEventListener("beforeunload", function() {
  if (!sessionStorage.getItem("name")) {
    sessionStorage.removeItem("name");
  }
});
