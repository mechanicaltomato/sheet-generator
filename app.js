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

function removeIndexFromArray(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

window.onload = function() {
  let isAtributeValid=0;
  for(var i=0; i<6; i++){
    isAtributeValid = Number(prompt("Choose your " + atributes[i] + " value between " + standardArray))
    if(standardArray.includes(isAtributeValid)){
      sheet[atributes[i]] = isAtributeValid;
      standardArray = removeIndexFromArray(standardArray, standardArray.indexOf(isAtributeValid));

    }else i--;

  }
  console.table(sheet)
}

let calcMod = function(attribute){
	let mod = Math.floor((sheet.attribute-10)/2);
	console.log(mod);
}
