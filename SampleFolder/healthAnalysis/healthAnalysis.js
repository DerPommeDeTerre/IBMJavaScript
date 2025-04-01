 const addPatientButton = document.getElementById("addPatient");
 const report = document.getElementById("report");
 const btnSearch = document.getElementById("btnSearch");
 const patients = [];

 function addPatient(){
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name = "gender"]:checked').value;
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if(name && gender && age && condition){
        patients.push({name, gender, age, condition});
        resetForm();
        generateReport();
    }
 }

 function resetForm(){
    document.getElementById("name").value = "";
    document.querySelector('input[name = "gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
 }

 function generateReport(){
    const numPatients = patients.length;
    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0
    };

    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0
        },
        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0
        },
    }

    for(const patient of patients){
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown: <br>`;
    for(const condition in conditionsCount){
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender-Based Conditions: <br>`;
    for (const gender in genderConditionsCount){
        report.innerHTML += `${gender}:<br>`;
        for(const condition in genderConditionsCount[gender]){
            report.innerHTML += `&#160;&#160;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }

 }

 addPatientButton.addEventListener("click", addPatient);

 function searchCondition(){
    const input  = document.getElementById("conditionInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    fetch("healthAnalysis.json")//requests the healthAnalysis.json file
    .then(function(response){//.then is a PROMISE, response is the server's response
        return response.json();//converts the response into a .json as teh response is an object
    })
    .then(function(data){//runs after the response finishes, data holds the parsed .json
        const condition = data.conditions.find(function(item){//find loops through the conditions array
            return item.name.toLowerCase() === input;//the input variable is up
        })

        if(condition){
            const symptoms = condition.symptoms.join(", ");
            const prevention = condition.prevention.join(", ");
            const treatment = condition.treatment;
    
            resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
            resultDiv.innerHTML += `<img src = "${condition.imagesrc}" alt = "hjh">`;
    
            resultDiv.innerHTML += `<p><strong>Symptoms: </strong> ${symptoms}</p>`;
            resultDiv.innerHTML += `<p><strong>Prevention: </strong> ${prevention}</p>`;
            resultDiv.innerHTML += `<p><strong>Treatment: </strong> ${treatment}</p>`;
        } else {
            resultDiv.innerHTML = "Condition not found.";
        }
    })
    .catch(function(error){
        console.error("Error", error);
        return resultDiv.innerHTML = "An error ocurred while fetching data.";
    });
 }
 btnSearch.addEventListener("click", searchCondition);