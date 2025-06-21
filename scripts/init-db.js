import { initializeDatabase, testConnection } from '../src/lib/db.js';

async function setupDatabase() {
  console.log('🚀 Initialisation de la base de données MySQL...');
  
  try {
    // Tester la connexion
    const connected = await testConnection();
    if (!connected) {
      throw new Error('Impossible de se connecter à MySQL');
    }
    
    // Initialiser la base de données
    await initializeDatabase();
    
    console.log('✅ Base de données configurée avec succès !');
    console.log('📊 Table "orders" créée dans la base "tuniform_orders"');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    console.log('\n💡 Vérifiez que MySQL est démarré et que les paramètres de connexion sont corrects.');
    process.exit(1);
  }
}

setupDatabase();