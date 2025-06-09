const db = require('../config/database');

const EventsModel = {
  async getAll() {
    const res = await db.query('SELECT * FROM events');
    return res.rows;
  },

  async getById(eventId) {
    const res = await db.query('SELECT * FROM events WHERE event_id = $1', [eventId]);
    return res.rows[0];
  },

  async create({ titulo, descricao, data, horario, local, capacidade }) {
    const res = await db.query(
      `INSERT INTO events (titulo, descricao, data, horario, local, capacidade)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [titulo, descricao, data, horario, local, capacidade]
    );
    return res.rows[0];
  }
};

module.exports = EventsModel;
