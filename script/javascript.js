
  // function to send a email.

  function submitForm(){
    // get input value

    var userName =  document.getElementById("userName").value;
    var sName = document.getElementById("sName").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var  reqServ="NO";
     //check if the button is checked for fumigation
     if(document.getElementById("reqServ").checked){   
         reqServ = document.getElementById("reqServ").value;
     }

        var  fogging="NO";
       //check if the button is checked for fumigation
       if(document.getElementById("reqServ1").checked){   
        fogging = document.getElementById("reqServ1").value;
    }
     var DeepCleaning ="NO";

      //check if the button is checked for deep cleaning
      if(document.getElementById("deep").checked){   
        DeepCleaning = document.getElementById("deep").value;
    }
      
   // let reqServ =document.getElementById("reqServ").value;
    let date = document.getElementById("date").value
    
   // document.querySelector(".form-container").reset();
    sendEmail(userName ,sName,contact,email,reqServ,fogging,DeepCleaning,date);
  }

  // send email
  function sendEmail(userName,sName,contact,email,reqServ,fogging,DeepCleaning,date){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "buchalucha17@gmail.com",
        Password : "ahjfzfbjgzoajlch",
        To : "201707790@swave.smu.ac.za",
        From : "buchalucha17@gmail.com",
        Subject : userName+'  Send you a mail',
        Body :"Name:"+userName+"<br>Surname:"+sName+"<br>Contact:"+contact+"<br>Email:  "
             +email+"<br>Fumigation:"+reqServ+"<br>Fogging:"+fogging+
             "<br>Deep Cleaning:"+DeepCleaning+"<br>Date:"+date,
    }).then(window.location.replace("submitted.html"),    //replaces the current page with 'submitted.html'
    );
  }
  
