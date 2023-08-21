import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    const result = await db.all(`select * from passenger_queue_count`)
    console.log('join queue')

}

export async function leaveQueue() {
    console.log('leave queue')
    
}

export async function joinTaxiQueue() {
    // const sql = await db.all(`select * from taxi_queue`)
   
}

export async function queueLength() {
       
}

export async function taxiQueueLength() {

}

export function taxiDepart() {

}

// taxiQueue: [],

//     joinsCount: 0,
//         joinQueue() {

//     this.joinsCount++;
// },
// leaveQueue() {
//     if (this.joinsCount > 0) {
//         this.joinsCount--;
//     }


// },

// taxiJoinsCount: 0,
//     joinTaxiQueue() {
//     this.taxiJoinsCount++;

// },

// taxiDepartCount: 0,
//     taxiDepart() {
//     if (this.joinsCount >= 12 > 0) {
//         this.taxiDepartCount++;
//     }
// },

// queueLength() {


// },

// taxiQueueLength() {

// },
// }