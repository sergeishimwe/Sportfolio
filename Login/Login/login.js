// export function double(n){
//       return n*2;
//      }
    // login
    const loginForm = document.querySelector("#form")
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const email = loginForm.email.value;
      const password = loginForm.password.value
      let loginCred = {
        email: email,
        password: password
      }
      fetch('https://smsj-mentestapi.herokuapp.com/api/auth/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginCred)
      })
        .then(response => response.json())  
    .then( res => {
      console.log(res);
      // removePreAddedbutton();
      localStorage.setItem('status', 'logout');
      if (res.response == "Incorrect Email" || res.response == "Incorrect password"){
        LoginMessage("The email / password does not match, try again");
      }
      let response = `Bearer ${res.token}`;
        localStorage.setItem('token', response);
        localStorage.setItem('logout',res.userCred.email);
      if (loginCred.email == res.userCred.email){
      localStorage.setItem('status', 'login');
                   startAdminPage();
        }
        // localStorage.removeItem("token");
    } );
    });
    function startAdminPage() {
      window.location.href = '/admin/posts/manager posts/managerpost.html';
      // window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload')
    }
    
    function LoginMessage(errorMessage){
      let form = document.getElementById("form");
      let inputEl = document.createElement("div")
      let inSpan = document.createElement("span")
      inputEl.setAttribute("class", "inputbox")
      inSpan.appendChild(document.createTextNode(errorMessage))
      inputEl.appendChild(inSpan);
      form.appendChild(inputEl)
    }
    
    function removePreAddedbutton(){
      let addedData = document.getElementById("ErrorMessage");
      addedData.remove();
    }
    
      // ------ This is what you have to add --------
      console.log(localStorage.getItem('status'))
      // console.log(localStorage.getItem('token'))
      // -------------------------------------------