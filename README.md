# Frontend Smartphone Storefront

## Project Overview

This project is a website dedicated to selling smartphones. It features separate interfaces for buyers and administrators.

- **Data Persistence Logic:** Designed a buyer and admin interface using HTML5, CSS3, and Vanilla JavaScript.
- **Practical Storage:** Implemented local storage logic to maintain data persistence across browser sessions without a traditional database.

## View the Project Live

You can view the live version of this project at [Live Demo Link](https://dungtq2k5.github.io/web1-project/) and the admin dashboard at [Admin Dashboard Link](https://dungtq2k5.github.io/web1-project/admin.html) (email: `admin`, password: `admin123`).

## Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules).
- **Architecture:** MVC-like structure on the client side (`models`, `views`, `controllers`).
- **Storage:** Browser LocalStorage.

## Project Setup

To run this project locally:

1. Clone this repository or download the source code.
2. Open `index.html` in your web browser to access the customer interface.
   *(Note: Using a local server extension like 'Live Server' in VS Code is recommended to ensure JavaScript modules load correctly).*
3. Open `admin.html` to access the administrator dashboard.

## Admin Access

To access the admin features, navigate to `admin.html` and log in with:

- **Email:** `admin`
- **Password:** `admin123`

## Troubleshooting

If you encounter a bug or need to reset the data to its initial state:

1. Open the browser's developer console (F12).
2. Type the following command and press Enter to reset the storage:

   ```js
   localStorage.clear();
   ```
