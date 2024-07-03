import {createTransport} from "nodemailer"


export const sendMail = async (text)=>{


    var transporter = createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
          user: process.env.SMPT_USER,
          pass: process.env.SMPT_PASSWORD
        }
      });


      await transporter.sendMail({
        subject : "CONTACT REQUEST FROM PORTFOLIO",
        to : process.env.MYMAIL,
        from : process.env.MYMAIL,
        text
    })


}




// try {
        
// } catch (error) {
//     return req.status(400).json({
//         success: false,
//         message: error.message
//     })
// }