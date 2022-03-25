import React, { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "./pages/NotFound";
import { AnimalsPage } from "./pages/AnimalsPage";
import axios from "axios";
import { IAnimal } from "./models/IAnimal";
import { AnimalPage } from "./pages/AnimalPage";
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    const storedAnimals = localStorage.getItem("myAnimals");
    if (storedAnimals == null || storedAnimals === "[]") {
      console.log("Had no stored animals in localStorage, fetching new ones");
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((Response) => {
          setAnimals(Response.data);
        });
    } else {
      setAnimals(JSON.parse(storedAnimals));
    }
  }, []);

  useEffect(() => {
    if (animals.length > 0) {
      console.log("setting animals in localStorage");
      localStorage.setItem("myAnimals", JSON.stringify(animals));
    }
  }, [animals]);

  function fedAnimal(id: number) {
    const a = animals.map((animal) => {
      if (id === animal.id) {
        animal.isFed = true;
        animal.lastFed = new Date();
      }
      return animal;
    });
    setAnimals(a);
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AnimalsPage animals={animals} />} />
            <Route
              path="/animal/:id"
              element={<AnimalPage fedAnimal={fedAnimal} animals={animals} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
