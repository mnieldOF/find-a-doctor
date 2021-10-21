import styled from "@emotion/styled";
import { system, borderColor } from "styled-system";

import {
  space,
  color,
  layout,
  grid,
  alignItems,
  border,
  typography,
  flexWrap,
  flexDirection,
  justifyContent,
  flex,
  flexBasis,
  alignSelf,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  gridArea,
  gridColumn,
  position,
  boxShadow,
} from "styled-system";

export const TextStyled = styled.p(
  {
    color: "grey",
  },
  space,
  color,
  typography,
  layout,
  border
);

export const Container = styled.div`
  maxwidth: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;
