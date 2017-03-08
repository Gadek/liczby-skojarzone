var fff=1;
var input;
var pokaz;
var pomoc;
var liczba1;
var liczba2;
var suma1=0;
var suma2=0;
var ile;
var s=1;
function setup() {
    noCanvas();
    input = select("#button");
    pokaz = select("#napis2")
    pomoc=createP("")
    input.changed(doIt);
    var n=createP("Podaj do ilu liczb chcesz sprawdzić");
    n.position(430,60)
    input2=select("#petla");
    input2.position(450,100);
    input2.changed(count);
}



//Dla pętli
function count() {
    ile=parseInt(input2.value()); 
    for(var i=fff ; i<=ile ; i++) {
        sprawdzpetle(i);
    }
}

function sprawdzpetle(x) {
    //SUMOWANIE DZIELNIKÓW  PIERWSZEJ LICZBY
   for(var i=1 ; i<x ; i++) {
       if(x%i==0) {
           suma1+=i;
       } 
   }
    
    liczba2=suma1-1;
    
    // SUMOWANIE DZIELNIKÓW  DRUGIEJ LICZBY
    for(var i=1 ; i<liczba2 ; i++) {
       if(liczba2%i==0) {
           suma2+=i;
       } 
   }
    
    
    if(suma1==liczba2+1 && suma2==x+1) {
        var z=createP(x+" --- "+liczba2);
        s+=23;
        z.position(450,85+s);
    } 
    suma1=0;
    suma2=0;
}





//Dla proszonej liczby

function doIt() {
    liczba1=parseInt(input.value());   
    sprawdz(liczba1);
}


function sprawdz(liczba1) {
       //SUMOWANIE DZIELNIKÓW  PIERWSZEJ LICZBY
   for(var i=1 ; i<liczba1 ; i++) {
       if(liczba1%i==0) {
           suma1+=i;
       } 
   }
    
    liczba2=suma1-1;
    
    // SUMOWANIE DZIELNIKÓW  DRUGIEJ LICZBY
    for(var i=1 ; i<liczba2 ; i++) {
       if(liczba2%i==0) {
           suma2+=i;
       } 
   }
    
    
    if(suma1==liczba2+1 && suma2==liczba1+1) {
        pokaz.html("Skojarzona liczba: "+liczba2)
    } else {
        pokaz.html("Nie ma takiej liczby");
    }
    

    pomoc.html("Suma dzielników pierwszej liczby: "+suma1+". Suma dzielniów drugiej liczby: "+suma2);
    suma1=0;
    suma2=0;
    input.value("");
}