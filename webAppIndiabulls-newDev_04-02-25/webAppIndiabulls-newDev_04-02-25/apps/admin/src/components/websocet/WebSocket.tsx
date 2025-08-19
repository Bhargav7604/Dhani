import { useEffect } from "react";
import { useAppDispatch } from "../../store/Store";
import { updateSocketData } from "./state-slice/SocketSlice";
import { BaseWebSocketLocalURL } from "../../../../user/src/services/AppEndpoints";

let socketInstance: WebSocket | null = null;

const WebSocketComponent = () => {
  const dispatch = useAppDispatch();

  const AuthUserId = sessionStorage.getItem("uId");

  useEffect(() => {
    if (!AuthUserId) return;

    if (!socketInstance) {
      socketInstance = new WebSocket(BaseWebSocketLocalURL);

      socketInstance.onopen = () => {
        const authData = {
          token: sessionStorage.getItem("token"),
          otpSessionId: sessionStorage.getItem("otpSessionId"),
          mobileNumber: sessionStorage.getItem("mobileNumber"),
          clientId: sessionStorage.getItem("clientId"),
          userId: AuthUserId,
        };
        socketInstance?.send(JSON.stringify(authData));
      };

      socketInstance.onmessage = (event: any) => {
        try {
          const receivedData = JSON.parse(event.data);
          dispatch(updateSocketData(receivedData));
        } catch (error) {
          console.error("WebSocket message error:", error);
        }
      };

      // socketInstance.onclose = () => {
      //   socketInstance = null;
      // };
    }

    return () => {
      if (socketInstance) {
        socketInstance.close();
        socketInstance = null;
      }
    };
  }, [AuthUserId, dispatch]);

  return null;
};

export default WebSocketComponent;
