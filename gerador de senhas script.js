let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passworld = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWYXZ123456789!@#$";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }

    containerPassword.classList.remove("hide")
    passworld.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}



const currenTime = () => {
    const el = document.querySelector("h2");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh <10 ? `0${hh}` : hh;
    mm = mm <10 ? `0${hh}` : mm;
    ss = ss <10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time;


}

currenTime();
setInterval(currenTime, 1000);