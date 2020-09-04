import React from 'react';
import Room from "./Room";

function RoomList({rooms}) {
    if(rooms.length === 0){
       return(
           <div className="empty-search">
               <h3>Unfortunately no rooms matched your search parameters</h3>
           </div>
       )

    }
    return (
        <section className="rooms-list">
            <div className="rooms-list-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    );
}

export default RoomList;