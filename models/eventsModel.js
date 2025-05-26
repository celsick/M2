const db = require('../config/database');

class Event {
  static async getAll() {
    const result = await db.query('SELECT * FROM events');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM events WHERE id_events = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO events (nome, email) VALUES ($1, $2) RETURNING *',
      [data.nome, data.email]
    );
    return result.rows[0];
  }
  
  static async update(id, data) {
    const result = await db.query(
      'UPDATE events SET nome = $1, email = $2 WHERE id_events = $3 RETURNING *',
      [data.nome, data.email, id]
    );
    return result.rows[0];
  }
  
  static async delete(id) {
    const result = await db.query('DELETE FROM events WHERE id_events = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Event;
