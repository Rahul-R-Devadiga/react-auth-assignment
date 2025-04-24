# 🔐 React Firebase Auth App with Interactive Gradient

This is a React + Vite project using **Firebase Authentication** (Email/Password only) and **TailwindCSS**, hosted on **Vercel**. It includes:

- Custom Login & Signup forms (no prebuilt UI)
- Protected Dashboard route for logged-in users only
- Gradient background that reacts to mouse movement
- Smart route protection for both logged-in and logged-out users

---

## 🚀 Features

- 🔒 Firebase Auth (Email/Password only)
- 🧠 Protected Dashboard: users must be logged in to access
- 👋 Redirect logged-in users away from `/login` or `/` to dashboard
- 🎨 Animated gradient background on login/signup screen (mouse-based)
- 🔁 Route protection using `ProtectedRoute.jsx` and smart logic in `Auth.jsx`

---

## 📁 File Structure

```
src/
│
├── components/
│   ├── MouseGradient.jsx      # Animated gradient background
│   └── ProtectedRoute.jsx     # Protects dashboard from unauthenticated access
│
├── pages/
│   ├── Auth.jsx               # Login + Signup UI, with redirect logic
│   └── Dashboard.jsx          # Sample protected page with logout + dummy data
│
├── firebase/
│   └── config.js              # Firebase config & initialization
│
├── utils/
│   └── validate.js            # Validate logic (email & password pattern logic)
│
├── App.jsx                    # Route declarations
└── main.jsx                   # React entrypoint
```

---

## 🔧 Tech Stack

- React (Vite)
- Firebase Auth (Email/Password only)
- Tailwind CSS
- React Router DOM
- Hosted on Vercel

---

## 📦 Setup

1. Clone the repo:

```bash
git clone https://github.com/your-username/firebase-auth-gradient.git
cd firebase-auth-gradient
```

2. Install dependencies:

```bash
npm install
```

3. Create Firebase project, enable Email/Password auth, and replace config in `/firebase/config.js`

4. Run the dev server:

```bash
npm run dev
```

---

## 🔐 Authentication Flow (High-Level)

- Unauthenticated user hits `/dashboard` → redirected to `/login`
- Authenticated user hits `/login` or `/` → redirected to `/dashboard`
- Auth state is tracked using `onAuthStateChanged` from Firebase
- Route protection is handled in `ProtectedRoute.jsx` for private pages

---

## ✨ Gradient Background Logic

The `Background.jsx` component:

- Tracks mouse movement within a container (`ref`)
- Adjusts gradient position using inline CSS
- Uses a large blurred div to give glowing effect
- Transitions smoothly to follow cursor

Used in: `Auth.jsx` for login/signup page

---

## 📄 License

MIT License
