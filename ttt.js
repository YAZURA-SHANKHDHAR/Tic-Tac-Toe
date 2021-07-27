var c=0;
var k=1;
function reset(){
    for(var i=1;i>=9;i++){
        document.getElementById("p"+i).innerHTML="";
    }
    c=0;
}
function box(el){
    k++;
    if(c==0){
        document.getElementById(el.id).innerHTML="O";
        c++;
    }
    else{
        document.getElementById(el.id).innerHTML="X";
        c--;
    }
    if(chk()){
        if(c==1){
            alert("Player-O WON !!");
        }
        else{
            alert("Player-X WON !!");
        }
        reset();
    }
    if(k==10){
        alert("DRAW !!");
        reset();
    }
}
function chk(){
    if(document.getElementById('p1').innerHTML!="" && document.getElementById('p2').innerHTML!="" && document.getElementById('p3').innerHTML!=""
    && document.getElementById('p1').innerHTML == document.getElementById('p2').innerHTML && document.getElementById('p2').innerHTML == document.getElementById('p3').innerHTML)
    {
        document.getElementById('p1').style.color = "green";
        document.getElementById('p2').style.color = "green";
        document.getElementById('p3').style.color = "green";
        return true;

    }
    if(document.getElementById('p3').innerHTML!="" && document.getElementById('p6').innerHTML!="" && document.getElementById('p9').innerHTML!=""
    && document.getElementById('p3').innerHTML == document.getElementById('p6').innerHTML && document.getElementById('p6').innerHTML == document.getElementById('p9').innerHTML)
    {
        document.getElementById('p3').style.color = "green";
        document.getElementById('p6').style.color = "green";
        document.getElementById('p9').style.color = "green";
        return true;
    }
    if(document.getElementById('p7').innerHTML!="" && document.getElementById('p8').innerHTML!="" && document.getElementById('p9').innerHTML!=""
    && document.getElementById('p7').innerHTML == document.getElementById('p8').innerHTML && document.getElementById('p8').innerHTML == document.getElementById('p9').innerHTML)
    {
        document.getElementById('p7').style.color = "green";
        document.getElementById('p8').style.color = "green";
        document.getElementById('p9').style.color = "green";
        return true;
    }
    if(document.getElementById('p1').innerHTML!="" && document.getElementById('p4').innerHTML!="" && document.getElementById('p7').innerHTML!=""
    && document.getElementById('p1').innerHTML == document.getElementById('p4').innerHTML && document.getElementById('p4').innerHTML == document.getElementById('p7').innerHTML)
    {
        document.getElementById('p1').style.color = "green";
        document.getElementById('p4').style.color = "green";
        document.getElementById('p7').style.color = "green";
        return true;
    }
    if(document.getElementById('p1').innerHTML!="" && document.getElementById('p5').innerHTML!="" && document.getElementById('p9').innerHTML!=""
    && document.getElementById('p1').innerHTML == document.getElementById('p5').innerHTML && document.getElementById('p5').innerHTML == document.getElementById('p9').innerHTML)
    {
        document.getElementById('p1').style.color = "green";
        document.getElementById('p5').style.color = "green";
        document.getElementById('p9').style.color = "green";
        return true;
    }
    if(document.getElementById('p3').innerHTML!="" && document.getElementById('p5').innerHTML!="" && document.getElementById('p7').innerHTML!=""
    && document.getElementById('p3').innerHTML == document.getElementById('p5').innerHTML && document.getElementById('p5').innerHTML == document.getElementById('p7').innerHTML)
    {
        document.getElementById('p3').style.color = "green";
        document.getElementById('p5').style.color = "green";
        document.getElementById('p7').style.color = "green";
        return true;
    }
    if(document.getElementById('p2').innerHTML!="" && document.getElementById('p5').innerHTML!="" && document.getElementById('p8').innerHTML!=""
    && document.getElementById('p2').innerHTML == document.getElementById('p5').innerHTML && document.getElementById('p5').innerHTML == document.getElementById('p8').innerHTML)
    {
        document.getElementById('p2').style.color = "green";
        document.getElementById('p5').style.color = "green";
        document.getElementById('p8').style.color = "green";
        return true;
    }
    if(document.getElementById('p4').innerHTML!="" && document.getElementById('p5').innerHTML!="" && document.getElementById('p6').innerHTML!=""
    && document.getElementById('p4').innerHTML == document.getElementById('p5').innerHTML && document.getElementById('p5').innerHTML == document.getElementById('p6').innerHTML)
    {
        document.getElementById('p4').style.color = "green";
        document.getElementById('p5').style.color = "green";
        document.getElementById('p6').style.color = "green";
        return true;
    }
}
