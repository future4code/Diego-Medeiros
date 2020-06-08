import React from "react";
import axios from "axios";
import styled from "styled-components";

const TelaPlay = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Label = styled.div`
  display: flex;
  background-color: black;
  color: white;
  font-size: 30px;
`;

export class ListPlaylist extends React.Component {
  state = {
    nomePlaylist: "",
    playlists: [],
    playlistId: "",
    playlistTracks: [],
    nomeMusica: "",
    nomeBanda: "",
    url: "",
    trocaPagina: true,
  };

  componentDidMount = () => {
    this.getPlaylists();
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist,
    };
    const headers = {
      headers: {
        Authorization: "diego-messias-mello",
      },
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        headers
      )
      .then(() => {
        alert("Playlist Criada");
        this.getPlaylists();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidUpdate = () => {
    const listaDePlaylists = this.state.playlists;
    localStorage.setItem("playlistsSalvas", JSON.stringify(listaDePlaylists));
  };

  getPlaylists = () => {
    const headers = {
      headers: {
        Authorization: "diego-messias-mello",
      },
    };
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deletePlaylist = (playlistId) => {
    const headers = {
      headers: {
        Authorization: "diego-messias-mello",
      },
    };
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        headers
      )
      .then(() => {
        alert("Playlist deletada");
        this.getPlaylists();

        this.setState({ trocaPagina: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getPlaylistTracks = (playlistId) => {
    const headers = {
      headers: {
        Authorization: "diego-messias-mello",
      },
    };
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        headers
      )
      .then((response) => {
        this.setState({
          playlistTracks: response.data.result.tracks,
          trocaPagina: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addTrackToPlaylist = (playlistId) => {
    const headers = {
      headers: {
        Authorization: "diego-messias-mello",
      },
    };
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeBanda,
      url: "https://open.spotify.com/embed/track/" + this.state.url,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        headers
      )
      .then(() => {
        alert("Música adicionada com sucesso!");
        this.setState({
          nomeMusica: "",
          nomeBanda: "",
          url: "",
          urlColada: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  playlistDigitada = (event) => {
    const novaPlaylistDigitada = event.target.value;
    this.setState({ nomePlaylist: novaPlaylistDigitada });
  };

  musicaDigitada = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };

  bandaDigitada = (event) => {
    this.setState({ nomeBanda: event.target.value });
  };

  urlDigitada = (event) => {
    this.setState({ url: event.target.value });
  };

  urlColada = (event) => {
    this.setState({ urlColada: event.target.value });
  };

  troca = () => {
    this.setState({ trocaPagina: !this.state.trocaPagina });
  };
  resultPlaylists = () =>
    this.state.playlists.map((playlist) => {
      return (
        <div>
          <li>
            {playlist.name}
            <br></br>
            <button onClick={() => this.deletePlaylist(playlist.id)}>
              Deletar Playlist
            </button>
            <button onClick={() => this.getPlaylistTracks(playlist.id)}>
              Mostrar Conteúdo
            </button>
            <button onClick={() => this.addTrackToPlaylist(playlist.id)}>
              Adicionar
            </button>
          </li>
          <hr></hr>
        </div>
      );
    });

  render() {
    if (this.state.trocaPagina) {
      return (
        <div>
          <h1>Labefy, AONDE A MÚSICA ACONTECE</h1>
          <h3>
            Digite o nome da playlist e clique no botão adicionar para criar
            playlist!
          </h3>
          <h3>
            Clique em mostrar conteúdo para mostrar as músicas e adicionar
            música completando as informações dos campos no fim da página!
          </h3>
          <input
            type="text"
            value={this.state.nomePlaylist}
            placeholder="Nome da Playlist"
            onChange={this.playlistDigitada}
          ></input>
          <button onClick={this.criarPlaylist}>Adicionar</button>
          {this.resultPlaylists()}
        </div>
      );
    }
    const resultTracklist = this.state.playlistTracks.map((tracks) => {
      return (
        <h1>
          Música:&nbsp;{tracks.name}
          <br></br>
          Banda:&nbsp;{tracks.artist}
          <br></br>
          Link:&nbsp;
          <iframe
            src={tracks.url}
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </h1>
      );
    });

    return (
      <div>
        <button onClick={this.troca}>Esconder</button>

        <h1>Labefy, AONDE A MÚSICA ACONTECE</h1>

        <input
          type="text"
          value={this.state.nomePlaylist}
          placeholder="Nome da Playlist"
          onChange={this.playlistDigitada}
        ></input>
        <button onClick={this.criarPlaylist}>Adicionar</button>
        {this.resultPlaylists()}
        {resultTracklist}
        <p>
          Adicione músicas com o código de música do Spotify, vá na música que
          você deseja no Spoify e vá em "Copiar link da Música"
        </p>
        <p>
          Cole aqui:{" "}
          <input
            paceholder="Link Spotify"
            size="100"
            value={this.state.urlColada}
            onChange={this.urlColada}
          ></input>
        </p>
        <p>
          Agora copie o código da música, o conteúdo que vem depois do "track/"
          do endereço que você acabou de colar acima. Agora cole no campo
          <strong>"CÓDIGO"</strong> abaixo, depois preencha as demais
          informações e clique no botão
          <strong>"Adicionar"</strong> que está do lado da playlist que você
          quer adicionar a música
        </p>
        <TelaPlay>
          <h3>Adiciona Música >> </h3>
          <Label>Música:</Label>
          <input
            placeholder="Nome da Música"
            value={this.state.nomeMusica}
            onChange={this.musicaDigitada}
          ></input>
          <Label>Banda:</Label>
          <input
            placeholder="Nome da Banda"
            value={this.state.nomeBanda}
            onChange={this.bandaDigitada}
          ></input>
          <Label>Código:</Label>
          <input
            placeholder="Código da Música"
            value={this.state.url}
            onChange={this.urlDigitada}
          ></input>
        </TelaPlay>
      </div>
    );
  }
}

export default ListPlaylist;
