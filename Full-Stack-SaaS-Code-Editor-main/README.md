---

<h1 align="center">✨ SaaS Code Editor — Next.js 15 IDE Platform ✨</h1>

<div align="center">
  <img src="https://github.com/user-attachments/assets/5db117a5-bf4e-4149-9817-1e7da06db7ec" width="100%" alt="SaaS IDE Screenshot 1" />
  <img src="https://github.com/user-attachments/assets/67119a06-3ca4-43b3-8dea-4eea6d71ddd6" width="100%" alt="SaaS IDE Screenshot 2" />
  <img src="https://github.com/user-attachments/assets/d77c6278-d91a-4cd2-ae18-78a18225d376" width="100%" alt="SaaS IDE Screenshot 3" />
</div>

---

<div align="center">

🚀 Built with [Next.js 15](https://nextjs.org/) • ⚡ Powered by [Convex](https://www.convex.dev/) • 🔐 Auth via [Clerk](https://clerk.dev/)
🛠️ TypeScript • 🌐 Full-stack • 💻 Multi-language Support

</div>

---

## 🧠 Project overview

**SaaS Code Editor** is a fully-featured online IDE that supports **10+ languages**, built for developers who want fast, beautiful, and collaborative coding in the browser.

Whether you're coding solo, showcasing snippets, or managing paid plans, this project provides a complete **SaaS development experience**.

---

## 🔥 Features

| Category               | Features                                                                 |
| ---------------------- | ------------------------------------------------------------------------ |
| 💻 **Editor**          | Online IDE with 10+ language support (C, C++, JavaScript, Python & more) |
| 🎨 **Themes**          | 5 stunning VSCode-inspired themes to personalize your experience         |
| 📜 **Smart Output**    | Color-coded success & error state handling                               |
| 🔐 **Authentication**  | Clerk-powered secure sign-in/sign-up system                              |
| 💰 **Monetization**    | Free and Pro plans with Lemon Squeezy integration                        |
| 🔗 **Webhooks**        | Real-time webhook event handling support                                 |
| 👤 **User Profiles**   | Personal profile with run history tracking                               |
| 📊 **Dashboard**       | Admin & user dashboards with statistics and metrics                      |
| 🧠 **Community**       | Browse, search, and share code snippets publicly                         |
| 🧩 **Customizable UI** | Font size controls, theme selector, and responsive layout                |
| 🔍 **Search & Filter** | Advanced snippet and language-based filtering                            |

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 15, TypeScript, TailwindCSS
* **Backend:** Convex (serverless backend with real-time reactivity)
* **Auth:** Clerk
* **Payments:** Lemon Squeezy
* **Deployment:** Vercel

---

## 📦 Installation & Setup

> 🔐 Be sure to set up the following environment variables before running the project:

### `.env.local` (Root)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_key_here
CONVEX_DEPLOYMENT=your_convex_deployment_url
NEXT_PUBLIC_CONVEX_URL=your_public_convex_url
```

### Convex Dashboard Secrets

```env
CLERK_WEBHOOK_SECRET=your_webhook_secret
LEMON_SQUEEZY_WEBHOOK_SECRET=your_lemon_secret
```

### 💻 Run the app

```bash
npm install
npm run dev
```

App will be live at: `http://localhost:3000`

---

## 🖼️ Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/5db117a5-bf4e-4149-9817-1e7da06db7ec" width="80%" alt="Preview 1" />
</p>

---

## 🧪 Future Enhancements

* [ ] Real-time collaborative editing (via WebRTC or CRDT)
* [ ] GitHub integration for importing/exporting files
* [ ] Terminal emulator support
* [ ] Plugin store for extensions (themes, linters, etc.)

---

## 📣 Contributing

Contributions are welcome! Open issues, suggest features, or submit pull requests.

```bash
git clone https://github.com/your-username/saas-code-editor.git
cd saas-code-editor
npm install
```

---

## 🙌 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Convex](https://www.convex.dev/)
* [Clerk](https://clerk.dev/)
* [Lemon Squeezy](https://www.lemonsqueezy.com/)
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)
* Inspiration from various SaaS starter templates

---

## 🌐 Live Demo

(https://full-stack-saa-s-code-editor.vercel.app/)

---
