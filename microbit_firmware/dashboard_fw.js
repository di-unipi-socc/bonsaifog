let lostPing = 0
let lastPing = 0
let deadPing = 0
let now = 0
let clients: Client[] = []
// Radio monitoring dashboard
//
// Each radio client is represented by a dot on the
// screen. Once a client is registered, it will stay
// at the same pixel location forever.
//
// Radio clients can simply send a number (between
// 0..255) on group 4. They must transmit the serial
// number using
// ``radio.setTransmitSerialNumber(true)``
//
// The received number is used to set the LED
// brightness for that client.
//
// If the radio packet is not received for 10sec, the
// LED starts blinking.
//
deadPing = 20000
lostPing = 10000
interface Client {
    // client serial id
    id: number;
    // sprite on screen
    sprite: game.LedSprite;
    // last ping received
    ping: number;
}
// lazy allocate sprite
function getClient(id: number): Client {
    // needs an id to track radio client identity
    if (!id)
        return undefined;

    // look for cache clients
    for (const client of clients)
        if (client.id == id)
            return client;
    const n = clients.length;
    if (n == 24) // out of pixels 
        return undefined;
    const client2: Client = {
        id: id,
        sprite: game.createSprite(n % 5, n / 5),
        ping: input.runningTime()
    }
    clients.push(client2);
    return client2;
}
// store data received by clients
radio.onDataPacketReceived(packet => {
    const client3 = getClient(packet.serial);
    if (!client3)
        return;
    serial.writeValue("moisture", packet.receivedNumber * 4)
    client3.ping = input.runningTime()
    client3.sprite.setBrightness(Math.max(1, packet.receivedNumber & 0xff));
})
// setup the radio and start!
radio.setGroup(4)
game.addScore(1)
// monitor the sprites and start blinking when no
// packet is received
basic.forever(() => {
    now = input.runningTime()
    for (let client4 of clients) {
        // lost signal starts blinking
        lastPing = now - client4.ping
        if (lastPing > deadPing) {
            client4.sprite.setBlink(0)
            client4.sprite.setBrightness(0)
        } else if (lastPing > lostPing) {
            client4.sprite.setBlink(500);
        } else {
            client4.sprite.setBlink(0);
        }
    }
    basic.pause(500)
})
