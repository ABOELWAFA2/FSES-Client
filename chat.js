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
      displayBotMessage("قيمة درجة الحرارة غير صحيحة. الرجاء إدخال درجة حرارة صالحة");

    }
          else{
            currentStep++;
            displayBotMessage("حسنًا الآن ، الرجاء إدخال قيمة الضغط الإنبساطى للمريض");}
    } else{
      displayBotMessage("قيمة درجة الحرارة غير صحيحة. الرجاء إدخال درجة حرارة صالحة");
    }
  } 


  else if (currentStep === 1) {
    const PressureUp = parseFloat(message);
    if (!isNaN(PressureUp)) {
        if(PressureUp > 140 || PressureUp < 90){
          displayBotMessage("قيمة الضغط الإنبساطى غير صالحة. الرجاء إدخال قيمة صالحة");
        }
        else{
        currentStep++;
        displayBotMessage("حسنًا الآن ، الرجاء إدخال قيمة الضغط الاإنقباضى للمريض");}
    } 
    else {
      displayBotMessage("قيمة الضغط الإنبساطى غير صالحة. الرجاء إدخال قيمة صالحة");
    }
    }



    else if (currentStep === 2) {
    const PressureDown = parseFloat(message);
    if (!isNaN(PressureDown)) {
      if(PressureDown > 100 || PressureDown < 60){
          displayBotMessage("قيمة الضغط الاإنقباضى غير صالحة. الرجاء إدخال قيمة صالحة");
        }
        else{
        currentStep++;
        displayBotMessage("حسنًا الآن ، الرجاء إدخال معدل الجلولكوز بدم المريض");}
    } else {
      displayBotMessage("قيمة الضغط الاإنقباضى غير صالحة. الرجاء إدخال قيمة صالحة");
    }
  }


  else if (currentStep === 3) {
    const sugar = parseFloat(message);
    if (!isNaN(sugar)) {
          if( sugar > 160 || sugar < 80){
                  displayBotMessage("معدل السكر غير صالح. الرجاء إدخال قيمة صالحة");

          }
          else{
            currentStep++;
            displayBotMessage("حسنًا الآن ، الرجاء إدخال معدل نشاط عضلات المريض");}
        
    }else {
      displayBotMessage("معدل السكر غير صالح. الرجاء إدخال قيمة صالحة");
    }
      }
      
  
    else if (currentStep === 4) {
    const muscle = parseFloat(message);
    if (!isNaN(muscle)) {
      if(muscle > 200 || muscle < 10){
          displayBotMessage("قيمة عضلية غير صالحة. الرجاء إدخال قيمة صالحة");
        }
        else{
        currentStep++;
        displayBotMessage("حسنًا الآن ، الرجاء إدخال معدل الأكسجين الخاص بالمريض");}
    }else {
      displayBotMessage("قيمة عضلية غير صالحة. الرجاء إدخال قيمة صالحة");
    }
  }
      else if (currentStep === 5) {
    const oxygen = parseFloat(message);
    if (!isNaN(oxygen)) {
      if(oxygen > 100 || oxygen < 85){
          displayBotMessage("قيمة الأكسجين غير صالحة. الرجاء إدخال قيمة صالحة");
        }
        else{
        currentStep++;
        displayBotMessage("حسنًا الآن ، برجاء إدخال معدل نشاط أعصاب المريض");}
    }else {
      displayBotMessage("قيمة الأكسجين غير صالحة. الرجاء إدخال قيمة صالحة");
    }
  }
        else if (currentStep === 6) {
    const nerve = parseFloat(message);
    if (!isNaN(nerve)) {
      if(nerve > 50 || nerve < 40){
          displayBotMessage("قيمة عصبية غير صالحة. الرجاء إدخال معدل صالح");
        }
        else{
        currentStep++;
        displayBotMessage("حسنًا الآن ، يرجى إدخال معدل شبكية العين للمريض");}
    }else {
      displayBotMessage("قيمة عصبية غير صالحة. الرجاء إدخال معدل صالح");
    }
  }
    else if (currentStep === 7) {
    const Retina = parseFloat(message);
    if (!isNaN(Retina)) {
      if(Retina < -80 || Retina > -30){
        displayBotMessage("قيمة شبكية غير صالحة. الرجاء إدخال معدل صالح");

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
      displayBotMessage('قيمة معدل نشاط شبكية غير صالحة. الرجاء إدخال قيمة صالحة');
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
    instructions1 = "ارتفاع درجة الحرارة: انقل المريض إلى منطقة مظللة أو مكيفة الهواء بعيدًا عن مصدر الحرارة ، ضع الماء البارد أو أكياس الثلج على رقبة المريض ، والإبطين ، ومنطقة الفخذ ، وقم بتهوية المريض أثناء رش الماء أو رش الماء على بشرته ، راقب باستمرار نبض الشخص وتنفسه ومستوى استجابته حتى تصل إلى المستشفى.";
  } else if(temperature < 37) {
    instructions1 = "درجة الحرارة منخفضة: انقل المريض إلى بيئة دافئة بعيدًا عن البرد والرطوبة ، ثم افحص تنفس الشخص. إذا كان الشخص لا يتنفس أو يعاني من صعوبة في التنفس ، فابدأ بالإنعاش القلبي الرئوي (CPR) ، وتعامل مع الشخص برفق وتجنب الحركات القاسية ، وراقب باستمرار نبض الشخص وتنفسه ومستوى استجابته حتى تصل إلى المستشفى.";
  }else if(temperature==37){
    instructions1="درجة حرارة المريض جيدة.";
  }
  /////////////////////sugar////////////////////

  if (sugar > 140 ) {
    instructions2 = "ارتفاع مستوى السكر في الدم لدى المريض ، وهي حالة تُعرف باسم ارتفاع السكر في الدم ، ويمكن إعطاء السوائل عن طريق الوريد للمساعدة في إدارة مستويات السكر في الدم المرتفعة ، وإعطاء الأنسولين (في بعض الحالات): اعتمادًا على شدة ارتفاع السكر في الدم ، ومراقبة نبض الشخص وتنفسه باستمرار ، ومستوى الاستجابة حتى تصل إلى المستشفى.";
  } else if(sugar < 140) {
    instructions2 = "مستوى السكر في الدم لدى المريض منخفض ، إدارة الجلوكوز: إذا كان المريض واعيًا وقادرًا على البلع ، قم بتوفير الجلوكوز عن طريق الفم على شكل هلام أو أقراص أو مشروب سكري ، راقب نبض الشخص وتنفسه ومستوى استجابته باستمرار حتى تصل إلى المستشفى.";
  }else if(sugar ==140){
    instructions2="مستوى السكر في دم المريض جيد";
  }
  /////////////////////pressureUp////////////////////
  if (PressureUp > 120 || PressureDown > 80) {
    instructions3 = "ارتفاع ضغط الدم ، انقل المريض إلى وضع مريح ، وعادة ما يكون شبه مستلق مع رفع رأسه وصدره قليلاً ، وإنشاء خط وريدي لإدارة السوائل أو الأدوية حسب الحاجة ، وقد تُستخدم أدوية معينة مثل النتروجليسرين ، أو لابيتالول ، أو الأدوية الأخرى الخافضة للضغط يتم إعطاؤها للمساعدة في خفض ضغط الدم ، ومراقبة تخطيط القلب: مراقبة إيقاع القلب واكتشاف أي نشاط قلبي غير طبيعي أو علامات لمضاعفات مرتبطة بالقلب مرتبطة بارتفاع ضغط الدم ، ومراقبة نبض الشخص وتنفسه ومستوى استجابته باستمرار حتى تصل إلى مستشفى.";
  } else if(PressureUp < 120 || PressureDown < 80) {
    instructions3 = "ضغط الدم منخفض ، ضع المريض في وضعية الاستلقاء (مستلقٍ على ظهره) مع رفع ساقيه. يمكن أن يساعد ذلك في زيادة تدفق الدم إلى الأعضاء الحيوية ، إذا كان المريض يعاني من ضائقة تنفسية إلى جانب انخفاض ضغط الدم ، فقد يوفر المسعفون الأكسجين الإضافي لتحسين الأوكسجين ودعم وظائف الأعضاء الحيوية ، ومراقبة نبض الشخص وتنفسه ومستوى استجابته باستمرار حتى تصل إلى المستشفى.";
  }else if(PressureUp == 120 || PressureDown == 80){
    instructions3="ضغط الدم جيد";
  }
  /////////////////////Retina////////////////////
  if (Retina < -70 || Retina > -40 ) {
    instructions4 = "شبكية  عين المريض جيدة";
  } else {
    instructions4 = "شبكية  عين المريض ليست جيدة";
  }
  /////////////////////muscle////////////////////
  if (muscle >= 10 || muscle <=50 ) {
    instructions5 = "معدل نشاط عضلات المريض جيد";
  } else {
    instructions5 = "معدل نشاط عضلات المريض سيء";
  }
  /////////////////////oxygen////////////////////

  if (oxygen < 95 ) {
    instructions6 = "معدل تنفس المريض منخفض ، افتح مجرى الهواء: في حالة انسداد مجرى الهواء للمريض ، سيتخذ المسعفون خطوات لفتحه. قد يتضمن ذلك تقنيات مثل مناورة إمالة الرأس / رفع الذقن أو مناورة دفع الفك للمرضى الذين يشتبه في إصابتهم في الرقبة أو العمود الفقري ، إذا كان المريض لا يتنفس بشكل كافٍ أو توقف عن التنفس ، فقد يبدأ المسعفون التنفس بالضغط الإيجابي باستخدام جهاز قناع كيس صمام. يساعد ذلك في توصيل الأكسجين إلى رئتي المريض ، - مراقبة نبض الشخص وتنفسه ومستوى استجابته باستمرار حتى تصل إلى المستشفى.";
  } else if(oxygen > 100){
    instructions6 = "معدل الاأكسجين مرتفع مساعدة المريض في وضع أكثر راحة يعزز التنفس بسهولة ، يمكن أن يكون معدل التنفس المرتفع من أعراض الحالات الطبية المختلفة ، مثل التهابات الجهاز التنفسي أو الربو أو القلق أو مشاكل القلب ، ومراقبة نبض الشخص وتنفسه ومستوى الاستجابة بشكل مستمر حتى تصل إلى المستشفى";
  }else if(oxygen >= 95 && oxygen <= 100){
    instructions6 ="معدل تنفس المريض جيد.";
  }

  /////////////////////nerve////////////////////
  if (nerve >=50 ) {
    instructions7 = "معدل نشاط الخلايا العصبية للمريض جيد";
  } else {
    instructions7 = "معدل نشاط الخلايا العصبية للمريض سيء";
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