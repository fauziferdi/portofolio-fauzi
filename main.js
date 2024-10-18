const form = document.querySelector(".form-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    to: "fauziferdiansyahindo@gmail.com",
    name: document.getElementById("nama").value,
    subject: document.getElementById("subject").value,
    text: document.getElementById("pesan").value,
  };

  console.log(formData);
  fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
    method: "POST",
    headers: {
      "x-api-key": "RJS1-202401",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      form.reset();
      Swal.fire({
        icon: "success",
        title: "Form Berhasil Terikirim",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim",
        text: "Maaf Pesan anda tidak Terkirim Mungkin Ada Kesalah Dalam Server",
      });
    });
});
