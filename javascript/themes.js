ThemeStorage(localStorage.getItem("HBChatTheme"));


//Changes Login Panel To Theme Panel
function setupThemeMenu() {
    var menu = document.getElementById("login");
    var login = document.getElementById("logincover");

    menu.style.width = "500px";
    menu.style.height = "520px";
    menu.style.marginTop = "-250px";
    menu.style.marginLeft = "-250px";
    menu.style.borderRadius = "10px";

    login.style.display = "none";
    menu.style.display = "none";

    //The Theme Buttons Separated For Styling
    //Light Classic
    tButton1 = '<div class="themebutton" style="background-color:white; color:black" onclick="ThemeStorage(0)"><div class="themesub" style="background-color:white; border-color:black; color:black">Light<br>Classic</div></div>';

    //Night Blue
    tButton2 = '<div class="themebutton" style="background-color:#2b2b2b; color:black" onclick="ThemeStorage(1)"><div class="themesub" style="background-color:#212121; border-color:#008db8; color:white">Night<br>Blue</div></div>';

    //Night Orange
    tButton3 = '<div class="themebutton" style="background-color:#2b2b2b; color:black" onclick="ThemeStorage(2)"><div class="themesub" style="background-color:#212121; border-color:#e77928; color:white">Night<br>Orange</div></div>';

    //Night Shamrock
    tButton4 = '<div class="themebutton" style="background-color:#2b2b2b; color:black" onclick="ThemeStorage(3)"><div class="themesub" style="background-color:#212121; border-color:#34d280; color:#34d280">Night<br>Sham</div></div>';

    //Night Rave
    tButton5 = '<div class="themebutton" style="background-color:#2b2b2b; color:black" onclick="ThemeStorage(4)"><div class="themesub" style="background-color:#212121; border-color:#ff4af6; color:#ff4af6">Night<br>Rave</div></div>';

    //Windows XP
    tButton6 = '<div class="themebutton" style="background:url(pics/windowsxpbackground.jpg);background-size: cover; color:black" onclick="ThemeStorage(5)"><div class="themesub" style="background-color:white; border-color:; height: 36px; color:blue"><img src="pics/windowsxplogo.jpg" style="width:70%;"></div></div>';

    //Donald Trump
    tButton7 = '<div class="themebutton" style="background:url(pics/trumpbackground.jpg);background-repeat: no-repeat; background-size:270%; background-position: 70% 0%; color:black" onclick="ThemeStorage(6)"><div class="themesub" style="background-color:rgba(0,0,0,0.4); border-color:#bf0a30; color:white">Donald<br>Trump</div></div>';

    //Walnut
    tButton8 = '<div class="themebutton" style="background:url(pics/walnut.jpeg);background-repeat: no-repeat; background-size:270%; background-position: 70% 0%; color:black" onclick="ThemeStorage(7)"><div class="themesub" style="background-color:#d09664; border-color:#653418; color:white">Walnut<br>(Shawn)</div></div>';

    //Majora's Mask
    tButton9 = '<div class="themebutton" style="background-color:rgba(87,0,174,1); color:rgba(0,221,0,1);background-image:url(pics/majora.jpg);background-repeat: no-repeat; background-size:270%; background-position: 70% 0%;" onclick="ThemeStorage(8);"><div class="themesub" style="background-color:rgba(87,0,174,0.5); border-color:rgba(58,0,117,1);"><p style="background-color:rgba(85,85,255,1)">Majoras<br>Mask</p></div></div>';

    //Doggo
    tButton10 = '<div class="themebutton" style="background-color:rgba(0,0,0,1); color:rgba(255,255,255,1);background-image:url(pics/doggo.gif);background-repeat: no-repeat; background-size:270%; background-position: 70% 0%;" onclick="ThemeStorage(9);"><div class="themesub" style="background-color:rgba(255,255,255,0.5); border-color:rgba(0,0,0,1);"><p style="background-color:rgba(192,192,192,1)">Doggo<br>Theme</p></div></div>';

    //Your Name
    tButton11 = '<div class="themebutton" style="background-color:rgba(22,40,64,1); color:rgba(21,138,255,1);background-image:url(pics/yourname.gif);background-repeat: no-repeat; background-size:270%; background-position: 70% 0%;" onclick="ThemeStorage(10);"><div class="themesub" style="background-color:rgba(21,138,255,0.4); border-color:rgba(224,2,230,1);"><p style="background-color:rgba(22,40,64,1)">Your<br>Name</p></div></div>'

    //Custom
    tButton12 = '<div class="themebutton" style="background-color:' + customBackgroundColor + '; color:' + customTextColor + ';background-image:' + customBackImage + ';background-repeat: no-repeat; background-size:270%; background-position: 70% 0%;" onclick="SetupThemeBuilder();"><div class="themesub" style="background-color:' + customMiddleColor + '; border-color:' + customBorderColor + ';"><p style="background-color:' + customMessageBackColor + '">Custom<br>Theme</p></div></div>';

    //Audio On Button
    var audiobutton = ""
    if (audioOn) {
        audiobutton = '<div id="audioonbutton" class="button" style="top:-30px;left:15px;width:40px;opacity:1;padding:5px 10px;" onclick="ToggleAudio()">Sound</div>';
    } else {
        audiobutton = '<div id="audioonbutton" class="button" style="top:-30px;left:15px;width:40px;opacity:0.5;padding:5px 10px;" onclick="ToggleAudio()">Sound</div>';
    }


    //The Menu HTML
    menu.innerHTML = '<h2 id="themeheader" style="text-align: center;font-size:35px;margin-top:10px;font-family:sans-serif;">Select Your Theme</h2>' + tButton1 + tButton2 + tButton3 + tButton4 + tButton5 + tButton6 + tButton7 + tButton8 + tButton9 + tButton10 + tButton11 + tButton12 + audiobutton + '<div class="button" id="closemenubutton" style="position:static;margin:auto;clear:both;" onclick="CloseThemeMenu();">Continue</div>';
}

