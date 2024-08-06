document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();


    const firstName = document.getElementById('F_name').value.trim();
    const lastName = document.getElementById('L_name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const password = document.getElementById('Pass').value.trim();


    let message = '';
    if (firstName === '' || lastName === '' || email === '' || password === '') {
        message = 'Please fill in all fields.';
    } else {
        message = 'Sign Up Success!';
    }


    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
});


document.getElementsByClassName('close')[0].addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 5000); // Remove star after its animation duration
}

setInterval(createStar, 200); // Create a new star every 200ms