// import { useState } from 'react';
import { useEffect } from "react";
import "./App.css";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  const handleCredentialResponse = (response) => {
    console.log("response", response.credential);
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "90218340677-c8ktvtl8fqu766jijqsai3prtq07ro6a.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.prompt();
  }, []);

  return (
    <div className="app">
      <PokemonDetails />
    </div>
  );
}

export default App;
