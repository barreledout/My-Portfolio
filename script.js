                                        // Drop down menu //
let dropDownShowing = false;

const dropDownBtn = document.getElementById('light-toggle');
const dropDownContent = document.getElementById('drop-down-content');

// Checks if the drop down menu is showing on DOMS.
function showDropDown() {
    dropDownShowing = !dropDownShowing
    dropDownContent.classList.toggle('show-dropDown-content');
    
    if (dropDownShowing) {
        dropDownBtn.style.color = 'grey';
        dropDownBtn.style.transition = 'all .3s ease-in-out';
        
    } else {
        dropDownBtn.style.color = 'black';
        dropDownBtn.style.transition = 'all .3s ease-in-out';
        
    }
    
};

// Closes drop down menu when clicked outside of the element. 
const clickedOutside = () => {
    document.addEventListener('click', (e) => {
        e.preventDefault();

        if (!dropDownBtn.contains(e.target) && !dropDownContent.contains(e.target)) {
            dropDownContent.classList.remove('show-dropDown-content');
            dropDownBtn.style.color = 'black';
            dropDownShowing = false;    
        }
    });
}
clickedOutside();


                                // Toggle for light, dark, and system theme //                               
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const sysMode = document.getElementById('system-mode');

