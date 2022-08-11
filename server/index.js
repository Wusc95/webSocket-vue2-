const ws = require('ws')
;((Ws)=>{
  const server = new Ws.Server({port:9095});
  const init = () =>{
    bindEvent();
  }
  const bindEvent = ()=> {
    /**
     * open
     * error
     * close
     * connection
     *   message
     */
    server.on('open',handleOpen);
    server.on('error',handleError);
    server.on('close',handleClose);
    server.on('connection',handleConnection);
  }
  const handleOpen = (e)=>{console.log('ws-open')}
  const handleError = (e)=>{console.log('ws-error')}
  const handleClose = (e)=>{console.log('ws-close')}
  const handleConnection = (ws)=>{
    console.log('ws-connection');
    ws.on('message',handleMessage)
  }
  const handleMessage = (msg)=>{
    server.clients.forEach(c=>{
      c.send(msg)
    })
  }
  init();
})(ws)