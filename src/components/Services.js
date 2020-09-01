import React, {Component} from 'react';
import Title from "./Title";
import {FaBeer, FaCocktail, FaHiking, FaShuttleVan} from "react-icons/all";

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ratione!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ratione!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ratione!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ratione!"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        );
    }
}

export default Services;