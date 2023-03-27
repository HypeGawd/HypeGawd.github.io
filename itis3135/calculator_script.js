// Get the result input element
const result = document.getElementById("result");

// Function to insert a character into the result
function insertChar(char) 
{
    result.value += char;
}

// Function to clear the result
function clearResult() 
{
    result.value = "";
}

// Function to delete the last character in the result
function deleteChar() 
{
    result.value = result.value.slice(0, -1);
}

// Function for the calculation
function calculate() 
{
    const expression = result.value;

    try 
    {
        result.value = eval(expression);
    } 
    catch (error) 
    {
        result.value = "";
    }
}
