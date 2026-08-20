"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { MessageCircle } from "lucide-react";

const CheckoutPage = () => {
  const { cart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<string>("whatsapp");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const productList = cart
      .map((item) => `${item.name} (Size: ${item.size}, Color: ${item.color}) x${item.quantity}`)
      .join("\n");

    const message = `Hello! I would like to place an order:\n\n${productList}\n\nTotal: ৳${totalPrice}\n\nCustomer Name: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}`;
    return encodeURIComponent(message);
  };

  
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState<any>(null);

  const generateWhatsAppMessage = () => {
    const productList = cart
      .map((item) => `${item.name} (Size: ${item.size}, Color: ${item.color}) x${item.quantity}`)
      .join("\n");
    const message = `Hello! I would like to place an order:\n\n${productList}\n\nTotal: ৳${totalPrice}\n\nCustomer Name: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}`;
    return encodeURIComponent(message);
  };

  const handleApiCheckout = async () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      // Try Cloudflare Pages API first
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: customerInfo.name,
          customer_phone: customerInfo.phone,
          customer_address: customerInfo.address,
          total_price: totalPrice,
          payment_method: paymentMethod,
          items: cart
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setOrderComplete(data.orderId);
          clearCart();
          return;
        }
      }
      
      // Fallback to WhatsApp if API fails (e.g., on GitHub Pages)
      console.log("API failed, falling back to WhatsApp");
      const whatsappNumber = "8801712345678";
      const message = generateWhatsAppMessage();
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      
    } catch (error) {
      // Fallback to WhatsApp on network error
      console.log("Network error, falling back to WhatsApp");
      const whatsappNumber = "8801712345678";
      const message = generateWhatsAppMessage();
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (orderComplete) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
        <p className="text-xl mb-8">Your order ID is: <span className="font-bold">{orderComplete}</span></p>
        <p className="mb-8">Thank you for shopping with Velluto Haute Couture.</p>
        <div className="flex justify-center gap-4">
          <a href={`/order-tracking?id=${orderComplete}`} className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            Track Order & Download Invoice
          </a>
          <a href="/shop" className="px-6 py-3 border border-black rounded hover:bg-gray-100 transition">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }


  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          {/* Customer Information */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={customerInfo.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={customerInfo.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                rows={3}
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>

            <div className="space-y-3">
              {/* WhatsApp Checkout */}
              <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  value="whatsapp"
                  checked={paymentMethod === "whatsapp"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <MessageCircle className="h-5 w-5 mr-2 text-green-500" />
                <div>
                  <p className="font-semibold">WhatsApp Checkout</p>
                  <p className="text-sm text-gray-600">
                    Send order details via WhatsApp for quick confirmation
                  </p>
                </div>
              </label>

              {/* bKash */}
              <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-50 opacity-50">
                <input
                  type="radio"
                  name="payment"
                  value="bkash"
                  disabled
                  className="mr-3"
                />
                <div className="w-5 h-5 mr-2 bg-red-500 rounded"></div>
                <div>
                  <p className="font-semibold">bKash</p>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </label>

              {/* Nagad */}
              <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-50 opacity-50">
                <input
                  type="radio"
                  name="payment"
                  value="nagad"
                  disabled
                  className="mr-3"
                />
                <div className="w-5 h-5 mr-2 bg-orange-500 rounded"></div>
                <div>
                  <p className="font-semibold">Nagad</p>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </label>

              {/* Cash on Delivery */}
              <label className="flex items-center p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-50 opacity-50">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  disabled
                  className="mr-3"
                />
                <div className="w-5 h-5 mr-2 bg-gray-500 rounded"></div>
                <div>
                  <p className="font-semibold">Cash on Delivery (COD)</p>
                  <p className="text-sm text-gray-600">Coming soon</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6 border-b pb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>৳0 (Free)</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>৳{totalPrice}</span>
              </div>
            </div>

            {paymentMethod === "whatsapp" && (
              <button
                onClick={handleApiCheckout} disabled={isSubmitting}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                
                {isSubmitting ? "Processing..." : "Place Order"}
              </button>
            )}

            {paymentMethod !== "whatsapp" && (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
