var canvas;
var stage;
var shape;
var radius = 50;
var rings = 40;


var current = 1;

var whiteCounter = 0;
var redCounter = 0;

var currentRed;
var currentWhite;

var reds =
["Austerity is ___.",
"___ is what democracy looks like.",
"1, 2, 3, 4, this is ___ 5, 6, 7, 8, organize and ___.",
"___ + ___ = a balance budget.",
"Don't worry, the Unions will have our back and lead us towards ___.",
"What's Philippe Couillard’s worst nightmare?",
"UQAM expels 9 students because of ___.",
"In today's press conference, Martin Coiteux announces ___.",
"I'm against striking because ___.",
"The next step in the escalation of our pressure tactics is ___.",
"The favorite hobby of Matricule 728 is ___.",
"The worst thing about austerity is ___.",
"10 billion solutions are an alternative to___.",
"Strategic voting leads to ___.",
"Less funding for CLSCs means ___.",
"The most recent reason that people hate ASSÉ is ___.",
"Increasing tax brackets from 4 to 10 would allow us to ___.",
"Underneath the Anarchopanda costume is actually ___.",
"___, only for the 1%.",
"David Heurtel + Transcanada + a beluga nursery = ___."];


var whites = ["Bombardier C Series",
"A police officer wearing clown pants",
"No kids will die of this, there are already enough book in school libraries -Yves Bolduc",
"Social welfare (only for private companies)",
"Shooting some kid in the face",
"“Budgetary rigor”",
"Because I'm Leitao intolerant",
"Sam Hamad",
"Arthur Porter",
"Poëti's poetry",
"Contributing my fair share",
"Martin Coiteux, the puppet of the government",
"Tightening our belts",
"Philippe Couillard's years in Saudi Arabia",
"“A really respectful strip search” -Yves Bolduc",
"(Nous) On a rien volé",
"A strategic withdrawal",
"Trying to pack more students in the classes",
"The Charbonneau Commision",
"Les vraies affaires",
"The Black Bloc is recruiting",
"Printemps 2015",
"Anarchopanda",
"Police officers on mountain bikes",
"En français SVP",
"Indexation",
"A student boycott",
"Gaétan Barette",
"François Blais",
"Pier-Karl Péladeau",
"The trickle-down economy",
"The sound of our social fabric tearing apart",
"UNE GROSSE CRISS DE MANIF DE SOIR !!!",
"Éric Duhaime",
"Expelling 2 or 3 students a day",
"Legalizing illegal fees in the health system",
"Increasing the number of tax brackets",
"Increasing corporate tax rates",
"Fuck Toute",
"A tear gas grenade",
"The silent majority",
"Police brutality",
"Matricule 728",
"Giving the itinerary to the police",
"A Guy Fawkes mask",
"Gabriel Nadeau-Dubois",
"The riot police",
"Plan Nord",
"A 3% raise over 5 years",
"A direct action",
"Free education",
"The bourgeoisie",
"The working class",
"Citing Marx for no reason",
"The demonstrators to riot police ratio",
"The 1%",
"The Energy East pipeline",
"An SPVM anti-austerity demonstration",
"Justin Trudeau declaring martial law on Quebec",
"A P3 for PKP",
"What Would Jean Lesage Do…",
"Doing whatever the middle class does",
"Being a motherfucking libertarian",
"A shitty union slogan",
"#manifencours",
"A social strike",
"A non-mixed caucus",
"A rural issue",
"Montreal-centrism",
"Quebec Student Union (QSU/UEQ).... or the FEUQ 2.0",
"Tabling the motion",
"A job. In the North if possible.",
"Cegep du Vieux Montreal's closed session. ",
"A special law.",
"A resignation, followed by a blame motion, followed by a removal from office.",
"The Call of the East.....or not.",
"A secret vote by show of hands.",
"The annual Coalition Against Police Brutality march.",
"Money and the ethnic vote.",
"ACAB",
"Foundation 1625.",
"Students drinking sangria on a patio",
"Combative Syndicalism.",
"The sound truck in a demo.",
"It's the fault of Greenpeace and the intellectuals.",
"Infoman.",
"Only one bath a month for Grandma",
"Intersectional feminism",
"Injunction",
"Arielle Grenier",
"Calling to question",
"Slow privatization",
"Fighting tax evasion",
"Moodwatcher intervention",
"Bashing City Hall",
"Confusing public debt and personal debt",
"Anarcho-capitalism",
"Surprisingly missing Jean Charest",
"Closing down rural areas",
"Trash radio stations"];


//document.body.addEventListener('load', function(){console.log("lol")});

$(document).ready(function() {
  // any code goes here
  init();
});

function init() {
  shuffle(reds);
  shuffle(whites);
  // create a new stage and point it at our canvas:
  canvas = document.getElementById("cardCanvas");
  stage = new createjs.Stage(canvas);

  // var redCard = getRedCard("My mom");
  // stage.addChild(redCard);
  //
  //
  // var whiteCard = getWhiteCard("The 1%");
  // stage.addChild(whiteCard);
  //
  // slide(whiteCard);
  next();

  // createjs.Tween.get(container, { loop: true })
  // .to({ x: 400, y: 100 }, 1000, createjs.Ease.getPowInOut(4)).call(function(){console.log(1)})
  // .to({ y: 175 }, 500, createjs.Ease.getPowInOut(2)).call(function(){console.log(2)})
  // .to({ x: 100 }, 500, createjs.Ease.getPowInOut(2)).call(function(){console.log(3)})
  // .to({ y: 100 }, 500, createjs.Ease.getPowInOut(2)).call(function(){console.log(4)})



  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
  //	stage.update();
}

