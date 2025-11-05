console.log("JavaScript sudah terhubung!");
alert("Selamat datang di 1Day_OneProgres!");

const buttons = document.querySelectorAll('.nav-btn');
const content = document.getElementById('content');

buttons.forEach(btn => {
    btn.addEventListener('click',()=>{
        buttons.forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');

        const label = btn.textContent.trim();
        content.textContent = 'You cliked on "${label}" page!';

    })
})
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 300);
    });
});
