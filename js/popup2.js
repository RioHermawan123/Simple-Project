// Cek apakah nama sudah tersimpan di sessionStorage saat halaman ke-2 dimuat
window.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("name")) {
      var name = sessionStorage.getItem("name");
      document.getElementById("welcomeMessage").textContent = "Wanna try some code, " + name + "?";
      document.getElementById("welcomeOverlay").style.display = "none";
    } else {
      document.getElementById("welcomeOverlay").style.display = "block";
    }
  });
  
