function sayMyName(name){
    
    if(name.search(/[^A-Za-z\s]/) != -1)
        throw "Invalid name"
    
    return name
}

console.log(sayMyName(name="rad"))

//Adding some new features here



supported_databases = ["mssql","cosmos","mongodb","postgress"]



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

    else if(database_name=="cosmos"){
        console.log("print cosmos")

    }
    else if(database_name=="postgress"){
        console.log("print postgress")
    }
    else{
        console.log("Please provide appropriate database name")
    }
    
}

function updated(){
    console.log("updated")
}
switchDatabase("cosmos")

function make_tea(){
    console.log("making tea")
}

