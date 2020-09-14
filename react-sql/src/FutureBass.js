import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './adrian-korte-5gn2soeAc40-unsplash.jpg';
import Caption, {Img, TableHead, Input, Table, TableData} from "./Constants"


class FutureBass extends Component {
  state = {
    info: [],
    new_artist: {
      artist: ''
    },
    delete_artist: {
      artist: ''
    }
  }

  componentDidMount(){
    this.getInfo();
  }
  _handleKeyDown = (e) => {
    if (e.key == "Enter") {
      this.addArtist()
    }
  }
  getInfo = _ => {
    fetch('http://localhost:4000/music/FutureBass')
      .then(response => response.json())
      .then(response => this.setState({info: response.data}))
      .catch(err => console.error(err))
  }

  addArtist =_ => {
    const {new_artist} = this.state;
    if(new_artist.artist) {
      fetch(`http://localhost:4000/music/FutureBass/add?names=${new_artist.artist}`)
        .then(this.getInfo)
        .catch(err => console.error(err))
        new_artist.artist = ''
    }
  }

  deleteArtist =_ => {
    const {delete_artist} = this.state;
    fetch(`http://localhost:4000/music/FutureBass/delete?names=${delete_artist.artist}`)
      .then(this.getInfo)
      .catch(err => console.error(err))
  }

  renderInfo = ({info_id, names}) =>
    <tr key={info_id}>
      <TableData>
        {names}
      </TableData>

        <button onClick={() =>
          this.setState({delete_artist: {artist: names}}, this.deleteArtist)
        }>
        Remove </button>

    </tr>

  render(){
    const {info, new_artist} = this.state;
    return (
        <div className="FutureBass Page">
        <h1></h1>
        <Img src={logo} alt ="Logo"/>
        <h1></h1>
        <Table>
          <Caption> EDM Artists: </Caption>
          <thead>
            <tr>
              <TableHead>Artists</TableHead>
            </tr>
          </thead>
          <tbody>
            {info.map(this.renderInfo)}
          </tbody>
            <br/>
            <Input onKeyDown = {this._handleKeyDown}
              value={new_artist.artist}
              onChange={e => this.setState({new_artist: {...new_artist, artist: e.target.value}})}/>
              &nbsp;
            <button onClick={this.addArtist}>Add artist </button>
        </Table>
      </div>
    );
  }
}

export default FutureBass;
