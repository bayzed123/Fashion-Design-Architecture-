"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Download, Package, Truck, CheckCircle } from "lucide-react";

export default function OrderTrackingPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails(orderId);
    } else {
      setLoading(false);
    }
  }, [orderId]);

  const fetchOrderDetails = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/orders/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setOrder(data.order);
      } else {
        setError(data.error || "Failed to load order");
      }
    } catch (err) {
      setError("An error occurred while fetching your order");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadInvoice = () => {
    if (!order) return;
    
    // Create a simple text/html invoice that can be printed to PDF
    const invoiceHtml = `
      <html>
        <head>
          <title>Invoice - ${order.id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; }
            .title { font-size: 24px; font-weight: bold; }
            .company { font-weight: bold; font-size: 20px; }
            .details { display: flex; justify-content: space-between; margin-bottom: 40px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            th, td { border-bottom: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #f9f9f9; }
            .total { text-align: right; font-size: 20px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="company">VELLUTO HAUTE COUTURE</div>
              <div>Luxury Fashion Collection</div>
            </div>
            <div>
              <div class="title">INVOICE</div>
              <div>Order ID: ${order.id}</div>
              <div>Date: ${new Date(order.created_at).toLocaleDateString()}</div>
            </div>
          </div>
          
          <div class="details">
            <div>
              <strong>Billed To:</strong><br/>
              ${order.customer_name}<br/>
              ${order.customer_phone}<br/>
              ${order.customer_address}
            </div>
            <div>
              <strong>Payment Method:</strong><br/>
              ${order.payment_method.toUpperCase()}<br/>
              <br/>
              <strong>Status:</strong><br/>
              ${order.status.toUpperCase()}
            </div>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Details</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map((item: any) => `
                <tr>
                  <td>${item.product_name}</td>
                  <td>Size: ${item.size || 'N/A'}, Color: ${item.color || 'N/A'}</td>
                  <td>${item.quantity}</td>
                  <td>৳${item.price}</td>
                  <td>৳${item.price * item.quantity}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="total">
            Grand Total: ৳${order.total_price}
          </div>
          
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;
    
    const blob = new Blob([invoiceHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  if (loading) {
    return <div className="py-20 text-center">Loading order details...</div>;
  }

  if (error || !order) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Order Not Found</h1>
        <p className="mb-8">{error || "Please enter a valid order ID to track your order."}</p>
        <form className="max-w-md mx-auto flex gap-2" action="/order-tracking" method="GET">
          <input 
            type="text" 
            name="id" 
            placeholder="Enter Order ID (e.g., ORD-12345)" 
            className="flex-1 p-3 border rounded"
            required
          />
          <button type="submit" className="px-6 py-3 bg-black text-white rounded">Track</button>
        </form>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <button 
          onClick={handleDownloadInvoice}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded transition"
        >
          <Download className="w-4 h-4" /> Download Invoice
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b">
          <div>
            <p className="text-sm text-gray-500 mb-1">Order ID</p>
            <p className="font-semibold">{order.id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Date</p>
            <p className="font-semibold">{new Date(order.created_at).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Amount</p>
            <p className="font-semibold">৳{order.total_price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Payment Method</p>
            <p className="font-semibold capitalize">{order.payment_method}</p>
          </div>
        </div>
        
        {/* Order Status Timeline */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-6">Order Status</h3>
          <div className="relative">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div className="absolute left-0 top-1/2 w-1/3 h-1 bg-black -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Order Placed</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${order.status === 'processing' || order.status === 'shipped' || order.status === 'delivered' ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Processing</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${order.status === 'shipped' || order.status === 'delivered' ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Shipped</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${order.status === 'delivered' ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Delivered</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customer Details */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Delivery Details</h3>
          <div className="bg-gray-50 p-4 rounded text-sm">
            <p className="font-semibold">{order.customer_name}</p>
            <p>{order.customer_phone}</p>
            <p>{order.customer_address}</p>
          </div>
        </div>
        
        {/* Order Items */}
        <div>
          <h3 className="text-lg font-bold mb-4">Order Items</h3>
          <div className="border rounded divide-y">
            {order.items && order.items.map((item: any) => (
              <div key={item.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.product_name}</p>
                  <p className="text-sm text-gray-500">
                    {item.size && `Size: ${item.size}`} {item.size && item.color && '|'} {item.color && `Color: ${item.color}`}
                  </p>
                </div>
                <div className="text-right">
                  <p>৳{item.price} x {item.quantity}</p>
                  <p className="font-bold">৳{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Link href="/shop" className="text-black underline hover:no-underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
