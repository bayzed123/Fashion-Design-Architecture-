"use client";

import React from "react";
import { generateInvoice } from "@/lib/generateInvoice";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { themeConfig } from "@/../themeConfig";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }

    // Generate PDF Invoice
    generateInvoice(cart, totalPrice);

    // Generate WhatsApp message
    let whatsappMessage = `Hello, I'd like to place an order.\n\nOrder Details:\n`;
    cart.forEach(item => {
      whatsappMessage += `- ${item.name} (Size: ${item.size}, Color: ${item.color}) x ${item.quantity} = ৳${(item.price * item.quantity).toFixed(2)}\n`;
    });
    whatsappMessage += `\nGrand Total: ৳${totalPrice.toFixed(2)}\n\n`;
    whatsappMessage += `Please confirm my order.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${themeConfig.contact.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-4 px-4 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        objectFit="cover"
                        className="rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Size: {item.size} | Color: {item.color}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">৳{item.price}</td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 px-2 py-1 border border-gray-300 rounded"
                      />
                    </td>
                    <td className="py-4 px-4">৳{item.price * item.quantity}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-right">
            <p className="text-2xl font-bold mb-4">
              Total: ৳{totalPrice}
            </p>
            <button
              onClick={handleCheckout}
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition active:scale-95"
              style={{ backgroundColor: themeConfig.colors.primary }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
