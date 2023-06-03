function submitName() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("welcomeMessage").textContent = "Hi, " + name + "!";
    document.getElementById("welcomeOverlay").style.display = "none";
  }
