import styled from '@emotion/styled';

export const CreateSessionPageStyle = styled('div')`
  .create-session-container {
    background: #bfbfbf;
    border: 5px solid #808080;
    border-radius: 8px;
    width: 35rem;
    padding: 1rem;
    margin: 2rem auto;
    height: 70vh;
  }
  .create-session-fields{
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  #sessionName{
    border: none;
    border-bottom: 2px solid black;
    font-size: 2rem;
    background: transparent;
    text-align: center;
  }
  #sessionName:focus{
    outline:none;
  }
  #sessionName::placeholder {
    color: #808080;
  }
  .session-list-container{
    text-align: left;
    background: white;
    border: 5px solid #808080;
    border-radius: 8px;
    margin: 1rem auto;
    overflow: auto;
    height: 55vh;
    padding: .5rem;
  }
  .session-set{
    border: 1px solid #808080;
    margin-bottom: .5rem;
    padding: .5rem;

  }
  #submit-btn {
    text-align: end;
    font-size: 1.5rem;
    border: none;
    text-decoration: underline;
    background: transparent;
    float: right;
    cursor: pointer;
  }
  #cancel-btn{
    font-size: 1.5rem;
    color: black;
  }
  }
`;
