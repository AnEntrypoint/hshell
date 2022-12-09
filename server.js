const { base58_to_binary, binary_to_base58 } = require('base58-js');
const DHT = require("@hyperswarm/dht");
const server = async (keyPair) => {
    const node = new DHT({});
    await node.ready();
    const server = node.createServer();
    server.on("connection", function (client) {
        cp = require("child_process");
        sh = cp.spawn("/bin/sh", []);
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    server.listen(keyPair);
}
const kp = DHT.keyPair(process.argv.length > 2?process.argv[process.argv.length-1]:null);
console.log("KEY:", binary_to_base58(kp.publicKey));
server(kp);
