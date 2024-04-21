import React from "react-dom";
import { Helmet } from "react-helmet";
import nazarLogo from "../../assets/nazarLogo.png";
function NoPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <title> Nazar&apos;s Webpage</title>
          <link rel="icon" type="image/png" href={nazarLogo} sizes="16x16" />
        </Helmet>
        <h1>Opps, nothing found </h1>
      </header>
    </div>
  );
}

export default NoPage;