import { useDispatch } from "react-redux";
import ToasterComp from "../../../../../../../packages/ui/src/sharedcomponents/toasters/ToasterComp";
import { removeToaster } from "../../state-slice/ToasterSlice";
import { useEffect } from "react";
import { useAppSelector } from "../../../../store/Store";
import { ToasterContainer } from "../../../../../../../packages/ui/src/sharedcomponents/toasters/ToasterStyles";

const ToasterHandler = () => {
  const { toasters } = useAppSelector((appState) => appState.toasters);
  const dispatch = useDispatch();

  useEffect(() => {
    //
  }, [toasters]);

  return (
    <ToasterContainer style={{}}>
      {toasters?.map((toaster: any) => (
        <ToasterComp
          id={toaster.id}
          key={toaster.id}
          status={toaster.status}
          message={toaster.message}
          duration={toaster.duration}
          onClose={() => dispatch(removeToaster(toaster.id))}
        />
      ))}
    </ToasterContainer>
  );
};

export default ToasterHandler;
