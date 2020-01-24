const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
// messageOne.textContent = 'from Javascript'
// messageTwo.textContent = 'from Javascript2'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loadingggg...'
    messageTwo.textContent = ''
    fetch('/weather/?location='+ location ).then((response) =>{
    response.json().then((data) => {
        if(data.error){
           
         messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})