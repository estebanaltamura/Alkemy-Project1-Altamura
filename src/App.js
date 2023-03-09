import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LoginForm } from "./components/login/LoginForm";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetails } from "./components/ItemDetails";
import { LoginContextProvider } from "./context/LoginContextProvider"; 
import { HeaderSearchModeContext } from './context/headerSearchModeContext'; 
import { Results } from "./components/Results";




function App() {
  return (
    <>
    <BrowserRouter>
      <LoginContextProvider>
        < HeaderSearchModeContext>
          <Header />
        </HeaderSearchModeContext>
        <Routes>
          <Route path={"/"} element={<LoginForm />} />
          <Route path={"/listado"} element={<ItemListContainer />} />
          <Route path={"/movie/:movieId"} element={<ItemDetails />} />
          <Route path={"/results/:query"} element={<Results />} />
        </Routes>
        <Footer />
      </LoginContextProvider>
    </BrowserRouter>

    </>
    
  );
}

export default App;