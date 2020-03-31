
// Function tarkistaa onko var integer
function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

//
function emailIsValid(email){
	return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)

}

function checkForm(form){

	// Tarkistaa onko nimi alle 2 merkkiä.
	if (form.name.value.length < 2)
	{
		alert("Virheellinen nimi. Nimi pitää sisältää vähintään 2 merkkiä");
		form.name.focus();
		return (false);
	}

	// Tarkistaa emailin syntaxin
	if (emailIsValid(form.email.value))
		{
			//
		}
	else{
		alert("Anna oikea sähköpostiosoitteesi");
		form.email.focus();
		return (false);
	}

	// Tarkistaa onko ikä numero, samalla tarkistaa onko form.age.value:ssa kirjaimia
	if(isInt(form.age.value))

		// Läpäisee numero checkin. Nyt tarkistaa onko form.age.value:n numero alle 120 ja yli 0.
		{
		if (form.age.value > 120 || form.age.value < 0)
		{
			alert("Virheellinen ikä. Iän pitää olla 0-120v");
			form.age.focus();
			return (false);
		}
		}
	else{
		alert("Virheellinen ikä. Ikä saa sisältää vain numeroita");
		form.age.focus();
		return (false);
	}

	alert("Kiitos kun täytit kyselylomakkeen!")
	
	
}