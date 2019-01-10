import feathers from '@feathersjs/feathers'
import authentication from '@feathersjs/authentication-client'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

// import feathers from 'feathers/client';
// import socketio from 'feathers-socketio/client';
// import io from 'socket.io-client';
// import hooks from 'feathers-hooks'
// import authentication from 'feathers-authentication-client';
// import storage from '~helpers/ssr-storage';

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || '3030'
const socket = io(`http://${host}:${port}`)

const app = feathers()
  .configure(socketio(socket))
  // .configure(hooks())
  .configure(authentication())

export default app