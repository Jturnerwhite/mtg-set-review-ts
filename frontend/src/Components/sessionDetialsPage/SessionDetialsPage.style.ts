import styled from '@emotion/styled';

export const SessionDetialsStyle = styled('div')`
  .details-card {
    background: #bfbfbf;
    border: 5px solid #808080;
    border-radius: 8px;
    width: 35rem;
    padding: 1rem;
    margin: 2rem auto;
    height: 70vh;
  }
  .detials-jdenticon {
    border: 5px solid #808080;
    width: 120px;
    height: 120px;
    border-radius: 1rem;
    box-shadow: 6px 5px 24px 1px rgba(0, 0, 0, 0.49);
    background-color: white;
  }
  .details-card-info {
    margin-left: 2rem;
  }
  .details-card-hearder {
    display: flex;
  }
  .details-session-name {
    line-height: 1px;
    text-transform: capitalize;
  }
  .details-set-name {
    margin-top: 2rem;
    display: flex;
    img {
      padding: 7px 7px 7px 0px;
    }
  }
  .hr {
    border-top: 2px solid black;
  }
  .rating-container {
    background: white;
    border: 5px solid #808080;
    border-radius: 8px;
    margin: 1rem auto;
    overflow: auto;
    height: 60%;
  }
  .card-info-container {
  }
  .card-info {
    display: flex;
    border: 1px solid #808080;
    padding: 0 1rem 0 1rem;
    p {
      flex: 1 1;
    }
  }
  #card-rating {
    text-align: end;
  }
  #details-link {
    text-align: end;
    color: black;
  }
`;
