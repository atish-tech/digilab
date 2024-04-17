import express, { response } from 'express'
import { WebSocket, WebSocketServer } from 'ws'

const app = express()
app.get('/' , (request:any , response:any) => {
  return response.status(200).json({message: "Socket api is connected"});
})

let httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on("error" , console.error);

  ws.on('message', function message(data, isBinary) {
    // ws.send(data , {binary: isBinary});   // data send to myself only    

    wss.clients.forEach((client) => {
      
      if(client.readyState === WebSocket.OPEN) {
        client.send(data , {binary: isBinary});
      }
    } )  
  });

  // ws.send('Hello! Message From Express Server!!');
});


















// import WebSocket, { WebSocketServer } from 'ws';
// import http from 'http';

// const server = http.createServer(function(request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// });

// const wss = new WebSocketServer({ server });

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         console.log(data);
        
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });

//   console.log("user connected");
  

//   ws.send('Hello! Message From Server!!');
// });

// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });