export async function onRequestGet(context) {
  try {
    const db = context.env.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: "Database not configured" }), { status: 500 });
    }

    const orderId = context.params.id;
    
    // Get order
    const order = await db.prepare("SELECT * FROM orders WHERE id = ?").bind(orderId).first();
    
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), { status: 404 });
    }
    
    // Get items
    const { results: items } = await db.prepare("SELECT * FROM order_items WHERE order_id = ?").bind(orderId).all();
    
    order.items = items;
    
    return new Response(JSON.stringify({ 
      success: true, 
      order: order
    }), {
      headers: { "Content-Type": "application/json" }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
