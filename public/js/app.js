const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
// messageOne.textContent = 'from Javascript'
// messageTwo.textContent = 'from Javascript2'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loadingggg...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    fetch('/weather/?location='+ location ).then((response) =>{
    response.json().then((data) => {
        if(data.error){
           
         messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            // messageThree.textContent = data.status
            // messageThree.innerHTML = "<h1>" + data.status + "</h1>"
            messageThree.innerHTML = "<img class='weather-logo' src='../img/weatherIcon/" + data.status + ".svg '>"
            console.log(data.status)
        }
    })
})
})