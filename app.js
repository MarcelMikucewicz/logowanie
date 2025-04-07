async function login() {
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value
 
    const baseURL = "http://localhost:3000"
    const url = `${baseURL}/logowanie/${login}/${password}`
 
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    console.log(data)
}
async function rejestracja() {
    const login = document.getElementById("login").value
    const password = document.getElementById("password").value
    const password2 = document.getElementById("password2").value
 
    const baseURL = "http://localhost:3000"
    const url = `${baseURL}/rejestracja/${login}/${password}`
    if(password=password2){
        const data = await fetch(url)
        const response = await data.json()
        console.log(response);
        console.log(data)
    }else{
        alert("Hasła nie są takie same")
    }
 
    
}