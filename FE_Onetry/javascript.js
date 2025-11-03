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