function slide(card){
  createjs.Tween.get(card, { loop: false })
  .to({y: 100 }, 1000, createjs.Ease.getPowInOut(4))
  .wait(1150)
  .to({ y: 500 }, 250, createjs.Ease.getPowInOut(2)).call(function(){next();});

}

function slideRed(card){
  createjs.Tween.get(card, { loop: false })
  .to({y: 100 }, 1000, createjs.Ease.getPowInOut(4)).call(function(){next();})
  //  .wait(1000)
  //.to({ y: 500 }, 250, createjs.Ease.getPowInOut(2)).call(function(){console.log(2);next();});

}

function fadeRed(card){
  createjs.Tween.get(card, { loop: false })
  .wait(500)
  .to({ y: 500 }, 250, createjs.Ease.getPowInOut(2)).call(function(){next();});

}


function next(){
  if(current%6 == 1){
    if(typeof currentRed != 'undefined'){
      var index = stage.getChildIndex(currentRed);
      console.log(index);
      stage.removeChildAt(index);
    }
    var redCard = getRedCard(reds[redCounter]);
    currentRed = redCard;
    stage.addChild(redCard);
    slideRed(redCard);
    redCounter = (redCounter+1)%reds.length;
  }
  else if(current%6 == 0){
    fadeRed(currentRed);
  }
  else{
    if(typeof currentWhite != 'undefined'){
      var index = stage.getChildIndex(currentWhite);
      //  console.log(index);
      stage.removeChildAt(index);
    }
    var whiteCard = getWhiteCard(whites[whiteCounter]);
    currentWhite = whiteCard;
    stage.addChild(whiteCard);
    slide(whiteCard);
    whiteCounter = (whiteCounter+1)%whites.length;
  }
  current = (current+1)%6;


}

function getWhiteCard(content){

  var container = new createjs.Container();
  var card = new createjs.Shape();
  var w = 175;
  card.graphics.setStrokeStyle(2).beginStroke("black").beginFill("white").drawRect(0, 0, 175,175);
  var a = w/10;
  var x = w/10-w/20;
  var y = 0.70*w;

  var text = new createjs.Text(content, "18px Helvetica Neue", "#000000");
  text.lineWidth = 160;
  text.x = x;
  text.y = x;

  var logo1 = new createjs.Shape();
  logo1.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, a,a);
  logo1.x = x;
  logo1.y = y + a/10;
  logo1.rotation = -15;
  var logo2 = new createjs.Shape();
  logo2.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, a,a);
  logo2.x = x+(a/2);
  logo2.y = y;
  var logo3 = new createjs.Shape();
  logo3.graphics.beginStroke("black").beginFill("red").drawRect(0, 0, a,a);
  logo3.x = x+a;
  logo3.y = y;
  logo3.rotation = 15;
  var logoText = new createjs.Text("Cards Against Austerity", "10px Helvetica Neue", "#000000");
  logoText.x = x+(2*a);
  logoText.y = y+a/3;

  container.x = 205;
  container.y = -200;
  container.addChild(card);
  container.addChild(logo1);
  container.addChild(logo2);
  container.addChild(logo3);
  container.addChild(text);
  container.addChild(logoText);
  return container;
}

function getRedCard(content){
  var redCardContainer = new createjs.Container();
  var redCard = new createjs.Shape();
  var redW = 175;
  redCard.graphics.setStrokeStyle(2).beginStroke("black").beginFill("#F63F48").drawRect(0, 0, 175,175);
  var redA = redW/10;
  var redX = redW/10-redW/20;
  var redY = 0.70*redW;

  var redText = new createjs.Text(content, "18px Helvetica Neue", "#FFFFFF");
  redText.lineWidth = 160;
  redText.x = redX;
  redText.y = redX;

  var redLogo1 = new createjs.Shape();
  redLogo1.graphics.beginStroke("white").beginFill("red").drawRect(0, 0, redA,redA);
  redLogo1.x = redX;
  redLogo1.y = redY + redA/10;
  redLogo1.rotation = -15;
  var redLogo2 = new createjs.Shape();
  redLogo2.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, redA,redA);
  redLogo2.x = redX+(redA/2);
  redLogo2.y = redY;
  var redLogo3 = new createjs.Shape();
  redLogo3.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, redA,redA);
  redLogo3.x = redX+redA;
  redLogo3.y = redY;
  redLogo3.rotation = 15;
  var redLogoText = new createjs.Text("Cards Against Austerity", "10px Helvetica Neue", "#FFFFFF");
  redLogoText.x = redX+(2*redA);
  redLogoText.y = redY+redA/3;

  redCardContainer.x = 5;
  redCardContainer.y = -200;
  redCardContainer.addChild(redCard);
  redCardContainer.addChild(redLogo1);
  redCardContainer.addChild(redLogo2);
  redCardContainer.addChild(redLogo3);
  redCardContainer.addChild(redText);
  redCardContainer.addChild(redLogoText);
  return redCardContainer;
}

function toggleCache(value) {
  // iterate all the children except the fpsLabel, and set up the cache:
  var l = stage.getNumChildren() - 1;

  for (var i = 0; i < l; i++) {
    var shape = stage.getChildAt(i);
    if (value) {
      shape.cache(-radius, -radius, radius * 2, radius * 2);
    } else {
      shape.uncache();
    }
  }
}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
