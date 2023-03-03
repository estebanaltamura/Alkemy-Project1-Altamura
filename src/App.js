import { LoginForm } from "./components/LoginForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetails } from "./components/ItemDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path={"/"} element={<LoginForm />} />
          <Route path={"/listado"} element={<ItemListContainer />} />
          
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;