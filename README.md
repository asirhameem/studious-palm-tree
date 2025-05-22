# React + Tailwind Shopping Cart Application

This project is a shopping cart demo built with React and Tailwind CSS. It demonstrates dynamic cart logic, including free products added based on main product selection.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd react-js-tailwind
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   This will start the app locally. Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

4. **Build for production**

   To create an optimized production build:

   ```bash
   npm run build
   ```

   The output will be in the `dist` folder.

5. **Preview the production build**

   ```bash
   npm run preview
   ```

## Project Structure

- `src/` - Main source code (components, hooks, pages)
- `public/` - Static assets
- `tailwind.config.cjs` - Tailwind CSS configuration
- `vite.config.js` - Vite configuration

## Customization

- Edit products and cart logic in `src/hooks/useProducts.hook.js`.
- UI components are in `src/components/`.

## License

This project is for demo purposes. Feel free to use and modify as needed.
