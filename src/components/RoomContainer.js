import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;

    if(loading){
        return(
            <Loading />
        )
    }
    return(
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}
export default withRoomConsumer(RoomContainer);
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return(
//                         <Loading></Loading>
//                     )
//                 }
//                     return(
//                         <div> 
//                             Hello from Rooms countainer 
//                             <RoomsFilter rooms={rooms}></RoomsFilter>
//                             <RoomsList rooms={sortedRooms}></RoomsList>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
