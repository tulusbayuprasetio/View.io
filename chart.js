 fetch("data/harga.json")
  .then(response => response.json())
  .then(data => {
    const labels = data.map(item => item.tanggal);
    const beli = data.map(item => item.beli);
    const jual = data.map(item => item.jual);

    const ctx = document.getElementById("hargaChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Harga Beli",
            data: beli,
            borderColor: "green",
            fill: false
          },
          {
            label: "Harga Jual",
            data: jual,
            borderColor: "red",
            fill: false
          }
        ]
      }
    });
  });