function SetupThemeBuilder() {
    var menu = document.getElementById("login");
    var login = document.getElementById("logincover");

    menu.style.width = "500px";
    menu.style.height = "700px";
    menu.style.marginTop = "-350px";
    menu.style.marginLeft = "-250px";
    menu.style.borderRadius = "10px";

    //Allows Quick Menu Building Options
    function formOption(elName, idLeft) {
        return '<div class="creatorbox"><p class="desctext">' + elName + '</p><div class="creatorinputbox"><input id="' + idLeft + '" class="leftpill" type="color"><input id="' + (idLeft + "o") + '" class="rightpill" type="number" min="0" max="10" value="10"></div></div>';
    }

    //Setup Menu Builder Buttons
    var option1 = formOption("Background", "backcolorchoice");
    var option2 = formOption("Border", "bordercolorchoice");
    var option3 = formOption("Chat Window", "windowcolorchoice");

    var option4 = formOption("Message Background", "messagebackgroundcolorchoice");
    var option5 = formOption("Message Text", "messagetextcolorchoice");
    var option6 = formOption("Message Subtext", "messagesubtextcolorchoice");

    var option7 = formOption("Header Background", "headerbackgroundcolorchoice");
    var option8 = formOption("Header Text", "headertextcolorchoice");
    var option9 = formOption("Menu Text Background", "menuheaderbackgroundcolorchoice");

    var option10 = formOption("Input Background", "inputbackgroundcolorchoice");
    var option11 = formOption("Input Text", "inputtextcolorchoice");
    var option12 = formOption("Input Button", "inputbuttoncolorchoice");

    var option13 = formOption("Button Background", "buttonbackgroundcolorchoice");
    var option14 = formOption("Button Text", "buttontextcolorchoice");
    var option15 = formOption("Button Border", "buttonbordercolorchoice");

    var option16 = "<div style='display:block;float:left;width:165px;text-align:center;margin-left:2px;margin-top:10px;'><p class='desctext'>Background URL</p><input type='text' id='backgroundnamechoice' style='margin-bottom:10px;height:20px;width:150px;padding-left:6px;' class='inputarea'></div>";

    var option17 = "<div style='display:block;float:left;width:165px;text-align:center;margin-top:10px;'><p class='desctext'>Theme Name</p><input type='text' id='themenamechoice' style='margin-bottom:10px;height:20px;width:150px;padding-left:6px;text-align:center;' class='inputarea' maxlength='15'></div>";

    var option18 = "<div style='display:block;float:left;width:165px;text-align:center;margin-top:10px;'><p class='desctext'>Audio URL</p><input type='text' id='audiochoice' style='margin-bottom:10px;height:20px;width:150px;padding-left:6px;' class='inputarea'></div>";

    var copydiv = "<div style='display:block;float:left;width:230px;height:35px;text-align:center;margin-left:10px;'><div class='button' id='copysharingbutton' style='margin:10px 0;position:static;height: 18px;width:230px;padding: 10px 0;' onclick='CopySharingCode()'>Copy Sharing Code</div><input id='outputcodebox' style='display:block;margin:auto; opacity:0;cursor:default;height:5px;width:5px;' value='hi'></div>";


    var insert = option1 + option2 + option3 + option4 + option5 + option6 + option7 + option8 + option9 + option10 + option11 + option12 + option13 + option14 + option15 + option16 + option17 + option18 + copydiv;

    var makeyourown = "<h3 class='themehead headercolor' style='text-align:center;margin-top:0px;padding-bottom:4px;'>Make Your Own</h3><p class='themehead headercolor' style='text-align:center;margin-top:0px;padding-bottom:4px;'>(Color,Opacity[0-10])</p>" + insert + '<div class="button" id="update" style="position:static;width:230px;float:left;display:block;height:18px;padding:10px 0;margin:10px 0 20px 0;margin-left:16px;" onclick="GenerateCustomTheme();">Apply</div>';

    var usecode = "<h3 class='themehead headercolor' style='text-align:center;padding:5px 0;margin:20px 0 10px 0;clear:both;'>Use A Sharing Code</h3><input id='applycodeinput' class='inputarea' style='width:250px;height:25px;margin:auto;display:block;padding:0 5px;'><div class='button' id='update' style='position:static;margin:10px auto;clear:both;width:80px;' onclick='ApplyCode();'>Apply Code</div>";

    //Background Color
    menu.innerHTML = "<h2 class='themehead headercolor' style='text-align:center;padding-top:3px;border-radius:6px 6px 0px 0px;'>Theme Builder</h2>" + makeyourown + usecode + '<div class="button" id="closemenubutton" style="top:20px;right:-360px;width:80px;padding:8px;margin:auto;clear:both;" onclick="setupThemeMenu();CloseThemeMenu();">Leave</div><a href="https://docs.google.com/document/d/1EZJXZieIwYM9x6A3v2OkrhYq3oEuYGETxzDetZx9t84/edit?usp=sharing" target="_blank"><div class="button" id="closemenubutton" style="top:20px;left:15px;width:80px;padding:8px;margin:auto;clear:both;">Get Themes</div></a>';

    //If There Is No Custom Theme Make Default
    if (customTheme == "" || customTheme == null) {
        customTheme = "#ffffff#000000#ffffff#f0f0f0#000000#000000#f0f0f0#000000#f0f0f0#ffffff#000000#000000#ffffff#000000#000000||Default Custom||10,10,10,10,10,10,10,10,10,10,10,10,10,10,10";
    }

    document.getElementById("backcolorchoice").value = customTheme.slice(0, 7);
    document.getElementById("bordercolorchoice").value = customTheme.slice(7, 14);
    document.getElementById("windowcolorchoice").value = customTheme.slice(14, 21);

    document.getElementById("messagebackgroundcolorchoice").value = customTheme.slice(21, 28);
    document.getElementById("messagetextcolorchoice").value = customTheme.slice(28, 35);
    document.getElementById("messagesubtextcolorchoice").value = customTheme.slice(35, 42);

    document.getElementById("headerbackgroundcolorchoice").value = customTheme.slice(42, 49);
    document.getElementById("headertextcolorchoice").value = customTheme.slice(49, 56);
    document.getElementById("menuheaderbackgroundcolorchoice").value = customTheme.slice(56, 63);

    document.getElementById("inputbackgroundcolorchoice").value = customTheme.slice(63, 70);
    document.getElementById("inputtextcolorchoice").value = customTheme.slice(70, 77);
    document.getElementById("inputbuttoncolorchoice").value = customTheme.slice(77, 84);

    document.getElementById("buttonbackgroundcolorchoice").value = customTheme.slice(84, 91);
    document.getElementById("buttontextcolorchoice").value = customTheme.slice(91, 98);
    document.getElementById("buttonbordercolorchoice").value = customTheme.slice(98, 105);

    customThemeArray = customTheme.split("|")

    document.getElementById("backgroundnamechoice").value = customThemeArray[1];
    document.getElementById("themenamechoice").value = customThemeArray[2];
    document.getElementById("audiochoice").value = customThemeArray[3];
    if (customThemeArray.length >= 5) {
        var opacities = customThemeArray[4].split(",")

        //Opacities
        document.getElementById("backcolorchoiceo").value = opacities[0];
        document.getElementById("bordercolorchoiceo").value = opacities[1];
        document.getElementById("windowcolorchoiceo").value = opacities[2];

        document.getElementById("messagebackgroundcolorchoiceo").value = opacities[3];
        document.getElementById("messagetextcolorchoiceo").value = opacities[4];
        document.getElementById("messagesubtextcolorchoiceo").value = opacities[5];

        document.getElementById("headerbackgroundcolorchoiceo").value = opacities[6];
        document.getElementById("headertextcolorchoiceo").value = opacities[7];
        document.getElementById("menuheaderbackgroundcolorchoiceo").value = opacities[8];

        document.getElementById("inputbackgroundcolorchoiceo").value = opacities[9];
        document.getElementById("inputtextcolorchoiceo").value = opacities[10];
        document.getElementById("inputbuttoncolorchoiceo").value = opacities[11];

        document.getElementById("buttonbackgroundcolorchoiceo").value = opacities[12];
        document.getElementById("buttontextcolorchoiceo").value = opacities[13];
        document.getElementById("buttonbordercolorchoiceo").value = opacities[14];
    }

}

