var html;
if (!mobile){
  html =		"<div id='nav'>"
	+ "\n" + 	"      <ul>"
	+ "\n" + 	"        <li><a href='index.html'>Home</a></li>"
    + "\n" + 	"        <li><a href='about.html'>About</a></li>"
	+ "\n" +	"        <li><a href='http://github.com/bitnybblebyte'>Repositories</a></li>"
	+ "\n" +	"        <li><a href='contact.html'>Contact</a></li>"
	+ "\n" +	"      </ul>"
	+ "\n" +	"    </div>"
	+ "\n" +	"    <div id='header'>"
    + "\n" +	"      <img src='images/bnb_256.png' id='logo' />"
    + "\n" +	"      <h1 class='center'>"
	+ "\n" +	"        Bit.Nybble.Byte"
	+ "\n" +	"      </h1>"
	+ "\n" +	"    </div>";
}
else {
  html =		"<div id='nav' class='nav_collapsed'>"
    + "\n" + 	"      <img src='images/nav.png' style='position: absolute;'>"
	+ "\n" + 	"      <ul class='hidden'>"
	+ "\n" + 	"        <li><a href='index.html'>Home</a></li>"
    + "\n" + 	"        <li><a href='about.html'>About</a></li>"
	+ "\n" +	"        <li><a href='http://github.com/bitnybblebyte'>Repositories</a></li>"
	+ "\n" +	"        <li><a href='contact.html'>Contact</a></li>"
	+ "\n" +	"      </ul>"
	+ "\n" +	"    </div>"
	+ "\n" +	"    <div id='header'>"
    + "\n" +	"      <h1 class='center'>"
	+ "\n" +	"        Bit.Nybble.Byte"
	+ "\n" +	"      </h1>"
	+ "\n" +	"    </div>";
}

document.write(html);