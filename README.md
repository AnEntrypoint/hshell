# hshell
The quickest, easiest way to share an interactive shell

run the server, it will give you a key

```
ubuntu@instance-20221201-1030:~/$ npm start

> htty@1.0.0 start
> node server.js

KEY: JZ7qhAqYMLGjGsX4MkwnuXBQ49qboRWxMtuT5ctVFYE
```

that key should be the argument you give the client

```
ubuntu@instance-20221201-1030:~/$ npm run client JZ7qhAqYMLGjGsX4MkwnuXBQ49qboRWxMtuT5ctVFYE

> htty@1.0.0 client
> node client.js "JZ7qhAqYMLGjGsX4MkwnuXBQ49qboRWxMtuT5ctVFYE"

connecting JZ7qhAqYMLGjGsX4MkwnuXBQ49qboRWxMtuT5ctVFYE
interactive shell connected!
```
