// DOM element selections
let dayMode = true
const homePage = document.querySelector(".container");
const gpaPage = document.querySelector(".calculate-gpa");
const cgpaPage = document.querySelector('.calculate-cgpa');
const aboutPage = document.querySelector(".about-page")
const gpaReportsOverlay = document.querySelector(".gpa-reports-overlay");
const gpaReports = document.querySelector(".gpa-reports");
const cgpaReportsOverlay = document.querySelector(".cgpa-reports-overlay");
const cgpaReports = document.querySelector(".cgpa-reports");
const showGpa = document.querySelector(".show-gpa");
const showCgpa = document.querySelector(".show-cgpa");
const gpa = document.querySelector(".gpa");
const cgpa = document.querySelector(".cgpa");
const evaluator = document.querySelector(".evaluator");
const cgpaEvaluator = document.querySelector('.cgpa-evaluator');
let gpaError = document.querySelector(".error-reports");
let cgpaError = document.querySelector(".error-cgpa-reports");
var courseAmount = document.getElementById("courseAmount");
var gpaGrade = document.getElementById("gpa-grade");
var gpaUnit = document.getElementById("gpa-unit");
var gpaCourseContainer = document.querySelector(".gpa-scroll");
var semesterAmount = document.getElementById("semesterAmount");
var cgpaSemesterContainer = document.querySelector(".cgpa-semester-container");
let toggleMenu = document.querySelector(".toggle-menu");
var header = document.querySelector("#header")


// Function to adjust the menu position
function adjustMenuPosition() {
    
    // Get the actual height of the header
    var headerHeight = header.offsetHeight;

    // Set the top position of the menu right beneath the header
    toggleMenu.style.top = headerHeight + 'px';
}

// Call the function when the window loads and when it resizes
window.onload = adjustMenuPosition;
window.onresize = adjustMenuPosition;


// Function to toggle menu
function myMenu() {
    toggleMenu.style.height = toggleMenu.style.height === "0px" ? "300px" : "0px";
}

// Function to switch menu icon
function switchMenu() {
    let top = document.querySelector(".top");
    let mid = document.querySelector(".mid");
    let bottom = document.querySelector(".bottom");
    if (mid.style.display === "block") {
        mid.style.display = "none";
        top.style.transform = "rotate(45deg)";
        bottom.style.transform = "rotate(-45deg)";
    }
}

// Function to switch between night and light mode
function nightMode() {

    let root = document.documentElement;
    let switcher = document.querySelector(".switcher")
    let switchContainer = document.querySelector(".switch-container")
    if (dayMode === true) {
        switcher.style.left = 30
        switcher.classList.add("switcherBackground")
        switchContainer.classList.add("toggleNightMode")
        root.style.setProperty('--white', "#000");
        root.style.setProperty("--black", "#fff");
        root.style.setProperty("--transMenu", "rgba(0,0,0,0.9)");
        dayMode = false;
    } else {
        switcher.style.left = 1
        switchContainer.classList.remove("toggleNightMode")
        switcher.classList.remove("switcherBackground")
        root.style.setProperty('--white', "#fff");
        root.style.setProperty("--black", "#000");
        root.style.setProperty("--transMenu", "rgba(255,255,255,0.9)");
        dayMode = true;
    }
    let toggleMenu = document.querySelector(".toggle-menu");
    //toggleMenu.style.height = "0px";
}

// Function to show GPA calculation page
function calculateGPA() {
    homePage.style.display = "none";
    cgpaPage.style.display = "none";
    aboutPage.style.display = "none"
    gpaPage.style.display = "flex";
    let toggleMenu = document.querySelector(".toggle-menu");
    toggleMenu.style.height = "0px";
}

// Function to show CGPA calculation page
function calculateCgpa() {
    homePage.style.display = "none";
    gpaPage.style.display = "none";
    aboutPage.style.display = "none"
    cgpaPage.style.display = "flex";
    let toggleMenu = document.querySelector(".toggle-menu");
    toggleMenu.style.height = "0px";
}
function openAboutPage() {
    homePage.style.display = "none";
    cgpaPage.style.display = "none";
    gpaPage.style.display = "none";
    aboutPage.style.display = "flex"
    let toggleMenu = document.querySelector(".toggle-menu");
    toggleMenu.style.height = "0px";
}
// Function to return to the index page
function indexPage() {
    if (gpaPage.style.display === "flex" || cgpaPage.style.display === "flex" || aboutPage.style.display === "flex") {
        gpaPage.style.display = "none";
        cgpaPage.style.display = "none";
        aboutPage.style.display = "none"
        homePage.style.display = "flex";
    }
    let toggleMenu = document.querySelector(".toggle-menu");
    toggleMenu.style.height = "0px";
}

