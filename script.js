//getting the element object
const checkBtn = document.getElementById("check-btn"); 
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const divResult = document.getElementById("div-result");

/*When click on the #check-btn element without entering a value in input, 
display: alert with message "Please input a value"
*/
//using arrow function 
checkBtn.addEventListener("click",()=>{
    if (textInput.value.trim() === "") {
        alert("Please input a value");
        return;
    } 
    else {
        const isPalindrome = palindromeChecker(textInput.value.toLowerCase());
        resultDisplay(isPalindrome);
    }
});


//result message to display
//takes bool as argument 
//display message based on the argument
const resultDisplay = (isPalindrome) =>{
    if(isPalindrome)
    {
        divResult.style.display= "block";
        return result.innerHTML=`<strong>${textInput.value}</strong> is a palindrome`; 
    }else 
    {
        divResult.style.display= "block";
        return result.innerHTML=`<strong>${textInput.value}</strong> is not a palindrome`; 
    }
}

//remove the all non-alphanumberi characters 
const removeAllNonAlphanumbericCharacters = (text)=> text.replace(/[^a-zA-Z0-9]/g,'') ;

// check if text is palindrome or not 
//compare reverse text with original text
//if reverse text equals original text then return true else false
const palindromeChecker = (text) => {
    const cleanText = removeAllNonAlphanumbericCharacters(text.trim()); 
    const reverseText = [...cleanText].reverse().join('');

    if(reverseText===cleanText)
    {
        return true;
    }

  /*  const cleanText = removeAllNonAlphanumbericCharacters(text.trim());
     let reverseText=''; 
    for(let i= cleanText.length-1; i>=0; i--)
    {
        reverseText += cleanText[i];
    }
    if(reverseText===cleanText)
    {
        return true; 
    }
        
*/
    return false; 
}