export async function onRequestPost(context) {
  try {
    const db = context.env.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: "Database not configured" }), { status: 500 });
    }

    const orderData = await context.request.json();
    const { customer_name, customer_phone, customer_address, total_price, payment_method, items } = orderData;
    
    // Generate order ID
    const orderId = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    
    // Insert order
    const insertOrder = db.prepare(
      "INSERT INTO orders (id, customer_name, customer_phone, customer_address, total_price, payment_method) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(orderId, customer_name, customer_phone, customer_address, total_price, payment_method);
    
    // Prepare item inserts
    const stmts = [insertOrder];
    
    for (const item of items) {
      const itemId = 'ITEM-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      stmts.push(
        db.prepare(
          "INSERT INTO order_items (id, order_id, product_id, product_name, size, color, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        ).bind(itemId, orderId, item.id, item.name, item.size || null, item.color || null, item.quantity, item.price)
      );
    }
    
    // Execute batch
    await db.batch(stmts);
    
    return new Response(JSON.stringify({ 
      success: true, 
      orderId: orderId,
      message: "Order placed successfully" 
    }), {
      headers: { "Content-Type": "application/json" }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
