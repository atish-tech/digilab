"use client"
import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import { pusherClient } from '@/components/pusher';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { toast } from "sonner"


const pusher = pusherClient;

const Notifications = () => {
  const [notifications, setNotifications] = useState("");

  useEffect(() => {
    const channel = pusher.subscribe("123567");

    channel.bind("notificqdcwdation:new", (data:any) => {
      console.log(data);
      setNotifications(data);
      toast("New Notification from server")
    });

   
  }, []);

  const sendNotification = async () => {
    try {
      fetch("/api");
      // setNotifications("..")
    } catch (error) {
      console.log(error);
      
    }
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
      <Image
        className="cursor-pointer w-[200px]"
        onClick={sendNotification}
        src="/CTA Button.png"
        width={100}
        height={100}
        alt="image"
      />
    </div>
  </div>
  );
};

export default Notifications;