//Generates Theme Code And Applies It Based On Inputted Theme Builder Values
function GenerateCustomTheme() {

    //Get Main Color/Input Values
    var back = document.getElementById("backcolorchoice").value;
    var border = document.getElementById("bordercolorchoice").value;
    var window = document.getElementById("windowcolorchoice").value;

    var mesback = document.getElementById("messagebackgroundcolorchoice").value;
    var mestext = document.getElementById("messagetextcolorchoice").value;
    var messub = document.getElementById("messagesubtextcolorchoice").value;

    var headback = document.getElementById("headerbackgroundcolorchoice").value;
    var headtext = document.getElementById("headertextcolorchoice").value;
    var menuback = document.getElementById("menuheaderbackgroundcolorchoice").value;

    var inpback = document.getElementById("inputbackgroundcolorchoice").value;
    var inptext = document.getElementById("inputtextcolorchoice").value;
    var inpbutton = document.getElementById("inputbuttoncolorchoice").value;

    var butback = document.getElementById("buttonbackgroundcolorchoice").value;
    var buttext = document.getElementById("buttontextcolorchoice").value;
    var butborder = document.getElementById("buttonbordercolorchoice").value;

    var backgroundName = document.getElementById("backgroundnamechoice").value;
    var themeName = document.getElementById("themenamechoice").value;
    var audioChoice = document.getElementById("audiochoice").value;


    //Get Opacity Values
    var backO = document.getElementById("backcolorchoiceo").value;
    var borderO = document.getElementById("bordercolorchoiceo").value;
    var windowO = document.getElementById("windowcolorchoiceo").value;

    var mesbackO = document.getElementById("messagebackgroundcolorchoiceo").value;
    var mestextO = document.getElementById("messagetextcolorchoiceo").value;
    var messubO = document.getElementById("messagesubtextcolorchoiceo").value;

    var headbackO = document.getElementById("headerbackgroundcolorchoiceo").value;
    var headtextO = document.getElementById("headertextcolorchoiceo").value;
    var menubackO = document.getElementById("menuheaderbackgroundcolorchoiceo").value;

    var inpbackO = document.getElementById("inputbackgroundcolorchoiceo").value;
    var inptextO = document.getElementById("inputtextcolorchoiceo").value;
    var inpbuttonO = document.getElementById("inputbuttoncolorchoiceo").value;

    var butbackO = document.getElementById("buttonbackgroundcolorchoiceo").value;
    var buttextO = document.getElementById("buttontextcolorchoiceo").value;
    var butborderO = document.getElementById("buttonbordercolorchoiceo").value;

    var opacityString = backO + "," + borderO + "," + windowO + "," + mesbackO + "," + mestextO + "," + messubO + "," + headbackO + "," + headtextO + "," + menubackO + "," + inpbackO + "," + inptextO + "," + inpbuttonO + "," + butbackO + "," + buttextO + "," + butborderO;

    //Theme Code
    customTheme = back + border + window + mesback + mestext + messub + headback + headtext + menuback + inpback + inptext + inpbutton + butback + buttext + butborder + "|" + backgroundName + "|" + themeName + "|" + audioChoice + "|" + opacityString;

    ApplyCustomTheme();
}

