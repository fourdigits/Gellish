// Display which language is used for the user interface and queries.

function set_language() {
	var lang = document.getElementById("gui_lang").value;
	var text = "The reply language is " + lang;
	var JSON_string = '{"lang_text":"The GUI language is changed"}';
	var obj = JSON.parse(JSON_string);
	document.getElementById("demo").innerHTML = obj.lang_text;
	return
}

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();