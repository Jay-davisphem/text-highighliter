import { useState } from "react";
import "./app.css";

import Records from "./components/Records";
import RecordDetail from "./components/RecordDetail";
import Annotations from "./components/Annotations";
function App() {
  return (
    <main>
      <Records />
      <RecordDetail />
      <Annotations />
    </main>
  );
}

export default App;
