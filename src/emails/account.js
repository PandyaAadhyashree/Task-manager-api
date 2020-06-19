const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
      sgMail.send({
            to:email,
            from:'pandyaaadhu123@gmail.com',
            subject:'welcome message',
            text:`${name} Welcome to the Task-App.`
      }).then((data)=>{
            console.log(data)
            console.log("message sent")
      }).catch((e)=>{
            console.log(e.response.body)
      })
}

const sendCancelEmail = (email, name) =>{
      sgMail.send({
            to:email,
            from:'pandyaaadhu123@gmail.com',
            subject:'Cancel Email',
            text: `GoodBye!! ${name}`
      }).then((data)=>{
            console.log(data)
            console.log("message sent")
      }).catch((e)=>{
            console.log(e.response.body)
      })
}

module.exports = {
      sendWelcomeEmail,
      sendCancelEmail
}