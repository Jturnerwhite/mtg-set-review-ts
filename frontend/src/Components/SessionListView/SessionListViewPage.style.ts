import styled from '@emotion/styled';

export const SessionListViewPageStyle = styled('div')`
  .session-card {
    background: #bfbfbf;
    border: 5px solid #808080;
    border-radius: 8px;
    text-align: center;
    width: 300px;
    padding: 1rem;
    margin: 2rem;
  }
  .test {
    display: flex;
  }
  .session-link {
    color: black;
    text-transform: capitalize;
    text-decoration: none;
    img {
      height: 6rem;
      margin-bottom: 1rem;
    }
  }
  .session-details {
    line-height: 1.5rem;
    text-align: left;
    margin: 0.5rem;
    padding: 0.5rem;
    background: white;
    border: 2px solid #808080;
  }
  .session-buttons {
    margin-top: 1rem;
    display: flex;
    button {
      font-weight: bold;
      font-size: 1rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: #942222;
    }
    .review-button {
      font-weight: bold;
      font-size: 1rem;
      color: black;
      margin-left: auto;
      padding-right: 7px;
      color: #175934;
    }
  }
`;
