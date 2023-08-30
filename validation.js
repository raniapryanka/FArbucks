
function validateForm(){

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    var email = document.getElementById('email').value;
    var phone = document.getElementById('phonenum').value;

    var password = document.getElementById('pass').value;
    var password2 = document.getElementById('pass2').value;


    var agree = document.getElementById('agreement').value;


    if(name == ''){ //validasi kalau kosong
        alert('Full name cannot be blank. Please Try Again');
    }

    if(name.length > 100){ //validasi length
        alert('Full name cannot be more than 100 characters. Please Try Again');
    }

    if(age == ''){ //validasi kalau kosong
        alert('Age cannot be blank. Please Try Again');
    }else if(age < 1){ //validasi length
        alert('Age not valid. Please Try Again');
    }else if(age<18){ //validasi length
        alert('Age not qualified. The minimum age is 18 years old');
    }


    var atSymbol = email.indexOf("@");
    var dot = email.indexOf(".");
    if(email == ''){ //validasi kalau kosong
        alert('Email address cannot be blank. Please Try Again');
    }
    //validasi email kosong
    else if(atSymbol < 1){
        alert('Invalid email address. Please enter a valid email address');
    }else if(dot <= atSymbol + 2){
        alert('Invalid email address. Please enter a valid email address');
    }else if(dot === email.length - 1){
        alert('Invalid email address. Please enter a valid email address');
    }
 


    if(phone == ''){ //validasi kalau kosong
        alert('Phone Number cannot be blank. Please Try Again');
    }else if(phone.length>15){ //validasi length
        alert('Phone number cannot be more than 15 characters. Please Try Again');
    }else if(!phone.match(/^[0-9]+$/)){ //validasi number only
        alert('Invalid phone number. Please Try Again');
    }


    if(password == ''){ //validasi kalau kosong
        alert('Password cannot be blank. Please Try Again');
    }else if(password.length < 8){
        alert('Password requirements not fulfilled. Please try again')
    }
  

    if(password2 == ''){ //validasi kalau kosong
        alert('Password confirmation cannot be blank. Please Try Again');

        //validasi confirm password
    }else if(password != password2){
        alert('Password did not match. Please try again');
    }


}


