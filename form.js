const form = document.getElementById('quizForm');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  loader.style.display = "flex"; // show loader

  try {
    const formData = new FormData();
    formData.append("entry.791077472", form.teamName.value);
    formData.append("entry.542885688", form.participant1.value);
    formData.append("entry.896551596", form.participant2.value);
    formData.append("entry.876371631", form.contact.value);
    formData.append("entry.34988263",  form.whatsapp.value);
    formData.append("entry.916247435", form.email.value);

    let response = await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfopFhAehGbr0VB5tiSHdud2dZlKJyoaAaZJAyp_Rw_a5mNGQ/formResponse", 
      {
        method: "POST",
        body: formData,
        mode: "no-cors"
      }
    );

    loader.style.display = "none"; // hide loader
    alert("✅ Your response has been submitted!");
    form.reset();

  } catch (error) {
    loader.style.display = "none"; // hide loader
    alert("❌ Something went wrong. Please try again!");
  }
});
