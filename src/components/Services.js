import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    
    state = {
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"free cocktails",
                info:'Loren textsLoren textsLoren textsLorenLoren textsLoren textsLoren texts'
            },
            {
                icon:<FaHiking></FaHiking>,
                title:"free haiking",
                info:'Loren textsLoren textsLoren textsLorenLoren textsLoren textsLoren texts'
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"free shuttle van",
                info:'Loren textsLoren textsLoren textsLorenLoren textsLoren textsLoren texts'
            },
            {
                icon:<FaBeer></FaBeer>,
                title:"strongest beer",
                info:'Loren textsLoren textsLoren textsLorenLoren textsLoren textsLoren texts'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                    <div className="services-center">
                        {this.state.services.map((item,index) =>{
                            return( 
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })}
                    </div>
            </section>
        )
    }
}
