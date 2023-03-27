//Javascript Code for Navbar
$(function () {
    console.log("made it here")
    console.log(location.pathname);
    console.log(location.pathname.split("/").splice(-1))
    
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Example Introduction"
        },
        "3": {
            "url": "tabels.html",
            "text": "Tabels",
            "alt": "Example Tabels"
        },
        "4": {
            "url": "form.html",
            "text": "Form",
            "alt": "Example Form"
        },
        "5": {
            "url": "contract.html",
            "text": "Contract",
            "alt": "Example Contract"
        },
        "6": {
            "url": "website_evaluations.html",
            "text": "Website Evaluations",
            "alt": "Example Website Evaluations"
        }
    };

    const linkSeperator = " | ";
    let htmlString = "";

    for(var id in links){
        if(pathname === links[id]['url']){
            htmlString += links[id]['text'];
        }
        else{
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(links).length){
            htmlString += linkSeperator;
        }
    }

    $('#siteLinks').html(htmlString);
});