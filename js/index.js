const loginButton = document.getElementById('login');
const closeButton = document.getElementById('close');
const modalContainer = document.getElementById('login-modal');

loginButton.onclick = openModal;
closeButton.onclick = closeModal;
modalContainer.onclick = closeModal;

function openModal(event) {
    event.preventDefault(); //this is only on a tag
    document.getElementById('login-modal').classList.add('modal-open');
}


function closeModal() {
    document.getElementById('login-modal').classList.remove('modal-open');
}

