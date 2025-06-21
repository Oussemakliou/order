import { NextRequest, NextResponse } from 'next/server';
import { executeQuery, initializeDatabase } from '@/lib/db';

// Interface pour les commandes
interface Order {
  id: number;
  customer_name: string;
  email: string;
  created_at: string;
}

// GET /api/orders - Récupérer toutes les commandes
export async function GET() {
  try {
    // Initialiser la base de données si nécessaire
    await initializeDatabase();
    
    // Récupérer toutes les commandes triées par date de création (plus récent en premier)
    const query = `
      SELECT id, customer_name, email, created_at 
      FROM orders 
      ORDER BY created_at DESC
    `;
    
    const orders = await executeQuery(query) as Order[];
    
    // Transformer les données pour correspondre à l'interface frontend
    const formattedOrders = orders.map(order => ({
      id: order.id,
      customerName: order.customer_name,
      email: order.email,
      createdAt: order.created_at,
    }));
    
    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders from database' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Créer une nouvelle commande
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerName, email } = body;

    // Validation
    if (!customerName || !email) {
      return NextResponse.json(
        { error: 'Customer name and email are required' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialiser la base de données si nécessaire
    await initializeDatabase();
    
    // Insérer la nouvelle commande dans la base de données
    const insertQuery = `
      INSERT INTO orders (customer_name, email) 
      VALUES (?, ?)
    `;
    
    const result = await executeQuery(insertQuery, [customerName.trim(), email.trim().toLowerCase()]) as any;
    
    // Récupérer la commande créée
    const selectQuery = `
      SELECT id, customer_name, email, created_at 
      FROM orders 
      WHERE id = ?
    `;
    
    const [newOrder] = await executeQuery(selectQuery, [result.insertId]) as Order[];
    
    // Formatter la réponse
    const formattedOrder = {
      id: newOrder.id,
      customerName: newOrder.customer_name,
      email: newOrder.email,
      createdAt: newOrder.created_at,
    };

    return NextResponse.json(formattedOrder, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order in database' },
      { status: 500 }
    );
  }
}