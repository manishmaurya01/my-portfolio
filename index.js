document.getElementById("sidenav").style.display = "none";

function openNav() {
    setTimeout(() => {
        document.getElementById("sidenav").style.display = "block";
        document.querySelector(".open-btn").style.display = "none";
    }, 100);
    setTimeout(() => {
        document.getElementById("sidenav").style.left = '0';
        document.querySelector(".open-btn").style.display = "none";
        document.querySelector(".closebtn").style.display = "block";
        document.querySelector(".top-nav").style.display = "none";
    }, 200);
    
}

function closeNav() {
    document.getElementById("sidenav").style.left = '-60vw';
    document.querySelector(".open-btn").style.display = "block";
    document.querySelector(".closebtn").style.display = "none";
    document.querySelector(".top-nav").style.display = "block";
    setTimeout(() => {
        document.getElementById("sidenav").style.display = "none";
    }, 500);
}
// Get elements by ID for options
const AboutMeOption = document.getElementById('About-Me-Option');
const AboutSkillsOption = document.getElementById('About-Skills-Option');
const AboutEducationOption = document.getElementById('About-Education-Option');
AboutMeOption.style.color="var(--yclr)"
document.querySelector('.hr').width="30%"
// Add event listeners to options
AboutMeOption.addEventListener('click', displayOptMe);
AboutSkillsOption.addEventListener('click', displayOptSkills);
AboutEducationOption.addEventListener('click', displayOptEducation);

// Function to display 'About Me' option
function displayOptMe() {
    document.querySelector('.About-Me').style.display = 'block';
    document.querySelector('.About-skills').style.display = 'none';
    document.querySelector('.About-Education').style.display = 'none';
    document.querySelector('.hr').width="30%"
    AboutMeOption.style.color="var(--yclr)"
    AboutSkillsOption.style.color=""
    AboutEducationOption.style.color=""
}

// Function to display 'About Skills' option
function displayOptSkills() {
    document.querySelector('.About-Me').style.display = 'none';
    document.querySelector('.About-skills').style.display = 'block';
    document.querySelector('.About-Education').style.display = 'none';
    document.querySelector('.hr').width="55%"
    AboutSkillsOption.style.color="var(--yclr)"
    AboutMeOption.style.color=""
    AboutEducationOption.style.color=""
    // Get all progress elements
    const progressBars = document.querySelectorAll('.skill progress');

    // Iterate through each progress bar and animate the width increase
    progressBars.forEach((progressBar) => {
        const targetValue = parseFloat(progressBar.getAttribute('value'));
        let currentValue = 0;

        // Use setInterval to incrementally increase the progress value
        const interval = setInterval(() => {
            currentValue += 0.01; 
            progressBar.value = Math.min(currentValue, targetValue);

            // Stop the interval when the target value is reached
            if (currentValue >= targetValue) {
                clearInterval(interval);
            }
        }, 10); // You can adjust the interval duration as needed
    });
}

// Function to display 'About Education' option
function displayOptEducation() {
    document.querySelector('.About-Me').style.display = 'none';
    document.querySelector('.About-skills').style.display = 'none';
    document.querySelector('.About-Education').style.display = 'block';
    document.querySelector('.hr').width="100%"
    AboutEducationOption.style.color="var(--yclr)"
    AboutMeOption.style.color=""
    AboutSkillsOption.style.color=""
     // Get all progress elements
     const progressBars = document.querySelectorAll('.edu progress');

     // Iterate through each progress bar and animate the width increase
     progressBars.forEach((progressBar) => {
         const targetValue = parseFloat(progressBar.getAttribute('value'));
         let currentValue = 0;
 
         // Use setInterval to incrementally increase the progress value
         const interval = setInterval(() => {
             currentValue += 0.01; 
             progressBar.value = Math.min(currentValue, targetValue);
 
             // Stop the interval when the target value is reached
             if (currentValue >= targetValue) {
                 clearInterval(interval);
             }
         }, 10); // You can adjust the interval duration as needed
     });
}


document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7Ne-XjxLQw7GZpCMB516QCrJsjzoh4UDHA&s";
const moon = "https://www.freeiconspng.com/thumbs/moon-icon/moon-icon-5.jpg"

var theme = "dark";
  const root = document.querySelector(":root");
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  container.addEventListener("click", setTheme);
  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
    root.style.setProperty("--bs-dark", "#14101c"); /* Corrected value for dark background */
    root.style.setProperty("--bclr", "#f0f0f1e5");
    root.style.setProperty("--footer", "rgb(9, 155, 188)");
    root.style.setProperty("--wclr", "#000000");
    root.style.setProperty("--wbkg", "#ffffff"); /* Corrected value for light text color */
    root.style.setProperty("--nav", "rgb(40, 69, 68)");
    document.querySelector('.footer').style.boxShadow = '0px -20px 255px rgba(30, 30, 153, 0.727)';

    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }
  function setDark() {
    root.style.setProperty("--bs-dark", "#f0f0f1e5");
    root.style.setProperty("--bclr", "#000000");
    root.style.setProperty("--footer", "rgb(29, 98, 130)");
    root.style.setProperty("--wclr", "#ffffff");
    root.style.setProperty("--wbkg", "#ffffff");
    root.style.setProperty("--wbkg", "#ffffff");
    root.style.setProperty("--nav", "rgb(244, 244, 249)");
    root.style.setProperty("--yclr", "rgb(212, 158, 8)");
    root.style.setProperty("--main-color", "rgb(0, 174, 255)");
    document.querySelector('.footer').style.boxShadow ='0px 0px 0px'

    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}






