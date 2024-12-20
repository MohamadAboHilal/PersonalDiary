import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EntryList from "./components/cards";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    savedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(savedEntries);
  }, []);

  const addEntry = (newEntry) => {
    const updatedEntries = [newEntry, ...entries];
    updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <>
      <Header addEntry={addEntry} />
      <EntryList entries={entries} />
      <Footer />
    </>
  );
}

export default App;
