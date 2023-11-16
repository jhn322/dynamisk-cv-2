// The goal of this JavaScript file:
// 1) Retrieve elements for 1st and 2nd job from HTML, year, company, title, description.
// 2) Fetch the work experience from the JSON file which includes all properties (title, year etc).
// 3) Retrieve elements for 1st, 2nd, 3rd and 4th education from HTML, year, school, title.
// 4) Fetch the school experience from the JSON file which includes all properties (education, year etc).
// 8) Display JSON CV info on the specific tab of the webpage.

// Retrieving Id from cv.html for each job and education
const job1Year = document.getElementById("job1-year");
const job1Company = document.getElementById("job1-company");
const job1Title = document.getElementById("job1-title");
const job1Description = document.getElementById("job1-description");

const job2Year = document.getElementById("job2-year");
const job2Company = document.getElementById("job2-company");
const job2Title = document.getElementById("job2-title");
const job2Description = document.getElementById("job2-description");

const education1Year = document.getElementById("education1-year");
const education1School = document.getElementById("education1-school");
const education1Title = document.getElementById("education1-title");

const education2Year = document.getElementById("education2-year");
const education2School = document.getElementById("education2-school");
const education2Title = document.getElementById("education2-title");

const education3Year = document.getElementById("education3-year");
const education3School = document.getElementById("education3-school");
const education3Title = document.getElementById("education3-title");

const education4Year = document.getElementById("education4-year");
const education4School = document.getElementById("education4-school");
const education4Title = document.getElementById("education4-title");

// A function to fetch and display the CV info from JSON file.
async function getCV() {
    const response = await fetch("../json/cv.json");
    if (response.ok) {
        const json = await response.json();

        // Assigning a variable to the corresponding HTML elements for each category and for each job and education & first array begins.
        job1Year.textContent = json.workExperience[0].year;
        job1Company.textContent = json.workExperience[0].company;
        job1Title.textContent = json.workExperience[0].title;
        job1Description.textContent = json.workExperience[0].description;

        // Second object in the first array.
        job2Year.textContent = json.workExperience[1].year;
        job2Company.textContent = json.workExperience[1].company;
        job2Title.textContent = json.workExperience[1].title;
        job2Description.textContent = json.workExperience[1].description;

        // Second array begins.
        education1Year.textContent = json.schoolExperience[0].year;
        education1School.textContent = json.schoolExperience[0].school;
        education1Title.textContent = json.schoolExperience[0].education;

        education2Year.textContent = json.schoolExperience[1].year;
        education2School.textContent = json.schoolExperience[1].school;
        education2Title.textContent = json.schoolExperience[1].education;

        education3Year.textContent = json.schoolExperience[2].year;
        education3School.textContent = json.schoolExperience[2].school;
        education3Title.textContent = json.schoolExperience[2].education;

        // Last items in the second array.
        education4Year.textContent = json.schoolExperience[3].year;
        education4School.textContent = json.schoolExperience[3].school;
        education4Title.textContent = json.schoolExperience[3].education;

        // Logging error if fetch request failed.
    } else {
        console.log("HTTP-error: " + response.status);
    }
}

// Starting the function
getCV();
