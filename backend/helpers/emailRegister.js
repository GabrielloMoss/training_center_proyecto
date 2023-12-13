import nodemailer from 'nodemailer';


const emailRegister= async(datos)=>{
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host:"smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "gabrielcarrascomillao@gmail.com",
          pass: "cakmcbastoslnnxv",
        }
      });
      const {email, name, token} = datos;
      const info = await transporter.sendMail({
        from: "Strong Gym",
        to: email,
        subject: "valida tu cuenta en Strong Gym",
        text:"valida tu cuenta en Strong Gym",
        html:`<p> Hola: ${name}, valida tu cuenta en Strong Gym  </p>
        <p> para comprobar tu cuenta visita el siguiente enlace: 
        <a href="http://localhost:3000/confirmar/${token}">Comprobar cuenta</a></p>`
        
    })
    console.log("mensaje enviado:%s", info.messageId)
}

export default emailRegister;