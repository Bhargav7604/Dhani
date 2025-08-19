import { Outlet } from "react-router-dom";
import AlgoPage from "../header/HeaderPage";
import { ContentContainer, LayoutContainer } from "./LayoutStyles";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../store/Store";
import { setAlgoCompHeight } from "./state-slice/AlgoCompDimensionSlice";

export default function Layout() {
  const algoHeaderHeight = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!algoHeaderHeight.current) return;

    const handleResize = () => {
      const newHeight =
        algoHeaderHeight.current?.getBoundingClientRect().height;
      dispatch(setAlgoCompHeight({ algoCompHeight: newHeight }));
    };

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newHeight = entry.contentRect.height;
        dispatch(setAlgoCompHeight({ algoCompHeight: newHeight }));
      }
    });

    observer.observe(algoHeaderHeight.current);
    handleResize(); // Set initial height

    window.addEventListener("resize", handleResize); // Trigger on window resize

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div style={{ overflowY: "hidden" }}>
      <LayoutContainer>
      <AlgoPage
        // ref={algoHeaderHeight}
      />
      <ContentContainer
        // $margintop={algoCompHeight}
      >
          <Outlet />
        </ContentContainer>
      </LayoutContainer>
    //  </div>
  );
}
