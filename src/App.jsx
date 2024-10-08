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
  }, [pg]);

  return (
    <main
      className="main"
      style={{ backgroundColor: "#f0f0f0", position: "relative" }}
    >
      <Header />
      <Page ref={pg} />
      {/* <Experience /> */}
    </main>
  );
}

export default App;
