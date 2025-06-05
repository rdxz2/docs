# Installation

Install [nodejs](./nodejs.md#install-using-nvm) first

## Shadcn (vite)

Create vite project

```sh
npm create vite@latest

cd __PROJECT_NAME__
npm install
```

**Optional**: To resolve compatibility issue with tailwind and shadcn later, downgrade React 19 into 18

```sh
npm install react@18 react-dom@18
```

Install tailwind

```sh
npm install tailwindcss @tailwindcss/vite
```

Replace `/src/index.css`

```css
@import "tailwindcss";
```

Edit `tsconfig.json`

```json
{
  // ...
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  // ...
}
```

Edit `tsconfig.app.json`

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}
```

Edit `vite.config.ts`

```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Init shadcn

```sh
npx shadcn@latest init
```

Try to add button component

```sh
npx shadcn@latest add button
```

Try to use the button component

```jsx
import { Button } from "@/components/ui/button";
import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={() => setClickCount((prev) => prev + 1)}>
        Click me
      </Button>
      Click count: {clickCount}
    </div>
  );
}

export default App;
```

Try to run the app

```sh
npm run dev
```
