var classe = "";

var guerrier = {
	str : 10,
	sta : 10,
	dex : 5,
	int : 2,
};

var voleur = {
	str : 5,
	sta : 5,
	dex : 10,
	int : 4,
};

var mage = {
	str : 2,
	sta : 4,
	dex : 4,
	int : 10,
};

var html = "";

$("#buttonWar").click(function classe(classe){
	$(".bigContent").html("<h1 class='buttonWar'>Guerrier</h1>\
							<p>Le guerrier est une classe de... ben guerrier (-_-')</p>\
							<p>Ses <strong>stats</strong> sont : </p>\
								<strong>Str</strong> : 10 points<br>\
								<p><strong>Sta</strong> : 10 points<br>\
								<strong>Dex</strong> : 5 points<br>\
								<strong>Int</strong> : 2 points (T'as cru qu'un war c'était intelligent p'tête ?)</p>\
								<p>Bonus guerrier : <strong>+1 dégâts</strong> et <strong>+1 hp</strong>/Str, <strong>+2hp</strong>/Sta.</p>");
	$("div.hideSelect").removeClass("hideSelect").addClass("selectClass");
});

$("#buttonRogue").click(function classe(classe){
	$(".bigContent").html("<h1 class='buttonRogue'>Voleur</h1>\
							<p>Le voleur est une classe de... filou ! (^_^)</p>\
							<p>Ses <strong>stats</strong> sont : </p>\
								<p><strong>Str</strong> : 5 points<br>\
								<strong>Sta</strong> : 5 points<br>\
								<strong>Dex</strong> : 10 points<br>\
								<strong>Int</strong> : 4 points (Un peu plus intelligent qu'un war, mais moins qu'un mage quoi...)</p>\
								<p>Bonus voleur : <strong>+2 dégâts</strong> et <strong>+1 hp</strong>/Dex.</p>");
	$("div.hideSelect").removeClass("hideSelect").addClass("selectClass");
});

$("#buttonMage").click(function classe(classe){
	$(".bigContent").html("<h1 class='buttonMage'>Mage</h1>\
							<p>Le mage, c'est genre l'intello fragile de la classe, tu vois ? (@.@)</p>\
							<p>Ses <strong>stats</strong> sont : </p>\
								<p><strong>Str</strong> : 2 points<br>\
								<strong>Sta</strong> : 3 points (J'ai bien dit \"Intello <strong>FRAGILE</strong>\")<br>\
								<strong>Dex</strong> : 4 points<br>\
								<strong>Int</strong> : 10 points</p>\
								<p>Bonus mage : <strong>+3 dégâts</strong> et <strong>+1 hp</strong>/Int.</p>");
	$("div.hideSelect").removeClass("hideSelect").addClass("selectClass");
	$("")
});

function classSelected(classe){
	if(classe == guerrier){
		console.log(classe)
		$(".bigContent").html("<p>Ainsi donc vous avez choisi la voie du <h3><strong class='buttonWar'>Guerrier</strong></h3>\
								Je vous souhaite donc un bon<br>\
								<a href='war.html'><button class='button'>PERIPLE, ma frrrriend.</button></a></p>");
	} else if(classe == voleur){
		console.log(classe)
		$(".bigContent").html("<p>Ainsi donc vous avez choisi la voie du <h3><strong class='buttonRogue'>Voleur</strong></h3>\
								<a href='rogue.html'><button class='button'>BONNE JOURNEE</button></a><br>\ à vous, ma frrrriend !</p>");
	} else {
		console.log(classe)
		$(".bigContent").html("<p>Ainsi donc vous avez choisi la voie du <h3><strong class='buttonMage'>Mage</strong></h3>\
								<a href='war.html'><button class='button'>BON VENT !</button></a> Ma frrrriend.</p>");
	}
	}

$("#confirm").click(function select(){
	if($("#laKlass option:selected").text() == "Guerrier"){
		classe = guerrier;
		classSelected(guerrier);
	} else if($("#laKlass option:selected").text() == "Voleur"){
		classe = voleur;
		classSelected(voleur);
	} else if($("#laKlass option:selected").text() == "Mage"){
		classe = mage;
		classSelected(mage);
	}else {
		alert("HOW DID YOU DO THIS ?!");
	};
	$("div.selectClass").addClass("hideSelect");
	$("div.class").addClass("hideSelect");
});
