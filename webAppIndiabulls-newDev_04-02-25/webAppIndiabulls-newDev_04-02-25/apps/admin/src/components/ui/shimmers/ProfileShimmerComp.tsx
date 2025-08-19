import styled from "styled-components";

const ShimmerPageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 110px 0px 0px 110px;
  height: 100%;
  gap: 15px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;

const BigShimmerBlock = styled.div`
  width: 36vw;
  height: 70vh;
 background-color: #e7ebef; /* Soft blue background */
 
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.5) 45%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.5) 55%,
    rgba(255, 255, 255, 0.2) 60%,
    rgba(255, 255, 255, 0) 65%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: shimmer 2.5s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 18px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 90%;
    height: auto;
  }
`;

const ProfileShimmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ShimmerTitle = styled.div`
  width: 60%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ShimmerRow = styled.div`
  width: 100%;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-top: 25px;
`;

const ProfileShimmer = () => (
  <ShimmerPageWrapper>
    {/* Left Shimmer Block */}
    <BigShimmerBlock>
      <ProfileShimmerContainer>
        <ShimmerTitle /> {/* Placeholder for Title */}
        {new Array(5).fill(null).map((_, index) => (
          <ShimmerRow key={index} />
        ))}
      </ProfileShimmerContainer>
    </BigShimmerBlock>

    {/* Right Shimmer Block */}
    <BigShimmerBlock>
      <ProfileShimmerContainer>
        {new Array(3).fill(null).map((_, index) => (
          <ShimmerRow key={index} />
        ))}
      </ProfileShimmerContainer>
    </BigShimmerBlock>
  </ShimmerPageWrapper>
);

export default ProfileShimmer;
