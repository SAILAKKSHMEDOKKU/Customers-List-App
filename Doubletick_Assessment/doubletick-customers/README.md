# DoubleTick Customers Table

A **React + Vite** application to display and manage **1 million customer records** efficiently. The project includes **infinite scroll, search, sorting**, and a clean **table UI** with avatars, last message timestamps, and added-by indicators.

---

## Features

- Generate **1 million customer records** locally for testing.  
- Display customer data in a **table with avatars, names, emails, phones, score, last message, and added-by info**.  
- **Infinite scroll** for smooth performance on large datasets.  
- **Search** across name, email, and phone with debounce.  
- **Sorting** on any column.  
- **Custom “Added By” indicator**  
- Table header row styled in **light gray**.  
- Fully responsive **header** with logo, customer count, search bar, and filters.  
- **Last Message** formatted as `Month Day, Year, HH:Min AM/PM`.  

---

## Project Structure

```
doubletick-customers/
├─ src/
│  ├─ assets/            # Images & SVGs (logo, avatars)
│  ├─ components/
│  │  ├─ CustomerTable.jsx
│  │  ├─ TableHeader.jsx
│  │  ├─ SearchBar.jsx
│  │  └─ FilterDropdown.jsx
│  ├─ utils/
│  │  └─ generateData.js 
│  ├─ App.jsx            
│  └─ index.css           
├─ vite.config.js         
└─ package.json           
```

---

## Installation

1. Clone the repository:

```bash
git clone < https://github.com/SAILAKKSHMEDOKKU/Customers-List-App.git>
cd doubletick-customers
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```


---

## Usage

- **Search Bar:** Type to filter customers by name, email, or phone.  
- **Sorting:** Click on any table header to sort ascending/descending.  
- **Infinite Scroll:** Scroll down to load more records automatically.  
- **Filtering:** Use dropdown filters to narrow down the customer list (currently dummy/non-functional).

---

## Technologies Used

- **React 18** – Frontend UI library  
- **Vite** – Fast development server and build tool  
- **JavaScript** – ES6+ syntax  
- **CSS** – Styling for layout and table design  

---

## Notes

- The **1 million records** are generated locally in `generateData.js` for demo purposes. No backend required.  
- The project is optimized for **performance** using infinite scroll and virtualized rendering techniques.  

---



