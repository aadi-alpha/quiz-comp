 const form = document.getElementById('quizForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Form Data Mapping Google Form ke hidden "entry.xxxxxxx" fields ke sath
      const formData = new FormData();
      formData.append("entry.791077472", form.teamName.value);     // Team Name
      formData.append("entry.542885688", form.participant1.value); // Participant 1
      formData.append("entry.896551596", form.participant2.value); // Participant 2
      formData.append("entry.876371631", form.contact.value);      // Contact
      formData.append("entry.34988263",  form.whatsapp.value);     // WhatsApp
      formData.append("entry.916247435", form.email.value);        // Email

      // POST request Google Form ke backend me
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfopFhAehGbr0VB5tiSHdud2dZlKJyoaAaZJAyp_Rw_a5mNGQ/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors"   // CORS avoid karne ke liye
      });

      alert("✅ Your response has been submitted!");
      form.reset();
    });