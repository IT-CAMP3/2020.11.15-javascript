var haslo = "Ala ma kota";

haslo = haslo.toUpperCase();

var ukryte_haslo = "";
var dlugosc = haslo.length;

for(i=0; i<dlugosc; i++) {
	if(haslo.charAt(i)==" ")
		ukryte_haslo = ukryte_haslo + " ";
	else
		ukryte_haslo = ukryte_haslo + "-";
}

function set_password() {
	document.getElementById("haslo").innerHTML = ukryte_haslo;
}

window.onload = set_password;