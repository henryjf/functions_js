// ---------------------
// Define a function max() that takes two numbers as arguments and 
//returns the largest of them.  Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){ 
	if (num1 > num2) return num1;
		else return num2;   
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments
// and returns the largest of them.
// ---------------------

function maxOfThree(input1, input2, input3) {
	var max = Math.max(input1, input2, input3);
	return max; 
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and 
//returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){ 
	var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
	if (char===vowel) return true;
	else return false;  
}
// this in the console is undefined, but I am unable to get it to return a true value



// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". 
//That is, double every consonant and place an occurrence of "o" in between. 
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){

    
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and 
//returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var longestWord = [the, best, mango, adjust, persons].length;
    return longestWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an 
//integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    var longWords = [the, best, mango, adjust, i]
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing 
//of the characters contained in it. Represent the frequency listing as a Javascript object. 
//Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
