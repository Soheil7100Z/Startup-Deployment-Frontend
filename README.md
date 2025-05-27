# Startup Frontend

A React-based frontend for a startup company website. It showcases the company’s products and includes pages for home, products, item for each product, about us, contact, and user comments.

## 🌐 Live URL

- [Start up on Vercel](https://frontend-startup-henna.vercel.app)

## 🔍 Features

- **Pages**: Home, Products, Item, About Us, Comments, Contact
- **Comments Page**: Add and delete comments (communicates with backend API)
- **Contact Form**:
  - Collects: Full Name, Gender, Email, Phone, Postal Code, Message
  - On success: Shows confirmation and sends confirmation email to the user
  - On error: Displays user-friendly error messages (without using `alert()`)
- **UX Enhancements**:
  - Sticky header
  - Custom loading spinner (`ClipLoader`)
  - Clean layout with footer

## 🛠️ Packages Used

- **React** (bootstrapped with Vite)
- **Custom Utility CSS** (handwritten by myself)
- **React Router DOM** – page navigation
- **React Icons** – icons
- **React Spinners** – loading indicators

## 🔌 API Integration

- Connected to backend hosted on Render
- Uses `fetch()` with `GET` and `POST` requests to work with products and comments data on the backend

## 📦 Key React Tools

- `useState`, `useEffect`, `useLoaderData`, `useNavigate`
- Component-based layout for scalability

## 🚀 Run Locally

```bash
git clone https://github.com/Soheil7100Z/Startup-Frontend.git
cd Startup-Frontend
npm install
npm run dev
