# Installation

Install [nodejs](./nodejs.md#install-using-nvm) first

## Shadcn (Vite)

Creating Shadcn project using Vite from scratch

```sh
# Create Vite project
npm create vite@latest

# Install the initial dependencies
cd __PROJECT_NAME__
npm install

# **Optional**: To resolve compatibility issue with tailwind and shadcn later, downgrade React 19 into 18
npm install react@18 react-dom@18

# Install tailwind
npm install tailwindcss @tailwindcss/vite

# Replace index.css with the one from this folder

# Replace tsconfig.json with the one from this folder

# Replace tsconfig.app.json with the one from this folder

# Replace vite.config.ts with the one from this folder

# Init shadcn
npx shadcn@latest init

# Try to add button component
npx shadcn@latest add button

# Try to use the button component
# Replace App.jsx with the one from this folder

# Try to run the app
npm run dev
```
