document.getElementById("sendWhatsapp").addEventListener("click", function() {
            const phoneNumber = "+5522999225626"; // Your phone number
            const whatsappURL = `https://wa.me/${phoneNumber}`;
            window.open(whatsappURL, "_blank");
        });