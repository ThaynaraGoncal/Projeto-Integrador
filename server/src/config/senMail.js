const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "contatostgf@gmail.com",
    pass: "Tata489837"
  }
});

//465

export default async function senEmail(name, to, senha) {

  let msgEsqueciSenha = `
  Olá ${name}, Sua senha foi redefinada para ${senha}!
  

  
  Attenciosamento,
  Equipe Resenha Fast!`

  const emailEsqueciSenha = {
    from: 'thaynarafaria21@gmail.com',
    to: to,
    subject: 'Senha redefinida! - Resenha Fast!',
    text: msgEsqueciSenha,
  };

  const deucerto = await transport.sendMail(emailEsqueciSenha, async function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.accepted);
    }
  });

  console.log(deucerto)

}