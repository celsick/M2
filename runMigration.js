const fs = require('fs');
const path = require('path');
const db = require('./config/db');

// Ordena os arquivos por nome (timestamp)
const migrationsDir = path.join(__dirname, 'migrations');
const files = fs.readdirSync(migrationsDir).sort();

(async () => {
  try {
    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, 'utf8');
      console.log(`:arrows_counterclockwise: Executando: ${file}`);
      await db.query(sql);
    }
    console.log(':white_check_mark: Todas as migrações foram aplicadas com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error(':x: Erro ao executar migração:', error.message);
    process.exit(1);
  }
})();
