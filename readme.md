# 🎵 MusicClone – Full Stack Music Web Application

## NOTE -- You can access Home (User) and Admin pages directly without using the ProtectWrapper.
There is no need to create an account — you can go directly to those routes.
user-http://localhost:5173/user-home
admin-http://localhost:5173/admin-home

**MusicClone** is a complete full stack music streaming application with separate **frontend** and **backend** folders. It supports user/admin authentication, music and album management, and a responsive music player.

---

## 📁 Project Structure

```
MusicClone/
│
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    ├── .env
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── README.md
    └── vite.config.js
```

---

## 🔧 Backend

**Tech Stack:** Node.js, Express, MongoDB, Mongoose, Cloudinary, JWT, Multer

### ✅ Features:
- User and Admin authentication using JWT
- CRUD operations for songs and albums
- File upload support via Cloudinary (for audio & images)
- Token blacklisting for logout security

### ⚙️ Environment Variables:
Create a `.env` file in the `backend/` folder with the following:

```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### ▶️ Running the Backend:

```bash
cd backend
npm install
npm run server
```

The backend will run on: [http://localhost:4000](http://localhost:4000)

---

## 💻 Frontend

**Tech Stack:** React, Vite, Tailwind CSS, Axios, React Router, React Toastify

### ✅ Features:
- User and Admin login/signup
- Music player with playlists and album views
- Admin dashboard to manage songs and albums
- Clean, responsive UI using Tailwind CSS

### ⚙️ Environment Variables:
Create a `.env` file in the `frontend/` folder with:

```env
VITE_BASE_URL=http://localhost:4000
```

### ▶️ Running the Frontend:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on: [http://localhost:5173](http://localhost:5173)

---

## 🚀 Usage

- Visit the frontend URL in the browser.
- Register or log in as a **user** or **admin**.
- Admins can add, list, or delete songs and albums from the dashboard.
- Users can browse, play, and explore music.

---

## 📝 Notes

- Ensure **MongoDB** and **Cloudinary** credentials are correctly set in the backend `.env` file.
- Both **frontend** and **backend** servers must be running for full functionality.
- CORS is enabled by default for development.

---

## 📄 License

This project is for **educational purposes only**.
