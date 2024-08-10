function submitLogin() {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username == 'mario' &&  password == '1234') {
        
       console.log("you've logged in");
       window.location.href = 'main.html'; 
       return true;     
    }

}

function submitRegister(){
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const repeatPassword = document.getElementById('repeat-password').value.trim();
    
}