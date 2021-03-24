function sayMyName(name){
    
    if(name.search(/[^A-Za-z\s]/) != -1)
        throw "Invalid name"
    
    return name
}

console.log(sayMyName(name="rad"))

//Adding some new features here
function mongodb(){
    console.log("printing data into mongodb")
}

function cosmosdb(){
    console.log("printing data into cosmosdb")
}