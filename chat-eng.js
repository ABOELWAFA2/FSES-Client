// Array to store chat history
let chatHistory = [];
let currentStep = 0;

// Function to display bot's message in the chatbox
function displayBotMessage(message) {
  const botMessage = document.createElement('p');
  botMessage.innerHTML = message;
  document.getElementById('chatbox').appendChild(botMessage);
}

// Function to display user's message in the chatbox
function displayUserMessage(message) {
  const userMessage = document.createElement('p');
  userMessage.innerHTML = message;
  document.getElementById('chatbox').appendChild(userMessage);
}

// Function to handle user input
function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  displayUserMessage(userInput);
  processUserMessage(userInput);
  document.getElementById('userInput').value = '';
}

// Function to process user's message and generate appropriate bot response
function processUserMessage(message) {
  chatHistory.push(message);



    if (currentStep === 0) {
    const temperature = parseFloat(message);

    if (!isNaN(temperature)) {
          if(temperature > 42 || temperature < 35){
      displayBotMessage('Invalid temperature value. Please enter a valid temperature:');

    }
          else{
            currentStep++;
            displayBotMessage('Ok Now, please enter patient PressureUp (120):');}
    } else{
      displayBotMessage('Invalid temperature value. Please enter a valid temperature');
    }
  } 


  else if (currentStep === 1) {
    const PressureUp = parseFloat(message);
    if (!isNaN(PressureUp)) {
        if(PressureUp > 140 || PressureUp < 90){
          displayBotMessage('Invalid PressureUp. Please enter a valid value:');
        }
        else{
        currentStep++;
        displayBotMessage('Ok Now, please enter patient PressureDown (80):');}
    } 
    else {
      displayBotMessage('Invalid PressureUp. Please enter a valid value:');
    }
    }



    else if (currentStep === 2) {
    const PressureDown = parseFloat(message);
    if (!isNaN(PressureDown)) {
      if(PressureDown > 100 || PressureDown < 60){
          displayBotMessage('Invalid PressureDown. Please enter a valid value:');
        }
        else{
        currentStep++;
        displayBotMessage('Ok Now, please enter patient sugar rate (140):');}
    } else {
      displayBotMessage('Invalid PressureDown . Please enter a valid rate:');
    }
  }


  else if (currentStep === 3) {
    const sugar = parseFloat(message);
    if (!isNaN(sugar)) {
          if( sugar > 160 || sugar < 80){
                  displayBotMessage('Invalid sugar rate. Please enter a valid rate:');

          }
          else{
            currentStep++;
            displayBotMessage('Ok Now, please enter patient muscle rate (10:50):');}
        
    }else {
      displayBotMessage('Invalid sugar rate. Please enter a valid rate:');
    }
      }
      
  
    else if (currentStep === 4) {
    const muscle = parseFloat(message);
    if (!isNaN(muscle)) {
      if(muscle > 80 || muscle < 10){
          displayBotMessage('Invalid muscle value. Please enter a valid value:');
        }
        else{
        currentStep++;
        displayBotMessage('Ok Now, please enter patient oxygen rate (95:100):');}
    }else {
      displayBotMessage('Invalid muscle activity value. Please enter a valid rate:');
    }
  }
      else if (currentStep === 5) {
    const oxygen = parseFloat(message);
    if (!isNaN(oxygen)) {
      if(oxygen > 120 || oxygen < 85){
          displayBotMessage('Invalid oxygen value. Please enter a valid value:');
        }
        else{
        currentStep++;
        displayBotMessage('Ok Now, please enter patient nerve rate (50):');}
    }else {
      displayBotMessage('Invalid oxygen value. Please enter a valid rate:');
    }
  }
        else if (currentStep === 6) {
    const nerve = parseFloat(message);
    if (!isNaN(nerve)) {
      if(nerve > 70 || nerve < 30){
          displayBotMessage('Invalid nerve value. Please enter a valid value:');
        }
        else{
        currentStep++;
        displayBotMessage('Ok Now, please enter patient Retina rate (-40:-70):');}
    }else {
      displayBotMessage('Invalid nerve value. Please enter a valid rate:');
    }
  }
    else if (currentStep === 7) {
    const Retina = parseFloat(message);
    if (!isNaN(Retina)) {
      if(Retina < -80 || Retina > -30){
        displayBotMessage('Invalid Retina value. Please enter a valid rate:');

      }
      else{
      currentStep++;
      displayMedicalInstructions(parseFloat(chatHistory[0]), parseFloat(chatHistory[1]), parseInt(chatHistory[2]), parseFloat(chatHistory[3]), parseFloat(chatHistory[4]), parseFloat(chatHistory[5]),parseFloat(chatHistory[6]), Retina);
      displayBotMessage(instructions1);
      displayBotMessage(instructions2);
      displayBotMessage(instructions3);
      displayBotMessage(instructions4);
      displayBotMessage(instructions5);
      displayBotMessage(instructions6);
      displayBotMessage(instructions7);
    } }

    else {
      displayBotMessage('Invalid Retina value. Please enter a valid rate:');
    }
  }


}
// Function to display medical instructions based on input values
function displayMedicalInstructions(temperature,PressureUp,PressureDown,sugar,muscle,oxygen,nerve,Retina) {
  let instructions1 = '';
  let instructions2= '';
  let instructions3= '';
  let instructions4= '';
  let instructions5= '';
  let instructions6= '';
  let instructions7= '';

  /////////////////////temperature////////////////////
  if (temperature > 37 ) {
    instructions1 = "Temperature is High: Move the patient to a shaded or air-conditioned area away from the heat source,Apply cold water or ice packs to the patient's neck, armpits, and groin area,Fan the patient while spraying or misting water on their skin,Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  } else if(temperature < 37) {
    instructions1 = "Temperature is low: Move the patient a Warm Environment away from cold and wet conditions, Then Check the person's breathing. If they are not breathing or have difficulty breathing, begin CPR (cardiopulmonary resuscitation), Handle the person gently and avoid rough movements, Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital. ";
  }else if(temperature == 37){
    instructions1 = 'Patient Temperature is good.';
  }

  /////////////////////sugar////////////////////

  if (sugar > 140 ) {
    instructions2 = "patient's Blood sugar level is high, a condition known as hyperglycemia, Fluids may be given intravenously to help manage high blood sugar levels, Administer insulin (in some cases): Depending on the severity of the hyperglycemia, Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  } else if(sugar < 140) {
    instructions2 = "patient's Blood sugar level is low, Administer glucose: If the patient is conscious and able to swallow,  provide oral glucose in the form of a gel, tablets, or a sugary drink, Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  }else if(sugar == 140){
    instructions2="patient's Blood sugar level is good";
  }
  /////////////////////pressureUp////////////////////
  if (PressureUp > 120 && PressureDown > 80) {
    instructions3 = "blood Pressure is high, Move the patient to a comfortable position, usually semi-reclined with their head and chest slightly elevated, establish an IV line to administer fluids or medications as needed, specific medications such as nitroglycerin, labetalol, or other antihypertensive drugs may be administered to help lower blood pressure, ECG monitoring:monitor their heart rhythm and detect any abnormal cardiac activity or signs of heart-related complications associated with high blood pressure, Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  } else if(PressureUp < 120 && PressureDown < 80) {
    instructions3 = "blood Pressure is low, place the patient in a supine position (lying flat on their back) with their legs elevated. This can help increase blood flow to vital organs, If the patient is experiencing respiratory distress along with low blood pressure, paramedics may provide supplemental oxygen to improve oxygenation and support vital organ function, Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  }else if(PressureUp == 120 && PressureDown == 80){
    instructions3="Blood Pressure is good";
  }

  /////////////////////Retina////////////////////
  if (Retina < -70 || Retina > -40 ) {
    instructions4 = 'Your Retina  are good';
  } else {
    instructions4 = 'Your Retina is bad.';
  }
  /////////////////////muscle////////////////////
  if (muscle >= 10 || muscle <=50 ) {
    instructions5 = 'Your muscle rate is good';
  } else {
    instructions5 = 'Your muscle is low.';
  }
  /////////////////////oxygen////////////////////

  if (oxygen < 95 ) {
    instructions6 = "Patient breathing rate is low, Open the airway: If the patient's airway is obstructed, paramedics will take steps to open it. This may involve techniques such as the head-tilt/chin-lift maneuver or the jaw-thrust maneuver for patients with suspected neck or spine injuries, If the patient is not breathing adequately or has stopped breathing, paramedics may initiate positive pressure ventilation using a bag-valve mask device. This helps deliver oxygen to the patient's lungs,-Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  } else if(oxygen > 100){
    instructions6 = "assist the patient into a more comfortable position that promotes easier breathing, High breathing rate can be a symptom of various medical conditions, such as respiratory infections, asthma, anxiety, or heart problems, Continuously monitor the person's pulse, breathing, and level of responsiveness until you reach the hospital.";
  }
  else if(oxygen == 100){
    instructions6 = 'Patient breathing rate is good';
  }

  /////////////////////nerve////////////////////
  if (nerve >=50 ) {
    instructions7 = 'Your nerve is good';
  } else {
    instructions7 = 'Your nerve is bad.';
  }



  
      displayBotMessage(instructions1);
      displayBotMessage(instructions2);
      displayBotMessage(instructions3);
      displayBotMessage(instructions4);
      displayBotMessage(instructions5);
      displayBotMessage(instructions6);
      displayBotMessage(instructions7);


}

var btn = document.getElementById("btn");
var btnText = document.getElementById("btnText");

btn.onclick = function() {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
}