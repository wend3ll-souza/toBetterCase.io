const input = document.getElementById('inputToLower');
const show = document.getElementById('show')

addEventListener("click", (event) => {
    if(event.target.id === "Lower"){
      show.innerText = input.value.toLowerCase()
    }
})