

//javascript that send email

 // a listen for submit button
  //document.querySelector(".form-container").addEventListener("submit",submitForm);

  // function to send a email
  

  function submitForm(){
    

    //define
    
    // get input value

    var userName =  document.getElementById("name").value;
    var sName = document.getElementById("surname").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var Message=document.getElementById("message").value;
    var date = document.getElementById("date").value;
     
 //call function to send email
    sendEmail(userName ,sName,contact,email,Message,date);

  }

  // send email
  function sendEmail(userName,sName,contact,email,Message,date){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ladieshygien@gmail.com",
        Password : "Mpfeseni.88",
        To : "ladieshygien@gmail.com",
        From : "ladieshygien@gmail.com",
        Subject : userName+ 'Send you a mail',
        Body :"Name:"+userName+"<br>Surname:"+sName+"<br>Contact:"+contact+"<br>Email:"
             +email+"<br>Message:<br>"+Message+"<br>Date:"+date,
    }).then(message => alert("Email sent succesfully")
    );
  }