function ApplyCustomTheme() {
    //If There Is No Custom Theme Set To Default
    if (customTheme == "") {
        customTheme = "#ffffff#000000#ffffff#f0f0f0#000000#000000#f0f0f0#000000#f0f0f0#ffffff#000000#000000#ffffff#000000#000000||Default Custom||10,10,10,10,10,10,10,10,10,10,10,10,10,10,10";
    }

    customThemeArray = customTheme.split("|")
    if (customThemeArray.length >= 5) {
        opacities = customThemeArray[4].split(",")
    } else {
        opacities = [];
    }

    //Separate Information For Styling
    //console.log(getRGBA(customTheme.slice(0,7), opacities[0]))
    var back = getRGBA(customTheme.slice(0, 7), opacities[0])
    var border = getRGBA(customTheme.slice(7, 14), opacities[1]);
    var window = getRGBA(customTheme.slice(14, 21), opacities[2]);
    var mesback = getRGBA(customTheme.slice(21, 28), opacities[3]);
    var mestext = getRGBA(customTheme.slice(28, 35), opacities[4]);
    var messub = getRGBA(customTheme.slice(35, 42), opacities[5]);
    var headback = getRGBA(customTheme.slice(42, 49), opacities[6]);
    var headtext = getRGBA(customTheme.slice(49, 56), opacities[7]);
    var menuback = getRGBA(customTheme.slice(56, 63), opacities[8]);
    var inpback = getRGBA(customTheme.slice(63, 70), opacities[9]);
    var inptext = getRGBA(customTheme.slice(70, 77), opacities[10]);
    var inpbutton = getRGBA(customTheme.slice(77, 84), opacities[11]);
    var butback = getRGBA(customTheme.slice(84, 91), opacities[12]);
    var buttext = getRGBA(customTheme.slice(91, 98), opacities[13]);
    var butborder = getRGBA(customTheme.slice(98, 105), opacities[14]);


    function getRGBA(hexString, opacity) {
        if (opacity == undefined) {
            opacity = 10;
        }
        var rgb = hexToRgb(hexString)
        return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + (opacity / 10) + ")"
    }




    var backgroundName = customThemeArray[1];
    var themeName = customThemeArray[2];
    var audioChoice = customThemeArray[3];

    //Saves The Styles For Logo
    customBackgroundColor = back
    customBorderColor = border
    customMiddleColor = window
    customTextColor = mestext
    customMessageBackColor = mesback
    if (customTheme.slice(106) != "") {
        customBackImage = "url(" + backgroundName + ")";
    } else {
        customBackImage = "";
    }

    //Apply Theme
    changeTheme(window, mesback, mesback, back, headback, inpback, headtext, "2px solid " + border, butback, buttext, butborder, mestext, messub, border, inptext, "5px solid " + border, inpbutton, menuback, themeName);

    //Update Sharing code
    if (document.getElementById("outputcodebox") != null) {
        document.getElementById("outputcodebox").value = customTheme;
    }

    //Reset Theme Stuff
    var body = document.getElementById("body");
    body.style.backgroundImage = "";
    body.style.backgroundPosition = "center";
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
    if (customSound != undefined) {
        customSound.pause();
        customSound.currentTime = 0;
    }

    //If Background Image Is Here Apply It
    if (backgroundName != "") {
        body.style.backgroundImage = "url(" + backgroundName + ")";
    }

    //If Audio Choice Is Here Apply It
    if (audioChoice != "" && audioOn) {
        customSound = new Audio(audioChoice);
        customSound.play();
    }

    //Save Theme
    localStorage.setItem("HBChatCustom", customTheme)
    theme = -1;
    localStorage.setItem("HBChatTheme", theme);
}


