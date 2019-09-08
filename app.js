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

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

window.onload = function() {
  let isAtributeValid=0;
  for(var i=0; i<6; i++){
    isAtributeValid = Number(prompt("Choose your " + atributes[i] + " value between " + standardArray))
    if(standardArray.includes(isAtributeValid)){
      sheet[atributes[i]] = isAtributeValid;
      standardArray = remove(standardArray, standardArray.indexOf(isAtributeValid));

    }else i--;//deselegante as fuck

  }
  console.table(sheet)
  console.log(Math.floor((sheet.dexterity-10)/2))
}
//next steps:
//-receber atributos do usuario
