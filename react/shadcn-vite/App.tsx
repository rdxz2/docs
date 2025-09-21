import { Button } from "@/components/ui/button";
import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={() => setClickCount((prev) => prev + 1)}>Click me</Button>
      Click count: {clickCount}
    </div>
  );
}

export default App;
