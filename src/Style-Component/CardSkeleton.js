import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Pc, Mobile } from "../Media/MediaQuery";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <StyledCard key={i}>
        <div className="left-col">
          <Pc>
            <Skeleton width={150} height={200} />
          </Pc>
          <Mobile>
            <Skeleton width={100} height={140} />
          </Mobile>
        </div>
        <div className="right-col">
          <Skeleton count={3} style={{ marginBottom: ".6rem" }} />
        </div>
      </StyledCard>
    ));
};

const StyledCard = styled.div`
  width: 60%;
  heigth: 80%;
  min-height: 80%;
  padding: 0.5rem;
  border: none;
  border-radius: 20px;
  margin: 80px 60px;
  background: rgba(248, 241, 241, 0.6);
  margin: 0 auto;

  .left-col {
    margin-bottom: 1.3rem;
  }

  .right-col {
    margin: 0 20px;
  }

  @media screen and (max-width: 840px) {
    min-height: 50%;
    display: flex;
    padding: 20px;

    .left-col {
      margin-right: 1rem;
    }
    .right-col {
      flex: 1;
      margin: auto 0;
    }
  }
`;

export default CardSkeleton;
