# Configuration MySQL pour Tuniform

## 📋 Prérequis
- MySQL Server installé et démarré
- Port 3306 disponible
- Utilisateur root avec mot de passe : 123456789

## 🚀 Installation

### 1. Installer les dépendances
```bash
npm install mysql2
```

### 2. Configurer MySQL
Assurez-vous que MySQL est démarré avec les paramètres :
- **Host**: localhost
- **Port**: 3306
- **User**: root
- **Password**: 123456789

### 3. Initialiser la base de données

#### Option A: Script automatique
```bash
npm run init-db
```

#### Option B: Script SQL manuel
Exécutez le fichier `database/setup.sql` dans MySQL Workbench ou phpMyAdmin

### 4. Lancer l'application
```bash
npm run dev
```

## 🗃️ Structure de la base de données

### Table: orders
```sql
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🔧 Configuration

Les paramètres de connexion sont dans `src/lib/db.ts` :
```typescript
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456789',
  database: 'tuniform_orders'
};
```

## ✅ Test de connexion

L'application teste automatiquement la connexion MySQL au démarrage et initialise la base de données si nécessaire.

## 🐛 Dépannage

1. **Erreur de connexion**: Vérifiez que MySQL est démarré
2. **Erreur d'authentification**: Vérifiez le mot de passe root
3. **Port occupé**: Vérifiez que le port 3306 est libre