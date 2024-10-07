
# DCIT LTD. WEBSITE
This project is a React-based application that uses Vite as its build tool. It also includes Tailwind CSS for styling and several additional React libraries for UI components and features.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x.x or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/) (optional)

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:dcit-ltd/main-website.git dcit-website

   cd dcit-website
   ```

2. **Install dependencies:**

   If you are using `npm`:

   ```bash
   npm install
   ```

   Or, if you are using `yarn`:

   ```bash
   yarn install
   ```

## Running the Development Server

To start the development server and preview the project locally:

```bash
npm run dev
```

Or, if you're using `yarn`:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` by default (the port may vary).

## Building the Project for Production

To build the project for production:

```bash
npm run build
```

Or, using `yarn`:

```bash
yarn build
```

The production build will be optimized and output to the `dist/` folder.

## Previewing the Production Build

After building the project, you can preview the production build locally:

```bash
npm run preview
```

Or, with `yarn`:

```bash
yarn preview
```

This will start a server for the built project, which can be accessed at a specified port, typically `http://localhost:4173`.

## Linting the Project

To run ESLint and check for any linting issues:

```bash
npm run lint
```

Or, using `yarn`:

```bash
yarn lint
```