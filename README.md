# Rick and Morty Explorer 🧪

A web app built with **Next.js 15** and **React 19** that allows you to explore Rick and Morty episodes, locations, and characters using the official [Rick and Morty API](https://rickandmortyapi.com/).

This project was built as a technical exercise to demonstrate skills in routing, data fetching, global state management, form handling, and UI design.

---

## 🚀 Features

- 🔁 **Routing** using Next.js App Router
- 🧭 Dynamic pages for:
  - Episodes (`/episodes`, `/episodes/page/[page]`, `/episodes/[id]`)
  - Locations (`/locations`, `/locations/page/[page]`, `/locations/[id]`)
- 🔍 **Search** filter on listings
- 🧪 **Character carousel** (with SWR + caching)
- 💬 **Comment system**:
  - Comments stored in context (per episode ID)
  - Comment form with validation and `POST` to fake endpoint (`jsonplaceholder.typicode.com`)
- 🎨 Responsive and accessible **UI design**
- 🧼 ESLint + Prettier + clean code conventions

---

## 📦 Tech Stack

- **Framework**: Next.js 15 App Router
- **UI**: React 19 + CSS Modules
- **Data fetching**: native `fetch`, SWR
- **State management**: React Context (for comments)
- **Styling**: CSS custom properties, modular CSS
- **API**: [https://rickandmortyapi.com](https://rickandmortyapi.com)

---

## 🧪 Run the app locally

```bash
npm install
npm run dev
```

The app will be available at http://localhost:3000