//Copies The Sharing Code For The Theme
function CopySharingCode() {
    GenerateCustomTheme();
    var outputCodeBox = document.getElementById("outputcodebox")
    outputCodeBox.select();
    outputCodeBox.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    document.getElementById("copysharingbutton").innerHTML = "Copied";
    window.setTimeout(function () {
        if (document.getElementById("copysharingbutton") != undefined) {
            document.getElementById("copysharingbutton").innerHTML = "Copy Sharing Code";
        }
    }, 1000)
}


//Takes The Code Input To 'Use A Code' And Applies It
function ApplyCode() {
    var applyCodeInput = document.getElementById("applycodeinput")
    if (applyCodeInput.value.length >= 106 && applyCodeInput.value.includes("#") && applyCodeInput.value.includes("|")) {
        customTheme = applyCodeInput.value;
        SetupThemeBuilder()
        ApplyCustomTheme()
    } else {
        alert("Code Not Input Correctly")
    }
}


//Opens Theme Selection Menu
function OpenThemeMenu() {
    var cover = document.getElementById("logincover");
    var menu = document.getElementById("login");

    menu.style.width = "500px";
    menu.style.height = "510px";
    menu.style.marginTop = "-255px";
    menu.style.marginLeft = "-250px";
    menu.style.borderRadius = "10px";

    cover.style.display = "block";
    menu.style.display = "block";
}


