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
            image: "images/Jan/new_year.jpg" 
        },
        { 
            title: "Martin Luther King Jr. Day", 
            description: "Celebrate the legacy of Martin Luther King Jr. on the 3rd Monday in January.", 
            image: "images/Jan/mlk_day.jpg" 
        },
        { 
            title: "Chinese New Year", 
               description: "Celebrate the start of the lunar calendar year with family, food, and festivities.",  
               image: "images/chinese_new_year.jpg"
        }
    ],
    //February// 
    1: [
        { 
            title: "Valentine’s Day", 
            description: "Celebrate love and friendship on February 14th.", 
            image: "images/valentine.jpg" 
        },
        { 
            title: "Presidents’ Day", 
            description: "Honor past U.S. presidents on the 3rd Monday in February.", 
            image: "images/presidents_day.jpg" 
        }
    ],
    //March// 
    2: [
        { 
            title: "St. Patrick’s Day", 
            description: "Wear green and celebrate Irish culture on March 17th.", 
            image: "images/st_patrick.jpg" 
        },
        
    ],
    //April// 
    3: [
        { 
            title: "Easter", 
            description: "Celebrate rebirth and renewal (date varies).", 
            image: "images/easter.jpg" 
        },
    ],
    //May// 
    4: [
        {
            title: "Cinco de Mayo",  
            description: "Celebrate Mexican heritage and culture on May 5th.",  
            image: "images/cinco_de_mayo.jpg"
        },        
        { 
            title: "Mother’s Day", 
            description: "Honor moms everywhere on the 2nd Sunday in May.", 
            image: "images/mothers_day.jpg" 
        },
        { 
            title: "Memorial Day", 
            description: "Honor fallen U.S. soldiers on the last Monday in May.", 
            image: "images/memorial_day.jpg" 
        }
    ],
    //June// 
    5: [
       { 
            title: "Father’s Day", 
            description: "Honor fathers everywhere on the 3rd Sunday in June.", 
            image: "images/fathers_day.jpg" 
        },
   ],
    //July// 
    6: [
        { 
            title: "Independence Day", 
            description: "Enjoy fireworks and freedom on July 4th!", 
            image: "images/independence_day.jpg" 
        },
    
    ],

    //September// 
    7: [
        { 
            title: "Labor Day", 
            description: "Recognize workers’ contributions on the 1st Monday in September.", 
            image: "images/labor_day.jpg" 
        },
        ],
    //October// 
    8: [
        { 
            title: "Halloween", 
            description: "Get spooky on October 31st!", 
            image: "images/halloween.jpg" 
        },
        { 
            title: "Indigenous Peoples’ Day / Columbus Day", 
            description: "Honor Native American heritage or Columbus’ arrival on the 2nd Monday in October.", 
            image: "images/indigenous_day.jpg" 
        },
        { 
            title: "Diwali", 
            description: "Celebrate the Hindu Festival of Lights (date varies).", 
            image: "images/diwali.jpg" 
        }
    ],
    //November// 
    9: [
        { 
            title: "Thanksgiving", 
            description: "Give thanks with family on the 4th Thursday in November.", 
            image: "images/thanksgiving.jpg" 
        },
        { 
            title: "Veterans Day / Remembrance Day", 
            description: "Honor military service on November 11th.", 
            image: "images/veterans_day.jpg" 
        },
        { 
            title: "Hanukkah", 
            description: "Celebrate the Jewish Festival of Lights (date varies).", 
            image: "images/hanukkah.jpg" 
        }
    ],
    //December// 
    10: [
        { 
            title: "Christmas", 
            description: "Celebrate joy and giving on December 25th.", 
            image: "images/christmas.jpg" 
        },
        { 
            title: "Kwanzaa", 
            description: "Celebrate African heritage from December 26th to January 1st.", 
            image: "images/kwanzaa.jpg" 
        },
        { 
            title: "New Year’s Eve", 
            description: "Ring in the new year on December 31st.", 
            image: "images/new_years_eve.jpg" 
        }
    ]
};

// Get the current month
const currentMonth = new Date().getMonth();

// Get the holiday info for the current month
const holidayInfo = holidays[currentMonth];

// Display the holiday info for the first holiday of the current month
document.getElementById("holidayTitle").innerText = holidayInfo[0].title;
document.getElementById("holidayDescription").innerText = holidayInfo[0].description;
document.getElementById("holidayImage").src = holidayInfo[0].image;
document.getElementById("holidayImage").alt = holidayInfo[0].title;