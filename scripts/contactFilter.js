function search_ramal() {
    let input = document.getElementById("search").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let rows = document.getElementById("data").getElementsByTagName("tr");
  
    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if (!rowText.includes(input)) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "table-row";
      }
    }
  }
  