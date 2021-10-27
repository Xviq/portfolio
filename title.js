if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){

    setInterval(loop, 350);

}

var x = 0;

var titleText = [ "d", "de", "dec", "decr", "decry", "decryp", "decrypt", "decrypti", "decryptio", "decryption", "unlock", "creep.ga", "welcome", "to", "creep.ga"];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
