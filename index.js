// importing nodemailer and put into a variable  'nodemailer'

var nodemailer = require('nodemailer')

// media and user details(username and passwords)



var transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'anandhanug@gmail.com',

            //  here password will be change before the submission in github

            pass:'passwordchanged'
        }
    }
);

// senders informations

var mailOptions = {
    from:'anandhanug@gmail.com',
    to:'ananthukamal@gmail.com',
    sub:'Test message',
    text:"Hello UG,This is a nodemailer package and it is a test messege"

};

// sending email

transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log("Email sent Successfully" + info.response)
    }

});