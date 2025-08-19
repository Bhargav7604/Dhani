import { store } from '../store/store';
import { setConnectionStatus, updatePnLData } from '../store/slices/socketSlice';

class WebSocketService {
  private static instance: WebSocketService;
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000;

  private constructor() {}

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  public connect(url: string) {
    try {
      this.ws = new WebSocket(url);

      this.ws.onopen = () => {
        console.log('WebSocket connected');
        store.dispatch(setConnectionStatus(true));
        this.reconnectAttempts = 0;
        
        // Send authentication data
        this.sendAuthData();
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handleMessage(data);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        store.dispatch(setConnectionStatus(false));
        this.attemptReconnect(url);
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        store.dispatch(setConnectionStatus(false));
      };
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
    }
  }

  private sendAuthData() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const authData = {
        token: 'mock-token',
        userId: '1',
        clientId: 'CLIENT001',
      };
      this.ws.send(JSON.stringify(authData));
    }
  }

  private handleMessage(data: any) {
    if (data.type === 'OPEN_POSITIONS') {
      // Update P&L data
      store.dispatch(updatePnLData({
        todaysPnL: data.todaysPAndL || 0,
        positionalPnL: data.positionalPAndL || 0,
        intradayPnL: data.intradayPAndL || 0,
        overallPnL: data.overAllUserPAndL || 0,
        deployedCapital: data.deployedCapital || 0,
      }));
    }
  }

  private attemptReconnect(url: string) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      
      setTimeout(() => {
        this.connect(url);
      }, this.reconnectInterval);
    } else {
      console.log('Max reconnection attempts reached');
    }
  }

  public disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  public send(data: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }
}

export default WebSocketService.getInstance();