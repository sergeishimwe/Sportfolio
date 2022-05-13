// Using fetch api

fetch("https://smsj-mentestapi.herokuapp.com/api/posts", {
  method: "GET",
  credentials: 'same-origin',
  mode: 'cors',
  headers: {
    "Content-type": "application/json",
  },
})
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    // let arr_id = [];
    for (let g = 0; g < data.length; g++) {
      //Calling the generate table function to add the fetched data
      // into the DOM
      generateBlogCard(data[g]["title"], data[g]["body"],
        data[g]["createdAt"], data[g]["_id"]);
    }
  })


//   FUNCTION TO ADD THE BLOG DETAILS AFTER HITTING READ MORE
function generateBlogCard(title, body,date,id) {

  let blogDiv = document.querySelector('.blog');
  let mainDiv = document.querySelector('.row1')
  let itemDiv = document.createElement("div")
  itemDiv.className = "item"

  let imgDiv = document.createElement("div")
  imgDiv.className = "item_img"
  let image = document.createElement("img")
  image.setAttribute('src', 'blog1.jpg')
  imgDiv.appendChild(image)

  let itemContentDiv = document.createElement("div")
  itemContentDiv.className = "item-content"
  let spanEl = document.createElement("span")
  let faSpan = document.createElement("span")
  let iconEl = document.createElement("i")
  iconEl.className = "fa-solid"
  iconEl.className = "fa-message"
  faSpan.appendChild(iconEl)
  // headingDiv.className = "heading"
  // spanEl.appendChild(document.createTextNode(`june 20,2022;admin`))
  // faSpan.appendChild(document.createTextNode(`3`))
  // headDiv.appendChild(headingDiv)
  let h2El = document.createElement("h2")
  let pEl = document.createElement("p")
  let btnEl = document.createElement("button")
  btnEl.setAttribute("type", "button")
  btnEl.className = "btn";
  pEl.className = "text";
  h2El.appendChild(document.createTextNode(`${title}`));
  pEl.appendChild(document.createTextNode(`${body}`));

  btnEl.appendChild(document.createTextNode(`read more`))
  itemContentDiv.appendChild(spanEl)
  itemContentDiv.appendChild(faSpan)
  itemContentDiv.appendChild(h2El)
  itemContentDiv.appendChild(pEl)
  itemContentDiv.appendChild(btnEl)
  itemDiv.appendChild(imgDiv);

  itemDiv.appendChild(imgDiv);
  itemDiv.appendChild(itemContentDiv);
  mainDiv.appendChild(itemDiv);
  blogDiv.appendChild(mainDiv);

  // TO CREATE THE FOOTER
}



// }