import mysql from 'mysql2/promise';

// Configuration de base (sans spécifier la base de données)
const baseConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456789',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Configuration avec la base de données
const dbConfig = {
  ...baseConfig,
  database: 'tuniform_orders',
};

// Pool principal (sera créé après l'initialisation)
let pool: mysql.Pool;

// Fonction pour obtenir le pool (initialise si nécessaire)
export async function getPool() {
  if (!pool) {
    await initializeDatabase();
  }
  return pool;
}

// Fonction pour tester la connexion
export async function testConnection() {
  try {
    const poolInstance = await getPool();
    const connection = await poolInstance.getConnection();
    console.log('✅ Connexion MySQL réussie !');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Erreur de connexion MySQL:', error);
    return false;
  }
}

// Fonction pour exécuter des requêtes
export async function executeQuery(query: string, params: any[] = []) {
  try {
    const poolInstance = await getPool();
    const [results] = await poolInstance.execute(query, params);
    return results;
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête:', error);
    throw error;
  }
}

// Fonction pour initialiser la base de données
export async function initializeDatabase() {
  try {
    // Connexion sans base de données pour la créer
    const tempConnection = await mysql.createConnection(baseConfig);
    
    // Créer la base de données si elle n'existe pas
    await tempConnection.execute(`CREATE DATABASE IF NOT EXISTS tuniform_orders`);
    await tempConnection.end();
    
    console.log('✅ Base de données créée !');
    
    // Maintenant créer le pool avec la base de données
    if (!pool) {
      pool = mysql.createPool(dbConfig);
    }
    
    // Créer la table orders
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    
    await pool.execute(createTableQuery);
    console.log('✅ Table orders créée !');
    
    return true;
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de la base de données:', error);
    throw error;
  }
}

export default getPool;