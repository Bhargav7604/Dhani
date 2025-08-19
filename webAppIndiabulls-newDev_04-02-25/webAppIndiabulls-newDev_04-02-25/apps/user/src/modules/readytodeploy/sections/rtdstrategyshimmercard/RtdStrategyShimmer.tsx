// import styled , {keyframes}from "styled-components";
// const shimmer = keyframes`
//   0% {
//     background-position: 150% 0;
//   }
//   100% {
//     background-position: -150% 0;
//   }
// `;
// export const ShimmerCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 180px;
//   border-radius: ${(props) => props.theme.app.measures.borderRadius};
//   background-color: #e7ebef;
//   border: 1px solid ${(props) => props.theme.app.colors.headerbackground};
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

//   /* Shimmer Effect */
//   background-image: linear-gradient(
//     to right,
//     rgba(255, 255, 255, 0) 35%,
//     rgba(255, 255, 255, 0.5) 45%,
//     rgba(255, 255, 255, 0.6) 50%,
//     rgba(255, 255, 255, 0.5) 55%,
//     rgba(255, 255, 255, 0.2) 60%,
//     rgba(255, 255, 255, 0) 65%
//   );
//   background-repeat: no-repeat;
//   background-size: 200% 100%;
//   animation: ${shimmer} 2.5s ease-in-out infinite;

//   @media (min-width: ${(props) =>
//       props.theme.app.resolutions.tabMax}) and (max-width: ${(props) =>
//       props.theme.app.resolutions.desktopMidPointMax}) {
//     height: 220px;
//   }

//   @media (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
//     height: 260px;
//   }
// `;
