import React from "react";

import CombinedView from "./components/CombineView";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Calendar</h1>
      <CombinedView />
    </div>
  );
};

export default App;
