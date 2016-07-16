
 Event Driven Non-Blocking I/O in V8 Javascript.
-------------------------------------------------------------------

System Events 
-------------

 (C++ Core) -> libuv(System library) -> Manage the Events from Operating System.

Custom Events 
-------------

Event Emitter.

V8  
---
- Runs set of JS codes 

libuv 
-----

- Its is specifically deals with the things happens lower level in OS.
- Eg - Request to read  a file or download the file from internet.
- It has queue inside , a queue of completed events. 
- OS will update the completed events to this queue.
- There is a event loop will check for completed events in libuv. 
- When libuv sees completed events in event loop, It process the events and call the callback in V8(JS callback). 
- This is completly async , libuv and v8 runs parllely inside node itself.






