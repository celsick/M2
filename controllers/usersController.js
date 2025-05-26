// controllers/userController.js
const usersService = require('../services/usersService');

const getAllusers = async (req, res) => {
  try {
    const users = await usersService.getAllusers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getusersById = async (req, res) => {
  try {
    const users = await usersService.getusersById(req.params.id);
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createusers = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const newusers = await usersService.createusers(nome, email, senha);
    res.status(201).json(newusers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateusers = async (req, res) => {
  try {
    const {nome, email} = req.body;
    const updatedusers = await usersService.updateusers(req.params.id, nome, email);
    if (updatedusers) {
      res.status(200).json(updatedusers);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteusers = async (req, res) => {
  try {
    const deletedusers = await usersService.deleteusers(req.params.id);
    if (deletedusers) {
      res.status(200).json(deletedusers);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllusers,
  getusersById,
  createusers,
  updateusers,
  deleteusers
};
