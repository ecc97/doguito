import { useState, useEffect } from 'react';
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';
import Page404 from './pages/Page404';
import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { temaClaro, temaOscuro } from './assets/theme';
import { ButtonFloating } from './components/BotonFlotante';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [tema, setTema] = useState(() => {
    // Verificar si hay un valor guardado en localStorage
    const temaGuardado = localStorage.getItem("tema");
    return temaGuardado ? JSON.parse(temaGuardado) : true; // Valor predeterminado: true (tema claro)
  });

  useEffect(() => {
    // Almacenar el estado actual del tema en localStorage
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema]);

  const toggleTema = () => {
    setTema((prevState) => !prevState);
  };

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: 0.25s;
  }
  header, nav{
    background-color: ${props => props.theme.backgroundSec};
    transition: 0.25s;
  }
  article, h2, a{
    background-color: ${props => props.theme.backgroundT};
  }
  li > a, ul > a {
    background-color: inherit;
  }
  .btnFlotante{
    background-image: url(${props => props.theme.backgroundImg});
    background-position: center;
    background-size: cover;
    transition: 0.25s;
  }
`;

  return (
    <Router>
      <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
        <GlobalStyle />
        <ButtonFloating tema={tema} toggleTema={toggleTema} />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/posts/:id' element={<Post /> } />
            <Route path='/categoria/:id/*' element={<Categoria />}/>
            <Route path='*' element={<Page404 />} />
          </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;