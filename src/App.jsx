import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";

import Experience from "./components/Experience";
import Page from "./components/Page";

function App() {
  const experienceRef = useRef();

  const pg = useRef();
  const [g, setg] = useState();

  useEffect(() => {
    setg(pg.current.getHome());
    console.log(import.meta.env.VITE_API_URL);
  }, [pg]);

  return (
    <main
      className="main"
      style={{ backgroundColor: "#f0f0f0", position: "relative" }}
    >
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(circle, rgba(0, 255, 150, 0.2), rgba(0, 0, 50, 0.8))",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(100px)",
          }}
        />
      </div>

      <Header />
      <Page ref={pg} />
      {/* <Experience /> */}
    </main>
  );
}

export default App;
