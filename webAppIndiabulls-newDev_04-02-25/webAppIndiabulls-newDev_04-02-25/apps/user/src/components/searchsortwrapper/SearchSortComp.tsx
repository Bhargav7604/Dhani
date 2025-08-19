import { SearchWrapperDiv } from "../../modules/deployedstrategies/DeployedStrategiesStyles";
import { QuantityDiv, SearchWrapper } from "../ui/GlobalStyles";
import {
  FlexRowDiv,
  LeftAlignedWrapper,
  StyledSecondaryHeadlineText,
  StyledSelectOption,
  StyledTertiaryText,
} from "../ui/GlobalStyles";
import searchIcon from "../../assets/svgs/search-menu.svg";

import { QuantityData } from "./SearchSortData";
import { Controller } from "react-hook-form";
import { SearchSortProps } from "./SearchSortUtils";
import { QuantitySearchWrap } from "./SearchSortStyles";

function SearchSortComp({
  title,
  showQuantity,
  inputName,
  quantityName,
  control,
  wrapdivwidth,
  viewAllStrategy,
  searchPlaceholder,
}: SearchSortProps) {
  return (
    <SearchWrapperDiv $wrapdivwidth={wrapdivwidth}>
      {title && (
        <div className="itemsStartDiv">
          <StyledSecondaryHeadlineText>{title}</StyledSecondaryHeadlineText>
        </div>
      )}

      <FlexRowDiv $width="100%" $justifycontent="flex-start">
        <QuantitySearchWrap viewAllStrategy={viewAllStrategy}>
          {showQuantity && (
            <QuantityDiv>
              <StyledTertiaryText>Show</StyledTertiaryText>
              <Controller
                control={control}
                name={quantityName || ""}
                render={({ field }) => (
                  <StyledSelectOption
                    {...field}
                    viewAllStrategy={viewAllStrategy}
                    width="70px"
                  >
                    <option value="">Sort by</option>
                    {QuantityData.map((option) => {
                      return (
                        <option key={option.val} value={option.val}>
                          {option.key}
                        </option>
                      );
                    })}
                  </StyledSelectOption>
                )}
              />
            </QuantityDiv>
          )}
          <LeftAlignedWrapper>
            <SearchWrapper width={viewAllStrategy ? "40%" : "30%"}>
              <img src={searchIcon} alt="searchIcon" />
              <Controller
                control={control}
                name={inputName}
                defaultValue=""
                render={({ field }) => (
                  <input
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: "12px",
                    }}
                    {...field}
                    type="text"
                    placeholder={searchPlaceholder}
                  />
                )}
              />
            </SearchWrapper>
          </LeftAlignedWrapper>
        </QuantitySearchWrap>
      </FlexRowDiv>
    </SearchWrapperDiv>
  );
}

export default SearchSortComp;
 