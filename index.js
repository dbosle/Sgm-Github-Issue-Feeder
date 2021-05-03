

let token = ""; //Githup token
let username = ''; //Github UserName
let repo = ''; //Repo name
let url = "https://api.github.com/repos/" + username + "/" + repo + "/issues";
 
 
function addField (argument) {
    var myTable = document.getElementById("myTable");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var entgrator = document.createElement("input");
    entgrator.setAttribute("name", i );

    var xml_ = document.createElement("input");
    xml_.setAttribute("name", j);

    var desc = document.createElement("input");
    desc.setAttribute("name", k );

    var addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "addParams");
    addRowBox.setAttribute("onclick", "addField();");
    addRowBox.setAttribute("class", "addParams");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(entgrator);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(xml_);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(desc);
    i++;
    j++;
    k++;
}



var textArea = '';
var issueName = '';

function saveValues() {
  

    var frm = document.form1;
    var tbl1 = document.getElementById("myTable");
    
    frm.textarea1.value = '';

    issueName = frm.i_name.value;
    var accountId = frm.i_a_id.value;
    var apiKey = frm.i_apikey.value;
    var server = frm.i_server.value;
    var accountName = frm.i_aName.value;
    var xmlStatus = frm.xml_use.checked;

    frm.textarea1.value += "**Account ID:** " + accountId + "\n";
    frm.textarea1.value += "**Account Name:** " + accountName + "\n";
    frm.textarea1.value += "**Api Key:** " + apiKey + "\n";
    frm.textarea1.value += "**Server:** " + server + "\n";
    frm.textarea1.value += "**XML kullanılıyor mu? - ** " + (xmlStatus ? "Evet" : "Hayır");
    frm.textarea1.value += "\n\n"; 

    for(let p=3; p<=12 ; p++){
        let query1 = "#myTable > tbody > tr > td:nth-child(1) > input:nth-child(" + p + ")";
        if(document.querySelector(query1).value!="" && document.querySelector(query1).value!=null ){
            frm.textarea1.value += document.querySelector(query1).value;
            frm.textarea1.value+= " -> " ;
        }

        let query2 = "#myTable > tbody > tr > td:nth-child(2) > input:nth-child(" + p + ")";
        if(document.querySelector(query2).value!="" && document.querySelector(query2).value!=null ){
        frm.textarea1.value += document.querySelector(query2).value;
        frm.textarea1.value+= " // " ;
        }
        let query3 = "#myTable > tbody > tr > td:nth-child(3) > input:nth-child(" + p + ")";
        if(document.querySelector(query3).value!="" && document.querySelector(query3).value!=null ){
            frm.textarea1.value += document.querySelector(query3).value;
            frm.textarea1.value+= "\n" ;
        }
    }
    textArea = frm.textarea1.value;

    //send to github
    postIssue(issueName, textArea);
}

async function postIssue(issueName, data){

    var context = {
        "title" : issueName,
        "body" : data,
    };

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(context),
        headers:{
            'Authorization' : 'token ' + token,
            'Content-Type': 'application/json'
        }
    });
    
    if(response.ok){
        console.log("OK - Success");
    }
    else{
        console.log("ERR - Error");
    }

}


function resetValues(){
    document.getElementById("form1").reset();
}
