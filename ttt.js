var c=0;
var k=1;
function reset(){
    for(var i=1;i>=9;i++){
        document.getElementById("p"+1).innerHTML="";
    }
    c=0;
}
function box(el){
    if(c==0){
        document.getElementById(el.id).innerHTML="O";
        c++;
        chk();
    }
    else if(c==1){
        document.getElementById(el.id).innerHTML="X";
        c--;
        chk();
    }
    if(chk()){
        if(c==1){
            alert("Player-O WON !!");
        }
        else if(c==0){
            alert("Player-X WON !!");
        }
        reset();
    }
    if(k==10){
        alert("DRAW !!");
        reset();
    }
    k++;
}
function chk(){
    if(document.getElementById("p1").innerHTML!="" && document.getElementById("p2").innerHTML!="" && document.getElementById("p3").innerHTML!="" && document.getElementById("p1").innerHTML==document.getElementById("p2").innerHTML && document.getElementById("p2").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p1").style.color="blue";
        document.getElementById("p2").style.color="blue";
        document.getElementById("p3").style.color="blue";
        return true;
    }
    if(document.getElementById("p4").innerHTML!="" && document.getElementById("p5").innerHTML!="" && document.getElementById("p6").innerHTML!="" && document.getElementById("p4").innerHTML==document.getElementById("p5").innerHTML && document.getElementById("p6").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p4").style.color="blue";
        document.getElementById("p5").style.color="blue";
        document.getElementById("p6").style.color="blue";
        return true;
    }
    if(document.getElementById("p7").innerHTML!="" && document.getElementById("p8").innerHTML!="" && document.getElementById("p9").innerHTML!="" && document.getElementById("p7").innerHTML==document.getElementById("p8").innerHTML && document.getElementById("p9").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p7").style.color="blue";
        document.getElementById("p8").style.color="blue";
        document.getElementById("p9").style.color="blue";
        return true;
    }
    if(document.getElementById("p1").innerHTML!="" && document.getElementById("p4").innerHTML!="" && document.getElementById("p7").innerHTML!="" && document.getElementById("p1").innerHTML==document.getElementById("p4").innerHTML && document.getElementById("p7").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p1").style.color="blue";
        document.getElementById("p4").style.color="blue";
        document.getElementById("p7").style.color="blue";
        return true;
    }
    if(document.getElementById("p2").innerHTML!="" && document.getElementById("p5").innerHTML!="" && document.getElementById("p8").innerHTML!="" && document.getElementById("p2").innerHTML==document.getElementById("p5").innerHTML && document.getElementById("p8").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p2").style.color="blue";
        document.getElementById("p5").style.color="blue";
        document.getElementById("p8").style.color="blue";
        return true;
    }
    if(document.getElementById("p3").innerHTML!="" && document.getElementById("p6").innerHTML!="" && document.getElementById("p9").innerHTML!="" && document.getElementById("p3").innerHTML==document.getElementById("p6").innerHTML && document.getElementById("p9").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p3").style.color="blue";
        document.getElementById("p6").style.color="blue";
        document.getElementById("p9").style.color="blue";
        return true;
    }
    if(document.getElementById("p1").innerHTML!="" && document.getElementById("p5").innerHTML!="" && document.getElementById("p9").innerHTML!="" && document.getElementById("p1").innerHTML==document.getElementById("p5").innerHTML && document.getElementById("p9").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p1").style.color="blue";
        document.getElementById("p5").style.color="blue";
        document.getElementById("p9").style.color="blue";
        return true;
    }
    if(document.getElementById("p3").innerHTML!="" && document.getElementById("p5").innerHTML!="" && document.getElementById("p7").innerHTML!="" && document.getElementById("p3").innerHTML==document.getElementById("p5").innerHTML && document.getElementById("p7").innerHTML==document.getElementsById("p3").innerHTML){
        document.getElementById("p3").style.color="blue";
        document.getElementById("p5").style.color="blue";
        document.getElementById("p7").style.color="blue";
        return true;
    }
    
}
