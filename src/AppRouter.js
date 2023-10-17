import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Kontak from "./page/Kontak"
import MenuMakanan from "./page/MenuMakanan"
import MenuMinuman from "./page/MenuMinuman"




const AppRoute = () => (
<Router>
    <Routes>
        <Route path="/" exact Component={App}/>
        <Route path="/menu_makanan" Component={MenuMakanan}/>
        <Route path="/menu_minuman" Component={MenuMinuman}/>
        <Route path="/kontak" Component={Kontak}/>
    </Routes>
</Router>
)

export default AppRoute