
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
});
const sendInvitationEmail = async( email , invitationLink, workspaceName)=>{
    await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to:email,
        subject:"you have been invited to join plannix",
        
        html:`<h2>You've been invited to join Plannix!</h2>

      <p>You have been invited to join the workspace:</p>

      <h3>${workspaceName}</h3>

      <p>Click the button below to accept the invitation.</p>

      <a href="${invitationLink}">
        Accept Invitation
      </a>
        `
    })
}
export default sendInvitationEmail;