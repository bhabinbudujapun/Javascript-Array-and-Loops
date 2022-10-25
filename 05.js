// Change each company name to uppercase one by one and print them out

let uppercase = (bigCompanies) =>{
    for(let company of bigCompanies){
        console.log(company.toUpperCase());
    }
}


let bigCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle'];

uppercase(bigCompanies);