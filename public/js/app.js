console.log('running client side java script')
    /*fetch('http://localhost:3000/weather?address=japan').then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })
    */
const searchform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

searchform.addEventListener('submit', (e) => {
    e.preventDefault()
    msg1.textContent = "loading...."
    msg2.textContent = ""
    const location = search.value;
    fetch('/weather?address=' + location + '').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.place
                msg2.textContent = data.result
                console.log(data.result)
            }

        })
    })

})