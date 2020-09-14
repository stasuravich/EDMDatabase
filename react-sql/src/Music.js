import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './adrian-korte-5gn2soeAc40-unsplash.jpg';
import Caption, {Img, TableHead} from "./Constants"

const Table = styled.table`
  border-collapse: collapse;
  width:25%;
  position:fixed;
  left:38%;
`;

const TableData = styled.td`
  width: 90%;
  font-size: 3vh;
  border: 1px solid Black;
  text-align: left;
`;

class Music extends Component {
  state = {
    music: []
  }

  componentDidMount(){
    this.getMusic();
  }

  getMusic = _ => {
    fetch('http://localhost:4000/music')
      .then(response => response.json())
      .then(response => this.setState({music: response.data}))
      .catch(err => console.error(err))
  }
  renderMusic = ({music_id, genre, birth}) => <tr key={music_id}>
      <TableData>
        <a href ={"http://localhost:3000/Music/"+ genre.replace(/\s/g, '')}> {genre} </a>
      </TableData>
      <TableData>
        {birth}
      </TableData>
  </tr>

  render(){
    const {music} = this.state;
    return (
      <div className="Music Page">
        <h1></h1>
        <Img src={logo} alt ="Logo"/>
        <h1></h1>
        <Table>
          <Caption> EDM Genres: </Caption>
          <thead>
            <tr>
              <TableHead>Genres</TableHead>
              <TableHead>Birth</TableHead>
            </tr>
          </thead>
          <tbody>
            {music.map(this.renderMusic)}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Music;
