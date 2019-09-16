'use strict';
let sheet = {
  strength : {value : 0, mod : 0, saveProficiency : 1},
  dexterity : {value : 0, mod : 0, saveProficiency : 0},
  constitution : {value : 0, mod : 0, saveProficiency : 1},
  intelligence : {value : 0, mod : 0, saveProficiency : 0},
  wisdom : {value : 0, mod : 0, saveProficiency : 0},
  charisma : {value : 0, mod : 0, saveProficiency : 0},
}
let character = {
	name : "Who Cares Honestly",
	alignment : {social : "Lawful", moral : "Evil"},
	exp : 0,
	level : 1,
	profBonus : 2,
	hp : 10,
	ac : 10,
	speed : 30,
}
let standardArray = [15, 14, 13, 12, 10, 8];
let atributeName = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
let usedArray = [];
let distributionMethod=3;
let auxAtribute;



while(distributionMethod>2 || distributionMethod<0){
	distributionMethod = Number(prompt("Qual o método de atribuição que será utilizado?\n 0-Standard Array, 1-Inserção manual, 2-Role por mim!"))

	if(distributionMethod==0){
		usedArray = standardArray;
		break
	}else if(distributionMethod==1) {
		for(var i=0; i<6; i++){
			auxAtribute = Number(prompt("Insira atributo número " + (i+1) + " para distribuir."))
			if(auxAtribute<3 || auxAtribute>18){
				console.log("Valor inserido fora do intervalo permitido, tente novamente.")
				i--;
			}else usedArray.push(auxAtribute);
		}
		break;
	}else if(distributionMethod==2){
		for(var j=0; j<6; j++){
			let rolls = [0,0,0,0];
			let lowest = 6;
			let sum = 0;
			for(var i=0; i<4;i++){
				rolls[i] = Math.floor(Math.random()*5 + 1)
				if(rolls[i]<lowest){
					lowest=rolls[i];
				}
			}
			removeIndexFromArray(rolls, rolls.indexOf(lowest));
			for(var i=0;i<3;i++){
				sum+=rolls[i];
			}
			usedArray.push(sum);
		}

	}else console.log("Seleção inválida, tente novamente.")
}



function removeIndexFromArray(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

window.onload = function() {
  	let isAtributeValid=0;
  	let statAssignChoice = Number(prompt("How do you want to assign your atributes?\n 0-Assign Mannualy, 1-Assign them for me!"))

  	if(statAssignChoice==0){
  		for(var i=0; i<6; i++){
    		isAtributeValid = Number(prompt("Choose your " + atributeName[i] + " value between " + usedArray))
    		if(usedArray.includes(isAtributeValid)){
      			sheet[atributeName[i].value] = isAtributeValid;
      			usedArray = removeIndexFromArray(usedArray, usedArray.indexOf(isAtributeValid));
    		}else i--;
		}
	}else {
		for(var i=0; i<6; i++){
			sheet[atributeName[i]].value = usedArray[i];
		}
  	}
  	calcMod();
  	chooseSkills();
  	console.table(character)
  	console.table(sheet);
  	console.table(skills);
 }


let calcMod = function(){
	for(var i=0; i<6; i++){
		sheet[atributeName[i]].mod = Math.floor((sheet[atributeName[i]].value -10)/2);
	}
}//calculates modifiers

let levelCheck = function(character){
	if(character.exp<=300){
		character.level = 1;
		character.profBonus = 2;

	}else if(character.exp<=600){
		character.level = 2;
		character.profBonus = 2;

	}else if(character.exp<=900){
		character.level = 3;
		character.profBonus = 2;

	}else if(character.exp<=2700){
		character.level = 4;
		character.profBonus = 2;

	}else if(character.exp<=6500){
		character.level = 5;
		character.profBonus = 3;

	}else if(character.exp<=14000){
		character.level = 6;
		character.profBonus = 3;

	}else if(character.exp<=23000){
		character.level = 7;
		character.profBonus = 3;

	}else if(character.exp<=34000){
		character.level = 8;
		character.profBonus = 3;

	}else if(character.exp<=48000){
		character.level = 9;
		character.profBonus = 4;

	}else if(character.exp<=64000){
		character.level = 10;
		character.profBonus = 4;

	}else if(character.exp<=85000){
		character.level = 11;
		character.profBonus = 4;

	}else if(character.exp<=100000){
		character.level = 12;
		character.profBonus = 4;

	}else if(character.exp<=120000){
		character.level = 13
		character.profBonus = 5;

	}else if(character.exp<=140000){
		character.level = 14;
		character.profBonus = 5;

	}else if(character.exp<=165000){
		character.level = 15;
		character.profBonus = 5;

	}else if(character.exp<=195000){
		character.level = 16;
		character.profBonus = 5;

	}else if(character.exp<=225000){
		character.level = 17
		character.profBonus = 6;

	}else if(character.exp<=265000){
		character.level = 18;
		character.profBonus = 6;

	}else if(character.exp<=305000){
		character.level = 19;
		character.profBonus = 6;

	}else if(character.exp<=355000){
		character.level = 20;
		character.profBonus = 6;

	}else console.log("Get a life")
}//calculates lever and proficiency bonus based on exp





let skills = {
	/*
	Usage:
	Values: 0(not proficient), 0,5(half proficient), 1(proficient), 2(expertise)
	*/

	athletics: 0,//STR[0]

	acrobatics: 0,//DEX[1, 2, 3]
	sleightOfHand: 0,
	stealth: 0,

	arcana: 0,//INT[4,5,6,7,8]
	history: 0,
	investigation: 0,
	nature: 0,
	religion: 0,

	animalHandling: 0,//WIS[9,10,11,12,13]
	insight: 0,
	medicine: 0,
	perception: 0,
	survival: 0,

	deception: 0,//CHA[14,15,16,17]
	intimidation: 0,
	performace: 0,
	persuasion: 0,

}//object declaration of skills

let skillList = ["athletics", "acrobatics", "sleightOfHand", "stealth", "arcana", "history", "investigation", "nature", "religion",
"animalHandling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performace", "persuasion"];

let chooseSkills = function(){
	let choices = 0;
	let isChoiceValid
	while(choices!=0){
		isChoiceValid = prompt("Em qual habilidade quer adquirir proeficiencia?");
		if(skillList.includes(isChoiceValid)){
			skills[isChoiceValid] = 1;
			removeIndexFromArray(skillList, skillList.indexOf(isChoiceValid))
			choices--;
			
		}
	}
}
