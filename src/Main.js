import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/index'
import Pistol from './Pages/Pistol/index'
import Ak from './Pages/Rifle/AK'
import Rifle from './Pages/Rifle/index'
import SMG from './Pages/SMG/index'
import Sniper from './Pages/Sniper/index'

const Main = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/pistol" component={Pistol}></Route>
            <Route exact path="/rifle" component={Rifle}></Route>
                <Route exact path="/rifle/AK" component={Ak}></Route>
            <Route exact path="/smg" component={SMG}></Route>
            <Route exact path="/sniper" component={Sniper}></Route>
        </Switch>
    )
}

export default Main;