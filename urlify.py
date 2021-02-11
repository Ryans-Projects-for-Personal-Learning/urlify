#This is the python version of the script. You may also use this if you prefer that instead.

def urlify(title):
    
    #makes url lower case
    loweredTitle = title.lower()
    
    url = ""
    
    unsafeChars = ['"', '#', '$', '%', '&', '+',
                    ',', '/', ':', ';', '=', '?',
                    '@', '[', '\\', ']', '^', '`',
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
    
    for char in loweredTitle:
        if char in unsafeChars:
            if title.index(char) == len(title)-1:
                break
            else:
                url += "-"
        elif char in accentChars:
            url += accentChars.get(char)
        else:
            url += char
    
    result = url.replace(" ","-")
    
    return result
