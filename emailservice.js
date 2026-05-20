const nodemailer = require('nodemailer');

const sendInvoice = async (orderDetails) => {
  // Create transporter (Use Ethereal for dev, SendGrid/Gmail for prod)
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'your_ethereal_user', 
        pass: 'your_ethereal_pass' 
    }
  });

  const itemsList = orderDetails.items.map(i => `<li>${i.name} - $${i.price}</li>`).join('');

  const html = `
    <div style="font-family: sans-serif; color: #000;">
      <h1 style="color:#fff; background:#000;">Aultak Order Confirmed</h1>
      <p>Thank you for your purchase.</p>
      <ul>${itemsList}</ul>
      <p><strong>Total: $${orderDetails.total}</strong></p>
      <p>Payment Method: ${orderDetails.payment_method}</p>
    </div>
  `;

  await transporter.sendMail({
    from: '"Aultak" <orders@aultak.com>',
    to: orderDetails.customer_email,
    subject: `Order #${Math.floor(Math.random() * 10000)} Confirmed`,
    html: html
  });
};

module.exports = { sendInvoice };
