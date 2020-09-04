import React, {Fragment} from 'react';
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import {withRoomConsumer} from "../Context";

function RoomContainer({context}){
    const{loading, sortedRooms, rooms}=context;
    if(loading){
        return <Loading/>;
    }
    return (
        <Fragment>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </Fragment>
    );
}

export default withRoomConsumer(RoomContainer);
// function RoomContainer() {
//     return(
//         <RoomConsumer>
//             {value=>{
//                 const {loading,sortedRooms,rooms}=value;
//                 if(loading){
//                     return <Loading/>;
//                 }
//                 return (
//                     <div>Hello Rooms Container
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     )
//
//
// }
//
// export default RoomContainer;