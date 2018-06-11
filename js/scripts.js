function getRequestVar(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

function randomEntry(array) {
   return array[Math.floor(Math.random() * array.length)];
}

function setTheme(themeName){
	document.body.className = themeName;
}

function processThemeRequest(){
	var themes = ["vapor","sweet","spartan","space-case"];
	var currentTheme = getRequestVar('theme');
	var validTheme = ( typeof(currentTheme) !== "undefined" ) && themes.includes(currentTheme);
	if( validTheme ){
		setTheme(currentTheme);
	} else {
		setTheme(randomEntry(themes));
	}
}

processThemeRequest();