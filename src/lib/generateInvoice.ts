import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { themeConfig } from "@/../themeConfig";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export const generateInvoice = (cartItems: CartItem[], totalPrice: number) => {
  const doc = new jsPDF();

  // Set font and size
  doc.setFontSize(22);
  doc.setFont(themeConfig.fonts.heading, "bold");
  doc.text(themeConfig.brandName, 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.setFont(themeConfig.fonts.body, "normal");
  doc.text("Invoice", 105, 30, { align: "center" });

  // Order details
  const orderId = `ORD-${Date.now()}`;
  const date = new Date().toLocaleDateString();

  doc.text(`Order ID: ${orderId}`, 14, 45);
  doc.text(`Date: ${date}`, 14, 52);

  // Table for cart items
  const tableColumn = ["Item Name", "Size", "Color", "Quantity", "Unit Price", "Total"];
  const tableRows: any = [];

  cartItems.forEach(item => {
    const itemData = [
      item.name,
      item.size,
      item.color,
      item.quantity,
      `৳${item.price.toFixed(2)}`,
      `৳${(item.price * item.quantity).toFixed(2)}`,
    ];
    tableRows.push(itemData);
  });

  (doc as any).autoTable(tableColumn, tableRows, {
    startY: 60,
    headStyles: { fillColor: themeConfig.colors.primary, textColor: themeConfig.colors.white, fontStyle: "bold" },
    bodyStyles: { textColor: themeConfig.colors.text },
    alternateRowStyles: { fillColor: themeConfig.colors.lightGray },
    styles: { font: themeConfig.fonts.body, fontSize: 10, cellPadding: 3, lineWidth: 0.1, lineColor: themeConfig.colors.muted },
    margin: { top: 10 },
  });

  // Total
  const finalY = (doc as any).autoTable.previous.finalY;
  doc.setFontSize(14);
  doc.setFont(themeConfig.fonts.body, "bold");
  doc.text(`Grand Total: ৳${totalPrice.toFixed(2)}`, 14, finalY + 10);

  // Save the PDF
  doc.save(`Invoice_Velluto_Order_${orderId}.pdf`);
};
