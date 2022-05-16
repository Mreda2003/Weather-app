
/* Global Variables */
// I used id insted of zip because it is no longer available
const weatherServer = 'https://api.openweathermap.org/data/2.5/weather?id=';
const apiKey = '&appid=8699e11386c591c1099e0e19934faa26&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// API request to get info from openweathermap.org
const getDataFromInternet = async(url , zip ,key )=>{
    let data = await fetch(url+zip+key);
    try{
      const internetData = data.json();
     return internetData ;
    } catch{
      console.log('Error' , error)
         }
     };


     // Post function to send data to server
async function postData ( url = '', data = {}){

        const res = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),         
      });
        try {
          const newData = await res.json();
          return newData;
        }catch(error) {
        console.log("Error", error);
        }
    };
    
    // Event Listener to the button to get the last info from user and update UI next 
    document.querySelector('#generate').addEventListener('click' , function() {
        let zipNo = document.querySelector('#zip').value;
        let userFeeling = document.querySelector('#feelings').value;
        getDataFromInternet(weatherServer,zipNo,apiKey)
        .then(takenData => {
            postData('/send' , { temp : takenData.main.temp , date:newDate , feel : userFeeling});
        }).then (updaateUI)
        .catch((error)=>{
            console.log(`Error ${error}`);
        })
        
    });

    // This function will take the data from the server then update the UI
const updaateUI = async ()=>{
    let reseved = await fetch('/all');
    console.log(reseved);
    try{
        const use = await reseved.json();
        document.querySelector('#temp').innerHTML=`Current temprature : ${Math.round(use.temp)} degrees`; ;
        document.querySelector('#content').innerHTML=`I feel : ${use.feel}`;
        document.querySelector('#date').innerHTML=`Date : ${use.date}`;
    }catch{
        console.log('Error');
    }
};




















// //const { listen } = require("express/lib/application");

// /* Global Variables */
// 

// // Personal API Key for OpenWeatherMap API
// 
// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// 

//     PostData('sendData' ,{temp :Temp , date : newDate , feel : userToday });
    
//     updateUI();
// });

// 

// 