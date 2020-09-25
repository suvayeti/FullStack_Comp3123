var http = require("http");
var emp=require('./Employee')
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
//TODO - Fix any errors you found working with lab exercise
//Define Server Port
const port = process.env.PORT || 8081
//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
            var newList=[]
            var totSalary=0
            var z=0
            for (let i of emp.employees){
                newList[z]= i.firstName +" " + i.lastName
                totSalary += i.Salary
                z+=1
            }
            newList.sort()
        if (req.url === '/') {
            res.end("<h1>Welcome to Lab Exercise 03</h1>")
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        }

        if (req.url === '/employee') {
            res.end(JSON.stringify(emp))
            //TODO - Display all details for employees in JSON format
        }

        if (req.url === '/employee/names') {           
            res.end(JSON.stringify(newList))
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        }

        if (req.url === '/employee/totalsalary') {
            res.end(JSON.stringify({"total_salary":totSalary}))
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
        } 
     }
     res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})