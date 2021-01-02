import React, {useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import  UseDarkMode from "./components/UseDarkMode";
import Toggle from "./components/Toggler";

export default function App() {
    const [theme, themeToggler] = UseDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <BrowserRouter>
                    <div className="app">
                        <Toggle theme={theme} toggleTheme={themeToggler} />
                        <Route component={Home} path="/" exact />
                        <Route component={NasaPhoto} path="/nasaphoto" />
                    </div>
                </BrowserRouter>
        </ThemeProvider>
    );
};
