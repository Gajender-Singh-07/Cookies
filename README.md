# Cookies

# 🍪 Cookies – Browser Cookie Manager

A lightweight JavaScript web application that allows users to easily create, view, update, and delete browser cookies with a clean and straightforward user interface.

---

## 🎯 Features

- ✅ Create a new cookie with name, value, and expiry date  
- 🔍 View a list of all current cookies  
- ✏️ Edit the value or expiry of existing cookies  
- 🗑️ Delete cookies individually  
- 🌍 Fully client-side — no backend required

---

## 🛠 Tech Stack

- **HTML5** – Page structure  
- **CSS3** – Clean, minimalist design  
- **JavaScript (Vanilla)** – Cookie CRUD logic using `document.cookie`

---


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Gajender-Singh-07/Cookies.git
cd Cookies
```


2. Open the App
Open index.html in your browser—no server or dependencies needed.

3. Use the Cookie Manager
Add Cookie: Enter name, value, and expiry days, then click Add.
View Cookies: See all active cookies in the table below.
Edit/Delete: Use buttons alongside each cookie entry.

⚙️ How It Works
setCookie(name, value, days) — Creates or updates a cookie
getCookie(name) — Retrieves the value of a specific cookie
getAllCookies() — Parses and lists all cookies
deleteCookie(name) — Removes a cookie by setting expiry to the past
UI automatically refreshes to reflect changes in real time

