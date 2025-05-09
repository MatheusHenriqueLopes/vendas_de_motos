const express = require("express");
const router = express.Router();
const Mensagem = require("../models/Mensagem");

router.post("/", async (req, res) => {
    try {
        const novaMensagem = new Mensagem(req.body);
        await novaMensagem.save();
        res.status(201).json({ message: "Mensagem salva com sucesso!" });
    } catch (error) {
        console.log(error); // Log do erro para depuração
        res.status(400).json({ error: error.message }); // Use 'error.message' para enviar o erro na resposta
    }
});

module.exports = router;

