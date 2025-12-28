function script() {
    let username=document.getElementById("user").value;
    let password=document.getElementById("pass").value;
    let roleadmin=document.getElementById("ad").Checked;
    let roleuser=document.getElementById("us").Checked;
    let massage=document.getElementById("message");

          message.textcontent="";

   if(username=="" || password=="") {
    message.textcontent="Fill the both field";
   }

   else if (roleadmin==false && roleuser==false) {
    message.textcontent="select a role"; 
   }

   else if (roleadmin==true && username=="admin" && password=="admin123") {
    message.textcontent="Wellcome admin"; 
   }

   else if (roleuser==true && username=="user" && password=="admin123") {
    message.textcontent="Wellcome user"; 
   }
   
   else {
      message.textcontent="Invalid username or password" }
   }
   