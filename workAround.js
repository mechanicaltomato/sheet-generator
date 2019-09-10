let character = {//usado de exemplo
	race : "human",//+1 skill qualquer
	class : "bard",//+3 skills quaisquer
	background : "criminal",//+deception e stealth
	profBonus : 2,//personagem lvl 1 é sempre 2
}


//DEFINIÇÕES DE ATRIBUTOS
let sheet = {
  strength : 0,
  dexterity : 0,
  constitution : 0,
  intelligence : 0,
  wisdom : 0,
  charisma : 0,
}

let standardArray = [15, 14, 13, 12, 10, 8];
let atributes = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]
let usedArray = [];
let methodChoice=0;//se 0 usa standardArray, se 1 recebe input do usuario
var atributoAuxiliar;

//while(methodChoice!=1 || methodChoice!=0){ //comentado pq não funciona como deveria, de resto, recebe valores do usuario like a champ
	methodChoice = Number(prompt("Qual o método de atribuição que será utilizado?\n 0-Standard Array, 1-Inserção manual"))

	if(methodChoice==0){
		usedArray = standardArray;
	}else if(methodChoice==1) {
		for(var i=0; i<6; i++){
			atributoAuxiliar = Number(prompt("Insira atributo número " + i+1 + " para distribuir."))
			if(atributoAuxiliar<1 || atributoAuxiliar>20){
				console.log("Valor inserido fora do intervalo permitido, tente novamente.")
				i--;
			}else usedArray.push(atributoAuxiliar);
		}
	}else console.log("Seleção inválida, tente novamente.")
//}



function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

window.onload = function() {
  let isAtributeValid=0;
  for(var i=0; i<6; i++){
    isAtributeValid = Number(prompt("Choose your " + atributes[i] + " value between " + usedArray))
    if(usedArray.includes(isAtributeValid)){
      sheet[atributes[i]] = isAtributeValid;
      usedArray = remove(usedArray, usedArray.indexOf(isAtributeValid));

    }else i--;//deselegante as fuck

  }
  console.table(sheet)
  console.log(Math.floor((sheet.dexterity-10)/2))
}

//DEFINIÇÕES DE SKILLS
let skillList = ["athletics", "acrobatics", "sleightOfHand", "stealth", "arcana", "history", "investigation", "nature", "religion",
"animalHandling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performace", "persuasion"];













/*next steps:
Skills:
-Incluir raça/classe/background para poder selecionar as skills, visto que a seleção é limitada dependendo da escolha


Estrutura de skill:
-Um booleano para determinar se personagem possui proeficiencia
-Um booleano para determinar se personagem possui expertise ou similar
-Um booleano para determinar se personagem recebe meia proeficiencia
-Deve receber o valor do atributo associado

let skills = { //jeito ruim de fazer, calculando e associando valores manualmente

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

}

//jeito ideal, porem desconhecido de fazer
//utilização:

athletics = {
	//cada skill deve conter esses marcadores
	proficiency = false;
	expertise = false;
	halfProf = false;//algumas habilidades de classe permitem a adicao de metade do modificador em algumas skills
	relevantStat = strength;//sheet[atributo[0]]
	value = 0
}

//cada skill deve efetuar esse calculo
if(proficiency == true){
	value = character.profBonus + relevantStat
	if(expertise == true){
		value = 2*(character.profBonus) + relevantStat
	}
}else if(halfProf==true){
	value = floor(character.profBonus/2) + relevantStat
}else value = relevantStat;



//como tornar essa definição um "template" para ser utilizado facilmente ex: let acrobatics = "template"
//ou como definir para que a utilização fique algo similar a "skills.acrobatics.proficiency = true" por exemplo
//definir um vetor para armazenar as skills que possui proeficiencia?

*/
