
var fixed = false;

function click(){
    document.getElementById("menu").classList.toggle("menu1");
    document.getElementById("menu").classList.toggle("menu_view");
    if(fixed == false){
    document.body.classList.add("bodyfix");
    fixed = true;
    }else{
    document.body.classList.remove("bodyfix");
    fixed = false;
    }   
}

const click2 = () => {
    var boutton = document.getElementById("click");
    boutton.classList.toggle('opened');
    boutton.setAttribute('aria-expanded', boutton.classList.contains('opened'));
    click();
 }

document.getElementById("click").addEventListener("click", click);

document.getElementById("lien1").addEventListener("click", click2);
document.getElementById("lien2").addEventListener("click", click2);
document.getElementById("lien3").addEventListener("click", click2);