const qlokCompany = document.getElementById("qlok-comapny");
const qlokTitle = document.getElementById("qlok-title");
const kravComapany = document.getElementById("krav-comapny");
const kravTitle = document.getElementById("krav-title");

async function getCV() {
    // lägg api länk inom ()
    const respone = await fetch("cv.json"); 
    if(respone.ok) {
        const json = await respone.json()

        qlokCompany.textContent = json.workExperience[0].company;
        qlokTitle.textContent = json.workExperience[0].title;

        kravCompany.textContent = json.workExperience[1].company;
        kravTitle.textContent = json.workExperience[1].title;

    } else {
        console.log("HTTP-error: " + respone.status);
    }
}

getCV();