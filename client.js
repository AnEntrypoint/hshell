const DHT = require("@hyperswarm/dht")
const { base58_to_binary, binary_to_base58 } = require('base58-js')
const publicKey = base58_to_binary(process.argv[process.argv.length-1])
const client = async (publicKey) => {
    const node = new DHT({})
    await node.ready()
    console.log('connecting', process.argv[process.argv.length-1])
    const socket = node.connect(publicKey)
    await socket.opened

    console.log('interactive shell connected!')
    
    process.stdin.pipe(socket).pipe(process.stdout)
}
client(publicKey)