//Closes The Theme Selection Menu
function CloseThemeMenu() {
    document.getElementById("logincover").style.display = "none";
    document.getElementById("login").style.display = "none";
}


//Converts rgb to hex or hex to rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


//Used To Store Different Themes For Use
function ThemeStorage(val) {
    //Reset Theme Stuff
    var body = document.getElementById("body");
    body.style.backgroundImage = "";
    body.style.backgroundPosition = "center";
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
    if (customSound != undefined) {
        customSound.pause();
        customSound.currentTime = 0;
    }
    console.log("Loading Theme " + val)

    //Apply New Themes
    //Mythril
    if (val == -1) {
        ApplyCustomTheme();
    } else if (val == 1) {
        changeTheme("#212121", "#2b2b2b", "#3b3b3b", "#2b2b2b", "#212121", "#212121", "lightgray", "2px solid #008db8", "#008db8", "white", "black", "white", "gray", "#008db8", "white", "6px solid black", "#008db8", "", "Mythril");
        //Overwatch
    } else if (val == 2) {
        changeTheme("#212121", "#2b2b2b", "#3b3b3b", "#2b2b2b", "#212121", "#212121", "lightgray", "2px solid #e77928", "#e77928", "white", "black", "white", "gray", "#e77928", "white", "6px solid black", "#e77928", "", "Overwatch");
    }
    //Dark Shamrock
    else if (val == 3) {
        changeTheme("#212121", "#2b2b2b", "#3b3b3b", "#2b2b2b", "#212121", "#212121", "lightgray", "2px solid #34d280", "#34d280", "#3a5886", "black", "#77efa8", "gray", "#34d280", "white", "6px solid black", "#34d280", "", "Dark Shamrock");
    }
    //Dark Rave
    else if (val == 4) {
        changeTheme("#212121", "#2b2b2b", "#3b3b3b", "#2b2b2b", "#212121", "#212121", "lightgray", "2px solid #ff00f2", "#ff4af6", "white", "black", "#ff4af6", "gray", "#ff4af6", "white", "6px solid black", "#ff4af6", "", "Dark Rave");
    }
    //Windows XP
    else if (val == 5) {
        changeTheme("white", "#f0f0f0", "#d3e5fb", "white", "#0f64d5", "white", "white", "3px solid #4e8df4", "#1a8f1a", "white", "#125031", "black", "darkslategray", "#0f64d5", "black", "6px solid #0f64d5", "#1a8f1a", "#0f64d5", "Windows XP");

        //Special Background
        body.style.backgroundImage = "url(pics/windowsxpbackground.jpg)";

        //Special Start Sound (Check Out HTML For The File Location)
        if (audioOn) {
            document.getElementById("winstart").play();
        }
    }
    //Trump
    else if (val == 6) {
        changeTheme("transparent", "rgba(43,43,43,0.8)", "rbga(0,0,0,0.8)", "#2b2b2b", "#212121", "#212121", "white", "2px solid #bf0a30", "#bf0a30", "white", "black", "#bf0a30", "#008db8", "#bf0a30", "#bf0a30", "6px solid black", "#bf0a30", "", "Donald Trump");

        //Special Background
        body.style.backgroundImage = "url(pics/trumpbackground.jpg)";
        body.style.backgroundPosition = "top";

        if (audioOn) {
            var random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    document.getElementById("dtamerica").play();
                    break;
                case 1:
                    document.getElementById("dtchina").play();
                    break;
                default:
                    document.getElementById("dtbuildwall").play();
                    break;
            }
        }
    }
    //Walnut
    else if (val == 7) {
        changeTheme("#d09664", "rgba(0,0,0,0.6)", "rbga(0,0,0,0.4)", "#d09664", "#653418", "#d09664", "white", "2px solid black", "#653418", "white", "black", "white", "#d09664", "#653418", "#653418", "6px solid black", "#653418", "#653418", "Walnut");

        //Special Background
        body.style.backgroundImage = "url(pics/walnut.jpeg)";
        body.style.backgroundPosition = "top";
    }
    //Majora's Mask
    else if (val == 8) {
        changeTheme("rgba(87,0,174,0.5)", "rgb(22,37,169)", "rgba(22,37,169, 0.8)", "rgb(87,0,174)", "rgb(98,0,196)", "rgba(112,0,223,0.7)", "rgb(0,221,0)", "2px solid rgba(58,0,117,1)", "rgb(0,151,0)", "#ffffff", "rgb(53,0,106)", "rgb(0,221,0)", "rgb(0,221,0)", "rgb(58,0,117)", "rgb(0,221,0)", "5px solid rgb(58,0,117)", "rgba(0,151,0,0.8)", "rgba(0,0,0,0.1)", "Majora's Mask");

        //Special background
        body.style.backgroundImage = "url(pics/majora.jpg)";

        //Special Start Sound (Check Out HTML For The File Location)
        if (audioOn) {
            document.getElementById("majora").play();
        }
    }
    //Doggo
    else if (val == 9) {
        changeTheme("rgba(255,255,255,0.5)", "rgb(192,192,192)", "rgba(192,192,192, 0.8)", "rgb(0,0,0)", "rgb(0,0,0)", "rgba(255,255,255,0.7)", "rgb(255,255,255)", "2px solid rgba(0,0,0)", "rgb(0,0,0)", "#ffffff", "rgba(255,255,255,0.7)", "rgb(255,255,255)", "rgb(47,79,79)", "rgb(0,0,0)", "rgb(204,11,16)", "5px solid rgb(0,0,0)", "rgba(0,0,0,0.8)", "rgba(255,255,255,0.1)", "Doggo");

        //Special background
        body.style.backgroundImage = "url(pics/doggo.gif)";
    }
    //Your Name
    else if (val == 10) {
        changeTheme("rgba(21,138,255,0.4)", "rgb(22,40,64)", "rgba(22,40,64, 0.8)", "rgb(22,40,64)", "rgb(22,40,62)", "rgba(22,40,62,0.5)", "rgb(210,1,216)", "2px solid rgba(224,2,240)", "rgba(21,138,255,0.9)", "#000000", "rgb(190,2,196)", "rgb(21,138,255)", "rgb(0,117,234)", "rgb(224,2,230)", "rgb(21,138,255)", "5px solid rgb(224,2,230)", "rgba(22,40,64,0.5)", "rgba(0,0,0,0.2)", "Your Name");

        //Special background
        body.style.backgroundImage = "url(pics/yourname.gif)";

        //Special Start Sound (Check Out HTML For The File Location)
        if (audioOn) {
            document.getElementById("yourname").play();
        }
    }
    //Classic Light
    else {
        changeTheme("white", "#f0f0f0", "lightgray", "white", "#f2f2f2", "white", "black", "2px solid black", "white", "black", "black", "black", "darkslategray", "black", "black", "6px solid black", "red", "", "Classic Light");

    }

    //Saves Theme Number For Reload Of Page.
    localStorage.setItem("HBChatTheme", val);
    theme = val;
}


