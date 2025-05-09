-- Tabela de usuários
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha TEXT NOT NULL
);

-- Tabela de eventos
CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descricao TEXT,
  data DATE NOT NULL,
  horario TIME NOT NULL,
  local VARCHAR(100),
  capacidade INTEGER NOT NULL
);

-- Tabela de inscrições
CREATE TABLE subscriptions (
  subscription_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(event_id) ON DELETE CASCADE,
  data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) CHECK (status IN ('confirmada', 'cancelada', 'espera')) NOT NULL
);
