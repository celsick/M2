// controllers/userController.js
const eventsService = require('../services/eventsService');

const getAllevents = async (req, res) => {
  try {
    const events = await eventsService.getAllevents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const geteventsById = async (req, res) => {
  try {
    const events = await eventsService.geteventsById(req.params.id);
    if (events) {
      res.status(200).json(events);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createevents = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const newevents = await eventsService.createevents(nome, email, senha);
    res.status(201).json(newevents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateevents = async (req, res) => {
  try {
    const {nome, email} = req.body;
    const updatedevents = await eventsService.updateevents(req.params.id, nome, email);
    if (updatedevents) {
      res.status(200).json(updatedevents);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteevents = async (req, res) => {
  try {
    const deletedevents = await eventsService.deleteevents(req.params.id);
    if (deletedevents) {
      res.status(200).json(deletedevents);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllevents,
  geteventsById,
  createevents,
  updateevents,
  deleteevents
};
