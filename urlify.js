function urlify(){

    loweredTitle = document.getElementById("titleInput").value.toString().toLowerCase();
    console.log(loweredTitle)

    var url = ""

    unsafeChars = ['"', '#', '$', '%', '&', '+',
                    ',', '/', ':', ';', '=', '?',
                    '@', '[', '\\', ']', '^', '`', '’',
                    '{', '|', '}', '~', "'", "«", "»"]
    

    accentChars = {
                    "à": "a",
                    "â": "a", 
                    "ä": "a", 
                    "è": "e", 
                    "é": "e", 
                    "ê": "e", 
                    "ë": "e", 
                    "î": "i", 
                    "ï": "i", 
                    "ô": "o", 
                    "œ": "oe", 
                    "ù": "u", 
                    "û": "u", 
                    "ü": "u", 
                    "ÿ": "y", 
                    "ç": "c"
                    }

    for (var i = 0; i < loweredTitle.length; i++){
        //Checks if the character is considered unsafe
        if(loweredTitle[i] in unsafeChars){
            if(loweredTitle.indexOf(loweredTitle[i]) == loweredTitle.length - 1){
                break;
            }
            else{
                url += "-";
            }
        }
        //Checks if the character is accented
        else if(loweredTitle[i] in accentChars){
            url += accentChars[loweredTitle[i]];
            }
        else if(loweredTitle[i] == " "){
            url += "-";
        }
        else{
            url += loweredTitle[i];
        }
        } 
    
    document.getElementById("urlOutput").value = url;
    
    return url;

    }
