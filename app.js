function sentence(str) {
    var words = str.split(" ")
    var wordsCount = words.length;
    const vowels = ["a", "e", "i", "o"]
    var charCount = 0;
    var vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
       
        if(str[i] !== " ") {
            charCount += 1
        }
        for(let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                vowelCount += 1
            }
        }
    }
  
    console.log("chars: " + charCount)
    console.log("Words:" + wordsCount)
    console.log(vowelCount)
    
}
sentence("hello world")