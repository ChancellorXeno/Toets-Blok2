var stellingZin = ["Nederland moet terug naar de Gulden","Er moet meer geld naar ontwikkelingshulp","De overheid moet afslanken",
"De AOW leeftijd moet terug naar 67 jaar","Wietteelt moet worden gelegaliseerd","We moeten minder geld aan het leger uitgeven",
"Alle werkenden moeten minder loonbelasting betalen", "Dit is een makkelijke toets","Dit is een moeilijke toets"]
var keuze ={"eens":false};
var keuzeCount = 0;
var stellingZinCount = 0;
var eensCount = 0;

var div = document.createElement("div");
document.getElementById("stemWijzer").appendChild(div);
div.id = "div";

var stelling = document.createElement("h1");
document.getElementById("div").appendChild(stelling);
stelling.id = "stelling";
stelling.innerHTML = "Nederland moet terug naar de Gulden";

var btnEens = document.createElement("button");
document.getElementById("div").appendChild(btnEens);
btnEens.id = "btnEens";
btnEens.innerHTML = "EENS";

var btnOneens = document.createElement("button");
document.getElementById("div").appendChild(btnOneens);
btnOneens.id = "btnOneens";
btnOneens.innerHTML = "ONEENS";

var btnVolgende = document.createElement("button");
document.getElementById("div").appendChild(btnVolgende);
btnVolgende.id = "btnVolgende";
btnVolgende.innerHTML = "VOLGENDE";

btnEens.addEventListener("click", FunctEens);
btnOneens.addEventListener("click", FunctOneens);
btnVolgende.addEventListener("click", FunctVolgende);

function FunctEens() {
	keuze["eens"]=true;
	btnVolgende.style.display = "block";
	btnEens.style.backgroundColor = "green"
	btnOneens.style.backgroundColor = "red"
}
function FunctOneens() {
	keuze["eens"]=false;
	btnVolgende.style.display = "block";
	btnEens.style.backgroundColor = "red"
	btnOneens.style.backgroundColor = "green"
}
function FunctVolgende() {
	if (keuze["eens"] == true) {
		eensCount++
	}
	keuzeCount++
	stellingZinCount++
	stelling.innerHTML = stellingZin[stellingZinCount];
	btnVolgende.style.display = "none";
	if (keuzeCount == 9) {
			result();
	}
	btnEens.style.backgroundColor = ""
	btnOneens.style.backgroundColor = ""
}
function result() {
	stelling.style.fontSize = "14px";
	if (eensCount < 2) {
		stelling.innerHTML = "U heeft " + eensCount + " keer EENS gestemd. De partij die het beste bij u voorkeur past is de CDA";
	}
	if (eensCount >= 2) {
		if (eensCount <= 4) {
			stelling.innerHTML = "U heeft " + eensCount + " keer EENS gestemd. De partij die het beste bij u voorkeur past is de VVD";
		}
	}
	if (eensCount >= 5) {
		if (eensCount <= 7) {
			stelling.innerHTML = "U heeft " + eensCount + " keer EENS gestemd. De partij die het beste bij u voorkeur past is de PvdA";
		}
	}
	if (eensCount > 8) {
		stelling.innerHTML = "U heeft " + eensCount + " keer EENS gestemd. De partij die het beste bij u voorkeur past is de d66	";
	}
	btnEens.style.display = "none";
	btnOneens.style.display = "none";
	btnVolgende.style.display = "none";
}