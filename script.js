// Show custom popup on page load
window.onload = function () {
    var popup = document.getElementById('popup');
    var closePopup = document.getElementById('closePopup');
  
    // Show the popup
    popup.style.display = 'flex';
  
    // Close the popup when the button is clicked
    closePopup.onclick = function () {
      popup.style.display = 'none';
    };
  };

// Predefined list of holidays by month with images
const holidays = {

    //January// 
    0:[
        { 
            title: "New Year’s Day", 
            description: "Start the year off with celebrations on January 1st!", 
            image: "images/January/new_year.jpg" 
        },
        { 
            title: "Martin Luther King Jr. Day", 
            description: "Celebrate the legacy of Martin Luther King Jr. on the 3rd Monday in January.", 
            image: "images/January/mlk_day.jpg" 
        },
        { 
            title: "Chinese New Year", 
               description: "Celebrate the start of the lunar calendar year with family, food, and festivities.",  
               image: "images/January/chinese_new_year.jpg"
        }
    ],
    //February// 
    1: [
        { 
            title: "Valentine’s Day", 
            description: "Celebrate love and friendship on February 14th.", 
            image: "images/February/valentine.jpg" 
        },
        { 
            title: "Presidents’ Day", 
            description: "Honor past U.S. presidents on the 3rd Monday in February.", 
            image: "images/February/presidents_day.jpg" 
        }
    ],
    //March// 
    2: [
        { 
            title: "St. Patrick’s Day", 
            description: "Wear green and celebrate Irish culture on March 17th.", 
            image: "images/March/st_patrick.jpg" 
        },
        
    ],
    //April// 
    3: [
        { 
            title: "Easter", 
            description: "Celebrate rebirth and renewal (date varies).", 
            image: "images/April/easter.jpg" 
        },
    ],
    //May// 
    4: [
        {
            title: "Cinco de Mayo",  
            description: "Celebrate Mexican heritage and culture on May 5th.",  
            image: "images/May/cinco_de_mayo.jpg"
        },        
        { 
            title: "Mother’s Day", 
            description: "Honor moms everywhere on the 2nd Sunday in May.", 
            image: "images/May/mothers_day.jpg" 
        },
        { 
            title: "Memorial Day", 
            description: "Honor fallen U.S. soldiers on the last Monday in May.", 
            image: "images/May/memorial_day.jpg" 
        }
    ],
    //June// 
    5: [
       { 
            title: "Father’s Day", 
            description: "Honor fathers everywhere on the 3rd Sunday in June.", 
            image: "images/June/fathers_day.jpg" 
        },
   ],
    //July// 
    6: [
        { 
            title: "Independence Day", 
            description: "Enjoy fireworks and freedom on July 4th!", 
            image: "images/July/independence_day.jpeg" 
        },
    
    ],
//august//
    7:[
        { 
            title: "", 
            description: "", 
            image: "" 
        },
    
    ],


    //September// 
    8: [
        { 
            title: "Labor Day", 
            description: "Recognize workers’ contributions on the 1st Monday in September.", 
            image: "images/September/labor_day.jpg" 
        },
        ],
    //October// 
    9: [
        { 
            title: "Halloween", 
            description: "Get spooky on October 31st!", 
            image: "images/October/halloween.jpg" 
        },
        { 
            title: "Columbus Day", 
            description: "Commemorate Columbus’ arrival in the Americas on the 2nd Monday in October.", 
            image: "images/October/columbus_day.jpg" 
        }
    ],
    //November// 
    10: [
        { 
            title: "Thanksgiving", 
            description: "Give thanks with family on the 4th Thursday in November.", 
            image: "images/November/thanksgiving.jpg" 
        },
        { 
            title: "Veterans Day", 
            description: "Honor military service on November 11th.", 
            image: "images/November/veterans_day.jpg" 
        },
        { 
            title: "Hanukkah", 
            description: "Celebrate the Jewish Festival of Lights (date varies).", 
            image: "images/November/hanukkah.jpg" 
        }
    ],
    //December// 
    11: [
        { 
            title: "Christmas Eve", 
            description: "Prepare for Christmas with family gatherings and festive traditions on December 24th.", 
            image: "images/December/christmas_eve.jpg" 
        },
        { 
            title: "Christmas Day", 
            description: "Celebrate joy, love, and giving on December 25th.", 
            image: "images/December/christmas_day.jpg" 
        },
        { 
            title: "Kwanzaa", 
            description: "Celebrate African heritage from December 26th to January 1st.", 
            image: "images/December/kwanzaa.jpg" 
        },
        { 
            title: "New Year’s Eve", 
            description: "Ring in the new year on December 31st.", 
            image: "images/December/new_years_eve.jpg" 
        }
    ],
};
// Get the current month
const currentMonth = new Date().getMonth(); // Returns 0 for January, 1 for February, etc.

// Get the holidays for the current month
const holidayInfo = holidays[currentMonth];

// If there are holidays for this month, display the first one
if (holidayInfo && holidayInfo.length > 0) {
    document.getElementById("holidayTitle").innerText = holidayInfo[0].title;
    document.getElementById("holidayDescription").innerText = holidayInfo[0].description;
    document.getElementById("holidayImage").src = holidayInfo[0].image;
    document.getElementById("holidayImage").alt = holidayInfo[0].title;

    // Log the image path to the console for debugging
    console.log("Image path:", holidayInfo[0].image);
} else {
    // Handle the case where there are no holidays for this month
    document.getElementById("holidayTitle").innerText = "No holidays this month";
    document.getElementById("holidayDescription").innerText = "Check back next month for more holiday info!";
    document.getElementById("holidayImage").style.display = "none";
}
