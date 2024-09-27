function redirecionarcontato(){
    window.location.href = "https://wa.me/+5583999849151?text=Ol%C3%A1";
}

document.getElementById("btncontato").addEventListener("click",redirecionarcontato);

function redirecionargit(){
    window.location.href = "https://github.com/BarrosPL";
}

document.getElementById("btntrabalho").addEventListener("click",redirecionargit);

document.getElementById('btnhome').addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnskills').addEventListener('click', () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnprojetos').addEventListener('click', () => {
    document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnsobre').addEventListener('click', () => {
    document.getElementById('career').scrollIntoView({ behavior: 'smooth' });
});