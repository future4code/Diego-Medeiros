import React from "react";
import styled from "styled-components";
import ListPlaylists from "./components/ListPlaylists";

const AddPlaylist = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export class App extends React.Component {
  render() {
    return (
      <AddPlaylist>
        <ListPlaylists />
      </AddPlaylist>
    );
  }
}

export default App;
