const Mensagem = require('./models/Mensagem'); // Importando o modelo

async function salvarMensagem() {
  try {
    const novaMensagem = new Mensagem({
      name: 'Matheus', // Passando o nome
      email: 'matheus@email.com', // Passando o email
      mensegem: 'Compra realizada com sucesso!' // Passando a mensagem
    });

    await novaMensagem.save(); // Salvando a mensagem no banco
    console.log('Mensagem salva com sucesso!');
  } catch (err) {
    console.error('Erro ao salvar Mensagem:', err.message);
  }
}

salvarMensagem();
