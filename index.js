function sayMyName(name){
    
    if(name.search(/[^A-Za-z\s]/) != -1)
        throw "Invalid name"
    
    return name
}

console.log(sayMyName(name="rad"))

//Adding some new features here
supported_databases = ["mssql"]
function switchDatabase(database_name){
    if(!supported_databases.includes(database_name))
    {
        console.log("the database is not support")
    }
    else if(database_name="mssql"){
        console.log("print mssql")
    }
    else{
        console.log("Please provide appropriate database name")
    }
    
}

switchDatabase("mssq1l")