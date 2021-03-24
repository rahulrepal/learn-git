function sayMyName(name){
    
    if(name.search(/[^A-Za-z\s]/) != -1)
        throw "Invalid name"
    
    return name
}

console.log(sayMyName(name="rad"))

//Adding some new features here
