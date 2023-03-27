//function to see if user input is a number
function validateEntry(input) 
{
    if (isNaN(input)) 
    {
      return "Please enter a number.";
    }
}

//function to display what shape it is
function getShape(numSides) 
{
    numSides = Math.round(Math.abs(numSides));
    switch (numSides) 
    {
        case 1:
            return "Line";
        case 2:
            return "Digon";
        case 3:
            return "Triangle";
        case 4:
            return "Square";
        case 5:
            return "Pentagon";
        case 6:
            return "Hexagon";
        case 7:
            return "Heptagon";
        case 8:
            return "Octagon";
        case 9:
            return "Nonagon";
        case 10:
            return "Decagon";
        default:
            return "Polygon with " + numSides + " sides"
    }
}

//function for form submission
function handleSubmit(event) 
{
    event.preventDefault();
    let input = document.getElementById("number").value;
    let errorMessage = validateEntry(input);
    if (errorMessage)
    {
        alert(errorMessage);
    }
    else
    {
        let numSides = Math.round(Math.abs(input));
        let shape = getShape(numSides);
        alert("The shape with " + numSides + " sides is a " + shape + ".");
    }
}

//add event listener to form submission
let form = document.getElementById("shapeForm");
form.addEventListener("submit", handleSubmit);