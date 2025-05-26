const db = require('../config/database');

class Subscription {
  static async getAll() {
    const result = await db.query('SELECT * FROM subscriptions');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM subscriptions WHERE id_subscriptions = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO subscriptions (nome, email) VALUES ($1, $2) RETURNING *',
      [data.nome, data.email]
    );
    return result.rows[0];
  }
  
  static async update(id, data) {
    const result = await db.query(
      'UPDATE subscriptions SET nome = $1, email = $2 WHERE id_subscriptions = $3 RETURNING *',
      [data.nome, data.email, id]
    );
    return result.rows[0];
  }
  
  static async delete(id) {
    const result = await db.query('DELETE FROM subscriptions WHERE id_subscriptions = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Subscription;
