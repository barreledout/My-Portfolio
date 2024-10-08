
                                // Toggle for light, dark theme //                               
const dropDownBtn = document.getElementById('light-toggle');
const imgContainer = document.getElementById('light-container');
const sunUrl = '/assets/sun-svgrepo-com.svg';
const moonUrl = '/assets/moon-stars-svgrepo-com.svg';

const storedTheme = localStorage.getItem('theme');
//default theme is light mode
let isLightMode = storedTheme === 'true'; 

//This conditional block handles which theme should appear when user enters the website//

/*If it's a first time visitor to the site, the value of storedTheme
will be false, therefore, isLightMode === false, so we remove the
dark theme to make it light theme by defautl.*/
if(storedTheme === null) {
    document.body.classList.remove('dark');
    imgContainer.src = sunUrl;
}
// if it is light mode
else if (storedTheme === 'true') {
    document.body.classList.remove('dark');
    imgContainer.src = sunUrl;
    
//if it is dark mode    
} else {
    document.body.classList.toggle('dark');
    imgContainer.src = moonUrl;
    
}

// theme switch functionality
const applyTheme = () => {
    //if light mode, change to dark
    if (isLightMode) { 
        document.body.classList.toggle('dark');
        imgContainer.src = moonUrl;
        //setting the value to false since it is no longer light mode.
        localStorage.setItem('theme', 'false'); 
        
    //if dark mode, change to light mode   
    } else  { 
        document.body.classList.remove('dark');
        imgContainer.src = sunUrl;
        localStorage.setItem('theme', 'true');
        
    }
    // logic change when button is clicked.
    isLightMode = !isLightMode;
    console.log(localStorage.getItem('theme'));
};

dropDownBtn.addEventListener('click', applyTheme);

                                          // END //    