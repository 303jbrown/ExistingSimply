//When the submit button is clicked 
//thank you message will be appended below the inputs if both the name and the email are filled in//

const email = document.getElementById('emailaddress');
const firstName = document.getElementById('name');
const form = document.getElementById('user-form');
const message = document.getElementById('message');
const emailList =[];


form.addEventListener('submit',function(evt){
    evt.preventDefault();
    nameInput = firstName.value;
    emailInput= email.value;

    if((nameInput.length<2) || (!emailInput.includes('@'))){
        let errorMessage = document.createElement('li');
        errorMessage.innerText = "submission invalid please check name and email address"
        message.appendChild(errorMessage);
    }else{
        let errorMessage= document.createElement('li');
        errorMessage.innerText = `thank you ${nameInput}! Keep an eye out for the next post`;
        message.appendChild(errorMessage);
        emailList.push(emailInput);
    }
})