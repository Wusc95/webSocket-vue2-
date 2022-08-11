export function useWebsocket(message){
  const ws = new WebSocket("ws://localhost:9095")

  const bindEvent = ()=>{
    ws.addEventListener('open',handleOpen,false);
    ws.addEventListener('close',handleClose,false);
    ws.addEventListener('error',handleError,false);
    ws.addEventListener('message',message,false);
  }
  const handleOpen = ()=>{
    console.log('websocket open')
  }
  const handleClose = ()=>{
    console.log('websocket close')
  }
  const handleError = ()=>{
    console.log('websocket error')
  }
  bindEvent();
  return ws;
}