//Does All The Processing To Turn the Page Into The Theme
function changeTheme(mainBackgroundColor, messageBackgroundColor, yourMessageBackgroundColor, docBackgroundColor, headerBackgroundColor, inputBackgroundColor, headerTextColor, headerLine, buttonColor, buttonTextColor, buttonBorderColor, messageTextColor, messageSubTextColor, mainBorderColor, inputTextColor, inputBorder, inputButtonColor, menuHeaderBackground, themeName) {
    //CSS
    document.getElementById("themestyle").innerHTML = ".message, .fakemessage{background-color:" + messageBackgroundColor + ";color:" + messageTextColor + ";}.desctext{color:" + messageTextColor + "}body, #login, #logincover{background-color:" + docBackgroundColor + ";}.mine, .fakemessage{background-color:" + yourMessageBackgroundColor + ";}.time, .name{color:" + messageSubTextColor + ";}#main{background-color:" + mainBackgroundColor + ";border-color:" + mainBorderColor + ";}.button{background-color:" + buttonColor + ";color:" + buttonTextColor + ";border-color:" + buttonBorderColor + ";}footer{border:" + inputBorder + ";}#input,#inputcover{background-color:" + inputBackgroundColor + ";}#input, #username, #lblusername{color:" + inputTextColor + ";}#inputbutton{background-color:" + inputButtonColor + ";}h2, #head{color:" + headerTextColor + ";}#head{background-color:" + headerBackgroundColor + ";border-bottom:" + headerLine + "}#themeheader, .themehead{background-color:" + menuHeaderBackground + ";}.headercolor{color:" + headerTextColor + "}#myDropdown a{color:" + buttonTextColor + ";background-color:" + buttonColor + ";}#minimenubutton{background-color:" + mainBorderColor + ";}#login{border-color:" + mainBorderColor + "}.creatorbox input, .inputarea{background-color:" + mainBackgroundColor + ";border-color:" + mainBorderColor + ";color:" + messageTextColor + ";}#dragheader, .bordercolor{background-color:" + mainBorderColor + "}"


    document.getElementById("scroll2").innerHTML = themeName;
}
