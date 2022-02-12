const { response } = require("express");

const loginbutton = document.getElementById('submit')


loginbutton.addEventListener('click', async (e) => {


    event.preventDefault();

    const userName = document.getElementById('loginUser').ariaValueMax.trim()
    const password


    if(userName && password) {

        const response = await fetch ('/api/user/create/login', {

            method: 'POST',
            body: JSON.stringify({
                user_name: userName,
                password: password
            }),

            headers: {'Content-Type': 'application/json'}


        })
    }

 if(response.ok){
     document.location.replace('/homepage')
 } else {
     alert('')
 }




})