
 const addPost = document.querySelector("#studentForm")
 const textL = document.querySelector("#detail")
 
 addPost.addEventListener("submit", (e) => {
     e.preventDefault()
   fetch(`https://smsj-mentestapi.herokuapp.com/api/posts`, {
     method: "POST",
     credentials: 'same-origin',
     mode: 'cors',
     headers: {
         "Content-type": "application/json",
         "authorization": localStorage.getItem("token")
     },
     body: JSON.stringify({
       title:  addPost.title.value,
       body: textL.value,
       date: "1/1/2022"
      })
   })
   .then((response) => response.json())
       .then((data)=>{
         window.location.href = '../manager posts/managerpost.html';
      console.log(data)
       })
   })