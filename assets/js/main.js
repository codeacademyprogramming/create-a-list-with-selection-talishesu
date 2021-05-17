// const button = document.getElementById('sidebar-opener');
// const closeIcon = document.getElementById('sidebar-closer');
// const sidebar = document.querySelector('.sidebar');

// button.onclick = function () {
//     sidebar.classList.add('open');
//     // sidebar.style.left = '0';
// }

// closeIcon.onclick = () => {
//     sidebar.classList.remove('open');
//     // sidebar.style.left = '-200px';
// }

// const body = document.body;

// body.addEventListener('paste', (e)=> {
//     console.log(e.clipboardData.getData('text/plain'));
//     e.clipboardData.setData()
// });

// const button = document.getElementsByTagName('button')[0];
// const element = document.getElementById('element');

// button.onclick = function () {
//     console.log('clicked to button');
// }

// element.onclick = function () {
//     console.log('clicked to element');
// }

// const firstnameInput = document.getElementById("firstname");
// const firstnameViewer = document.getElementById("firstname-viewer");

// firstnameInput.addEventListener('input', (e) => {
//     firstnameViewer.innerText = e.target.value;
// });

// firstnameInput.addEventListener("keydown", (e) => {
//   if (e.key === 'Enter') {
//     if (!e.target.value) {
//       firstnameViewer.innerText = "Please enter a value";
//       firstnameViewer.classList.add("alert-danger");
//       firstnameViewer.classList.remove("d-none", "alert-success");
//     } else {
//       firstnameViewer.innerText = e.target.value;
//       firstnameViewer.classList.add("alert-success");
//       firstnameViewer.classList.remove("d-none", "alert-danger");
//     }
//   }
// });

// firstnameInput.onkeydown = function (e) {
//     console.log(e.target.value);
// }

const firstnameInput = document.getElementById("firstname");
const passwordShower = document.getElementById('password-shower');


passwordShower.onclick = () => {
    if(firstnameInput.getAttribute('type') === 'password') {
        firstnameInput.setAttribute('type', 'text');
        passwordShower.className = 'bi bi-eye-slash-fill eye-icon';
    } else {
        firstnameInput.setAttribute('type', 'password');
        passwordShower.className = 'bi bi-eye-fill eye-icon';
    }
}

