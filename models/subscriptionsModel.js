const db = require('../config/database');

const SubscriptionsModel = {
  async getAll() {
    const res = await db.query('SELECT * FROM subscriptions');
    return res.rows;
  },

  async getByUser(userId) {
    const res = await db.query(
      'SELECT * FROM subscriptions WHERE user_id = $1',
      [userId]
    );
    return res.rows;
  },

  async create({ user_id, event_id, status }) {
    const res = await db.query(
      `INSERT INTO subscriptions (user_id, event_id, status)
       VALUES ($1, $2, $3) RETURNING *`,
      [user_id, event_id, status]
    );
    return res.rows[0];
  },

  async cancel(subscription_id) {
    await db.query(
      `UPDATE subscriptions SET status = 'cancelada' WHERE subscription_id = $1`,
      [subscription_id]
    );
  }
};

module.exports = SubscriptionsModel;
