const db = require('../config/database');

const UsersModel = {
  async getAll() {
    const res = await db.query('SELECT * FROM users');
    return res.rows;
  },

  async getById(userId) {
    const res = await db.query('SELECT * FROM users WHERE user_id = $1', [userId]);
    return res.rows[0];
  },

  async create({ nome, email, senha }) {
    const res = await db.query(
      'INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, senha]
    );
    return res.rows[0];
  },

  async delete(userId) {
    await db.query('DELETE FROM users WHERE user_id = $1', [userId]);
  }
};

module.exports = UsersModel;
