Sure! Here's a **Next.js app setup guide** tailored for your Stripe payment gateway project, including environment variable instructions and the Vercel live link.

---

# ⚡ Stripe Payment Gateway – Next.js Setup Guide

This is a [Next.js](https://nextjs.org) app integrated with **Stripe Checkout** to handle secure payments using an embedded or hosted checkout experience.

🚀 **Live Demo**:
👉 [https://stripe-payment-gateway-ashen.vercel.app/](https://stripe-payment-gateway-ashen.vercel.app/)

---

## 🛠 Getting Started Locally

To run this project on your local machine:

### 1. **Clone the Repository**

```bash
git clone <your-repo-url>
cd stripe-payment-gateway
```

### 2. **Install Dependencies**

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 3. **Set Up Environment Variables**

Create a `.env.local` file in the root of the project and add the following:

```env
# Stripe secret key (found in your Stripe dashboard)
STRIPE_SECRET_KEY=sk_test_yourSecretKeyHere

# Stripe publishable key (used on frontend)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_yourPublishableKeyHere

# Stripe webhook secret (optional, for handling webhooks)
STRIPE_WEBHOOK_SECRET=whsec_yourWebhookSecretHere

# MongoDB connection string (if using product storage)
MONGODB_URI=mongodb+srv://yourMongoUser:yourPassword@cluster.mongodb.net/dbname
```

Make sure to replace all placeholder values with your actual credentials.

---

### 4. **Run the Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open your browser and visit:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure Highlights

-   `app/`: Next.js App Router structure.
-   `app/api/payment/route.ts`: API route to create Stripe Checkout sessions.
-   `app/payment-result/page.tsx`: Displays payment success confirmation.
-   `components/`: UI components, including modals and buttons.
-   `lib/stripe.ts`: Stripe configuration helper.
-   `lib/dbConfig.ts`: MongoDB connection helper.
-   `models/product.model.ts`: Mongoose product schema.

---

## 📦 Features

-   Stripe Embedded Checkout
-   MongoDB product model integration
-   Custom fields during checkout (like delivery location)
-   Dynamic payment success page
-   Vercel deployment ready

---

## 📡 Live Deployment

This project is deployed on **Vercel**:
🌐 [https://stripe-payment-gateway-ashen.vercel.app/](https://stripe-payment-gateway-ashen.vercel.app/)

---

## 📚 Learn More

-   [Stripe Docs](https://stripe.com/docs)
-   [Next.js Docs](https://nextjs.org/docs)
-   [Vercel Deploy Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

Let me know if you want this turned into a downloadable `README.md` or used in your GitHub project!
