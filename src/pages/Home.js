import React, {Fragment} from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Button from '../components/StyledHero';

function Home() {
    return (
        <Fragment>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms startting at $299">
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
            <Button>Hi</Button>
        </Fragment>
    );
}

export default Home;