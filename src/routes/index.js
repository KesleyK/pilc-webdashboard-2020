import React from "react";
import Home from '../components/Home';
import VideoCarousel from '../components/VideoCarousel';
import Exercises from '../components/Exercises';
import Ranking from '../components/Ranking';

import { useSelector } from 'react-redux';

const Routes = () => {
    const page = useSelector(state => state.page)
    switch(page){
        case 'home':
            return <Home />;
        case 'exercises':
            return <Exercises />;
        default:
            return <Home />;
    }
}

export default Routes;