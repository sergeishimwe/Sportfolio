const logoutForm = document.querySelector("#logout")
logoutForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("i am clicked now")
  localStorage.setItem('status', 'logout');
    localStorage.setItem('token', 'logout');
    goToTheLogin();
  }
)
let state = localStorage.getItem('status');
if (state == 'logout'){
    goToTheLogin();
}

function goToTheLogin(){
    window.location.href="../../../Login/Login/login.html";
  }

// function startAdminPage() {
//   window.location.href = '../../admin/posts/index.html';
//   window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload')
// }