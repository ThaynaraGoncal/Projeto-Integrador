const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8ca55599784097",
    pass: "aa6cbfab415bbf"
  }
});

export default function senEmail(name, to) {
  console.log(name)

  let novaSenha = '123456'

  let msgEsqueciSenha = `
  Olá ${name}, Sua senha foi redefinada para ${novaSenha}!
  
  
  Attenciosamento,
  Equipe Resenha Fast!`

  const emailEsqueciSenha = {
    from: 'no-replay@resenha.com',
    to: to,
    subject: 'Senha redefinida! - Resenha Fast!',
    text: msgEsqueciSenha,
  };

  transport.sendMail(emailEsqueciSenha, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      return info.response;
      console.log('Email enviado: ' + info.response);
    }
  });

}