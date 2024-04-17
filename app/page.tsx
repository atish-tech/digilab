"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      // console.log("Connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      setLatestMessage((m) => [...m, message.data]);
    };

    // Close connsecion
    return () => socket.close();
  }, []);

  if (!socket) {
    return <div>Socket server connecting...</div>;
  }

  return (
    <div className="w-screen h-screen overflow-auto bg-black flex items-center justify-center">
      <div className="h-screen max-w-[400px] flex flex-col items-center justify-around">
        <Image
          className="w-[200px]"
          src="/Illustration.png"
          width={100}
          height={100}
          alt="image"
        />
        <div className="flex flex-col">
          {latestMessage?.map((d, index) => (
            <p className="text-white" key={index}>
              {d}
            </p>
          ))}
        </div>
        <Image
          className="cursor-pointer w-[200px]"
          onClick={() => socket.send("New Notification")}
          src="/CTA Button.png"
          width={100}
          height={100}
          alt="image"
        />
      </div>
    </div>
  );
}

export default App;
