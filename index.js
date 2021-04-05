function sayMyName(name){
    
    if(name.search(/[^A-Za-z\s]/) != -1)
        throw "Invalid name"
    
    return name
}

console.log(sayMyName(name="rad"))

//Adding some new features here

supported_databases = ["mssql","cosmosdb","mongodb"]

function switchDatabase(database_name){
    if(!supported_databases.includes(database_name))
    {
        console.log("the database is not support")
    }
    else if(database_name=="mssql"){
        console.log("print mssql")
    }

    else if(database_name=="mongodb"){
        console.log("print mssql")

    else if(database_name=="cosmosdb"){
        console.log("print cosmosdb")

    }
    else{
        console.log("Please provide appropriate database name")
    }
    
}


switchDatabase("cosmosdb")

