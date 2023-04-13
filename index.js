const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual é o seu nome? ', (nome) => {
    console.log(`Seja bem-vindo, ${nome}!`);
    readline.close();
  });
  