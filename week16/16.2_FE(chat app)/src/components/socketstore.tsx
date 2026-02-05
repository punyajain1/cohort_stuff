class SocketStore {
    private _socket: WebSocket | null = null;
    private _room: string | null = null;
    private _name:string | null = null
  
    get socket() {
      return this._socket;
    }
  
    set socket(ws: WebSocket | null) {
      this._socket = ws;
    }

    get name() {
        return this._name;
      }
    
      set name(name: string | null) {
        this._name = name;
      }
  
    get room() {
      return this._room;
    }
  
    set room(roomCode: string | null) {
      this._room = roomCode;
    }
  }
  
export const socketStore = new SocketStore();
  