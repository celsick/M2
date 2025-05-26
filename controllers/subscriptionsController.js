// controllers/userController.js
const subscriptionsService = require('../services/subscriptionsService');

const getAllsubscriptions = async (req, res) => {
  try {
    const subscriptions = await subscriptionsService.getAllsubscriptions();
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getsubscriptionsById = async (req, res) => {
  try {
    const subscriptions = await subscriptionsService.getsubscriptionsById(req.params.id);
    if (subscriptions) {
      res.status(200).json(subscriptions);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createsubscriptions = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const newsubscriptions = await subscriptionsService.createsubscriptions(nome, email, senha);
    res.status(201).json(newsubscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatesubscriptions = async (req, res) => {
  try {
    const {nome, email} = req.body;
    const updatedsubscriptions = await subscriptionsService.updatesubscriptions(req.params.id, nome, email);
    if (updatedsubscriptions) {
      res.status(200).json(updatedsubscriptions);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletesubscriptions = async (req, res) => {
  try {
    const deletedsubscriptions = await subscriptionsService.deletesubscriptions(req.params.id);
    if (deletedsubscriptions) {
      res.status(200).json(deletedsubscriptions);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllsubscriptions,
  getsubscriptionsById,
  createsubscriptions,
  updatesubscriptions,
  deletesubscriptions
};
