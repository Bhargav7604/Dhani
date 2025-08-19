import {
  FlexRowDiv,
  TableContentEndDiv,
} from "../../../../components/ui/GlobalStyles";
import {
  SymbolCell,
  TableCellText,
  UnitDiv,
  ValueSymbolText1,
  ValueSymbolText2,
} from "../../DeployedStrategiesStyles";

function GreekValues(data: any) {
  return (
    <SymbolCell>
      <FlexRowDiv $justifycontent="start" $gap="14px">
        <TableCellText $iswsname={data.data.iswsname}>
          {data.data.name}
        </TableCellText>
        <div style={{ display: "flex" }}>
          <ValueSymbolText1></ValueSymbolText1>
          <ValueSymbolText2>{`(Leg Id:${
            data?.data?.legid ?? "--"
          })`}</ValueSymbolText2>
        </div>
      </FlexRowDiv>
      <TableContentEndDiv $justifycontent="start">
        <UnitDiv>
          <ValueSymbolText1>BaseDelta</ValueSymbolText1>
          <ValueSymbolText2>{data.data.constantdelta ?? "--"}</ValueSymbolText2>
        </UnitDiv>
        <UnitDiv>
          <ValueSymbolText1>LiveDelta</ValueSymbolText1>
          <ValueSymbolText2>{data.data.currentdelta ?? "--"}</ValueSymbolText2>
        </UnitDiv>
        <UnitDiv>
          <ValueSymbolText1>BaseIV</ValueSymbolText1>
          <ValueSymbolText2>{data.data.constantiv ?? "--"}</ValueSymbolText2>
        </UnitDiv>
        <UnitDiv>
          <ValueSymbolText1>LiveIV</ValueSymbolText1>
          <ValueSymbolText2>{data.data.currentiv ?? "--"}</ValueSymbolText2>
        </UnitDiv>
        <UnitDiv>
          <ValueSymbolText1>Index@Entry</ValueSymbolText1>
          <ValueSymbolText2>
            {data.data.indexbaseprice ?? "--"}
          </ValueSymbolText2>
        </UnitDiv>
        <UnitDiv>
          <ValueSymbolText1>Index@Now</ValueSymbolText1>
          <ValueSymbolText2>
            {data.data.indexcurrentprice ?? "--"}
          </ValueSymbolText2>
        </UnitDiv>
      </TableContentEndDiv>
    </SymbolCell>
  );
}

export default GreekValues;
