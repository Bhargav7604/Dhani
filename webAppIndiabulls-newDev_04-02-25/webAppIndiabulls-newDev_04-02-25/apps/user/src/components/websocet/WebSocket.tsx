import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../store/Store";
import {
  updateSocketData,
  updateStrategyStatusData,
} from "./state-slice/SocketSlice";
import { BaseWebSocketLocalURL } from "../../services/AppEndpoints";

const WebSocketComponent = () => {
  const dispatch = useAppDispatch();
  const socketRef = useRef<WebSocket | null>(null);
  const AuthUserId = sessionStorage.getItem("uId");

  useEffect(() => {
    if (!AuthUserId) return;

    if (!socketRef.current) {
      socketRef.current = new WebSocket(BaseWebSocketLocalURL);

      socketRef.current.onopen = () => {
        const authData = {
          token: sessionStorage.getItem("token"),
          otpSessionId: sessionStorage.getItem("otpSessionId"),
          mobileNumber: sessionStorage.getItem("mobileNumber"),
          clientId: sessionStorage.getItem("clientId"),
          userId: AuthUserId,
        };
        socketRef.current?.send(JSON.stringify(authData));
      };

      socketRef.current.onmessage = (event: any) => {
        try {
          const receivedData = JSON.parse(event.data);
          // dispatch(updateSocketData({socketData: receivedData}));
          if (receivedData.type === "OPEN_POSITIONS") {
            dispatch(updateSocketData({ socketData: receivedData.data }));
          } else if (receivedData.type === "STRATEGY_STATUS") {
            dispatch(
              updateStrategyStatusData({
                strategyStatusData: receivedData.data,
              })
            );
          }
        } catch (error) {
          console.error("WebSocket message error:", error);
        }
      };
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, []);

  return null;
};

export default WebSocketComponent;
