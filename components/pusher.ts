import PusherServer from "pusher";
import PusherClient from "pusher-js"

export const pusherServer = new PusherServer({
    appId: "1758144",
    key: "bae1859e06d97e59544a",
    secret: "208bf36049b54c6d5c76",
    cluster: "ap2"
})

export const pusherClient = new PusherClient(
    "bae1859e06d97e59544a", { cluster: "ap2" }
)