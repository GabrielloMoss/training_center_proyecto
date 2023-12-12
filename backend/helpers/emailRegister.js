import nodemailer from 'nodemailer';


const emailRegister= async(datos)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });
      const {email, name, token} = datos;
      const info = await transporter.sendMail({
        from: "Strong Gym",
        to: email,
        subject: "valida tu cuenta en Strong Gym",
        text:"valida tu cuenta en Strong Gym",
        html:`<p> Hola: ${name}, valida tu cuenta en Strong Gym  </p>
        html:<p> para comprobar tu cuenta visita el siguiente enlace: 
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a></p>`
        
    })
    console.log('mensaje enviado:%s, info.messageId')
}

export default emailRegister;