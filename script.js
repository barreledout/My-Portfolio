                                        // Drop down menu //
let dropDownShowing = false;

const dropDownBtn = document.getElementById('light-toggle');
const dropDownContent = document.getElementById('drop-down-content');

// Checks if the drop down menu is showing on DOMS.
function showDropDown() {
    dropDownShowing = !dropDownShowing
    dropDownContent.classList.toggle('show-dropDown-content');
    
    if (dropDownShowing) {
        dropDownBtn.style.transition = 'all .3s ease-in-out';
        
    } else {
        dropDownBtn.style.transition = 'all .3s ease-in-out';
        
    }
    
};

// Closes drop down menu when clicked outside of the element. 
const clickedOutside = () => {
    document.addEventListener('click', (e) => {
        e.preventDefault();

        if (!dropDownBtn.contains(e.target) && !dropDownContent.contains(e.target)) {
            dropDownContent.classList.remove('show-dropDown-content');
            dropDownShowing = false;    
        }
    });
}
clickedOutside();

                                // Toggle for light, dark theme //                               
const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');
const sunIcon = document.getElementById('light-icon');
const moonIcon = document.getElementById('dark-icon');

const storedTheme = localStorage.getItem('theme');
let isLightMode = storedTheme === 'true';    //localStorage value can only be string 
console.log(storedTheme)

if (storedTheme === 'false') {
    document.body.classList.toggle('dark');
} else {
    document.body.classList.remove('dark');
};

lightModeBtn.addEventListener('click', () => {
    if (!isLightMode && document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        isLightMode = true;
        localStorage.setItem('theme', 'true');
        
        
    }
});

darkModeBtn.addEventListener('click', () => {
    if(isLightMode && !document.body.classList.contains('dark')) {
        document.body.classList.toggle('dark');
        isLightMode = false;
        localStorage.setItem('theme', 'false');
        
    }
});