// Function to add GPA input rows
function addGpaRows() {
    gpaCourseContainer.innerHTML = null;
    for (let i = 0; i < courseAmount.value; i++) {
        let courseDiv = document.createElement("div");
        courseDiv.classList.add("gpa-course");
        courseDiv.innerHTML = `
            <input type="text" placeholder="Course name (optional)" class="course-name">
            <select id="gpa-unit">
                <option selected disabled>Units</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <select id="gpa-grade">
                <option selected disabled>Grade</option>
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
            </select>
            <span class="remove"><img src="IMG/delete.png" alt=""></span>
        `;
        gpaCourseContainer.appendChild(courseDiv);
    }
}

// Function to update course selector based on child element count
function updateSelector() {
    courseAmount.value = gpaCourseContainer.childElementCount;
}

// Function to add CGPA input rows
function addCgpaRows() {
    cgpaSemesterContainer.innerHTML = null;
    for (let i = 0; i < semesterAmount.value; i++) {
        let semesterDiv = document.createElement("div");
        semesterDiv.classList.add("cgpa-semester");
        semesterDiv.innerHTML = `
            <input type="text" placeholder="Semester (optional)" class="semester-name">
            <input type="number" class="cgpa-gpa semester-gpa" placeholder="GPA" step="0.01" min="0" max="5">
            <input type="number" class="cgpa-units" placeholder="Total Units" min="0">
            <span class="remove"><img src="img/delete.png" alt=""></span>
        `;
        cgpaSemesterContainer.appendChild(semesterDiv);
    }
}

// Function to update semester selector based on child element count
function updateSemesterSelector() {
    semesterAmount.value = cgpaSemesterContainer.childElementCount;
}

// Event listener to handle removal of rows and updating selectors
document.addEventListener("click", function(event) {
    if (event.target.closest(".remove")) {
        const row = event.target.closest(".gpa-course") || event.target.closest(".cgpa-semester");
        if (row) row.remove();
    }
    if (gpaCourseContainer.childElementCount >= 1) updateSelector();
    else courseAmount.selectedIndex = 0;

    if (cgpaSemesterContainer.childElementCount >= 1) updateSemesterSelector();
    else semesterAmount.selectedIndex = 0;
});

// Function to evaluate GPA
function evaluateGpa() {
    let totalPoints = 0;
    let totalUnits = 0;
    const gpaCourses = document.querySelectorAll(".gpa-course");

    gpaCourses.forEach(course => {
        const grade = parseFloat(course.querySelector("#gpa-grade").value);
        const units = parseInt(course.querySelector("#gpa-unit").value);

        if (!isNaN(grade) && !isNaN(units)) {
            totalPoints += grade * units;
            totalUnits += units;
        }
    });

    if (totalUnits === 0) {
        gpaError.innerText = "Please fill in the grade and units correctly for each course.";
        evaluator.classList.add("animate-error");
        setTimeout(() => evaluator.classList.remove("animate-error"), 1000);
        setTimeout(() => gpaError.innerText = "", 3000);
        return;
    }

    const gpaValue = totalPoints / totalUnits;
    const gpaDisplayer = document.createElement("div");
    gpaDisplayer.setAttribute("class", "gpa-displayer");
    gpaDisplayer.innerText = gpaValue.toFixed(2);
    showGpa.innerText = `Your GPA is `;
    showGpa.appendChild(gpaDisplayer);
}

// Function to evaluate CGPA
function evaluateCgpa() {
    let totalPoints = 0; // Initialize total grade points for CGPA
    let totalUnits = 0;  // Initialize total credit units for CGPA

    // Get all semester rows
    const cgpaSemesters = document.querySelectorAll(".cgpa-semester");

    // Iterate over each semester row
    cgpaSemesters.forEach(semester => {
        const gpa = parseFloat(semester.querySelector(".cgpa-gpa").value);
        const units = parseInt(semester.querySelector(".cgpa-units").value);

        if (!isNaN(gpa) && !isNaN(units)) {
            totalPoints += gpa * units; // Calculate the points for this semester and add to total points
            totalUnits += units; // Add the units to total units
        }
    });

    if (totalUnits === 0) {
        cgpaError.innerText = "Please fill in the GPA and units correctly for each semester.";
        cgpaEvaluator.classList.add("animate-error");
        setTimeout(() => {
            cgpaEvaluator.classList.remove("animate-error");
        }, 1000);
        setTimeout(() => {
            cgpaError.innerText = "";
        }, 3000);
        return;
    }

    const cgpaValue = totalPoints / totalUnits; // Calculate the CGPA
    const cgpaDisplayer = document.createElement("div");
    cgpaDisplayer.setAttribute("class", "gpa-displayer");
    cgpaDisplayer.innerText = cgpaValue.toFixed(2);
    
    // Assuming showCgpa is a DOM element where you want to display the CGPA
    showCgpa.innerText = `Your CGPA is `;
    showCgpa.appendChild(cgpaDisplayer);

    return cgpaValue;
}

