const EventEmitter = require('events');//creating an event
const EventEmmiter=new EventEmitter();

/*
EventEmmiter.on("greet",()=>{
    console.log(`HELLLOOOO....`);//LISTEN TO AN EVENT[.on()]
});

EventEmmiter.emit("greet");//EMIT AN EVENT[.emit()]
*/

//we can pass data when emmiting event
/*
EventEmmiter.on("order",(item)=>{
    console.log(`order received:${item}`);
});
EventEmmiter.emit("order","laptop");
*/

//we can have multiple listeners for a single event
/*
EventEmmiter.on("order",()=>{
    console.log(`order placed successfully`);
});

EventEmmiter.on("order",()=>{
    console.log(`order received`);
});

EventEmmiter.emit("order");
*/

//once():runs only once

EventEmmiter.once("greet",()=>{
    console.log(`HELLLOOOO....`);
})

EventEmmiter.emit("greet")
EventEmmiter.emit("greet")
EventEmmiter.emit("greet")


//we can create event emitter class
class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmmiter=new Sales();
myEmmiter.on("newSale",(item)=>{
    console.log(`new sale received:${item}`);
});
myEmmiter.emit("newSale","car");
