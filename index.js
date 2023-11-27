document.getElementById("generateBtn").addEventListener("click", generateIP);

function generateIP() {
  var ipResult = document.getElementById("ipResult");
  var ip = "";

  for (var i = 0; i < 4; i++) {
    ip += Math.floor(Math.random() * 256) + ".";
  }

  ip = ip.slice(0, -1); // Eliminar el último punto

  ipResult.textContent = "IP generada: " + ip;
}



