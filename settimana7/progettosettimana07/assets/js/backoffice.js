const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

const endpoint = selectedId
  ? "https://striveschool-api.herokuapp.com/api/product/" + selectedId
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = selectedId ? "PUT" : "POST";

const handleValidate = () => {
  const form = document.querySelector("form");
  form.classList.add("validated");
};

window.onload = async () => {
  if (selectedId) {
    document.getElementById("subtitle").innerText = " — Modifica prodotto";

    try {
      const resp = await fetch(endpoint);
      const appointmentData = await resp.json();
      const { name, description, price } = appointmentData;

      document.getElementById("name").value = name;
      document.getElementById("description").value = description;
      document.getElementById("price").value = price;

      const sbmtBtn = document.querySelector("button[type='submit']");
      sbmtBtn.classList.remove("btn-primary");
      sbmtBtn.classList.add("btn-success");
      sbmtBtn.innerText = "Modifica";
    } catch (error) {
      console.log(error);
    }
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(document.getElementById("name").value);
  const newAppointment = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    brand: document.getElementById("brand-name").value,
    imageUrl: document.getElementById("imageUrl").value,
  };

  try {
    isLoading(true);
    const resp = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        method,
        body: JSON.stringify(newAppointment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiOTg4Zjc0MDAwMTQyODc0MzEiLCJpYXQiOjE2ODM4NzQ3NDUsImV4cCI6MTY4NTA4NDM0NX0.ld4MBB_Xp-TruK9HHPUuAF60fs2LP74K3PzrK7X_xpU",
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      const newAppObj = await resp.json();

      if (selectedId) {
        alert(
          "Prodotto con l'id " + newAppObj._id + ", modificato con successo"
        );
      } else {
        alert("Prodotto con l'id " + newAppObj._id + ", creato con successo");
      }
    } else {
      throw new Error("La richiesta non è andata a buon fine");
    }
  } catch (error) {
    alert(error);
  } finally {
    isLoading(false);
  }
};

const isLoading = (loadingState) => {
  const spinner = document.querySelector(".spinner-border");
  if (loadingState) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

async function cancellaDati() {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/product/' + _id, {
        method: 'DELETE',
        headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiOTg4Zjc0MDAwMTQyODc0MzEiLCJpYXQiOjE2ODM4NzQ3NDUsImV4cCI6MTY4NTA4NDM0NX0.ld4MBB_Xp-TruK9HHPUuAF60fs2LP74K3PzrK7X_xpU",
            "Content-Type": "application/json",
          },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  