import styled from 'styled-components';

const Caption = styled.caption`
  font-size: 4vh;
  font-weight: bold;
  text-align: left;
  font-style: italic;
  color: Brown;
`;

export const Img = styled.img`
  width: 10%;
  height:10%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width:25%;
  position:fixed;
  left:40%;
`;


export const TableData = styled.td`
  width: 85%;
  font-size: 3vh;
  border: 1px solid Black;
  text-align: left;
`;

export const TableHead = styled.th`
  font-size: 3.5vh;
  border: 1px solid Black;
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.input`
  height: 18px;
  width:150px;
`;



export default Caption;
