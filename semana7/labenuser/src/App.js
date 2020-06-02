import React from "react";
import Home from "./components/Home";
import ListaUsuarios from "./components/ListaUsuarios";

class App extends React.Component {
  state = {
    tela: true,
  };

  irParaUsuarios = () => {
    this.setState({ tela: "Usuarios" });
  };

  render() {
    const renderizaTela = () => {
      if (this.state.tela) {
        return <Home usuarios={this.irParaUsuarios} />;
      } else {
        return <ListaUsuarios />;
      }
    };

    return <div>{renderizaTela()}</div>;
  }
}

export default App;

/*<Home/>
        <button onClick={this.irParaPosts}>Posts</button>
        <button onClick={this.irParaMensagens}>Mensagens</button>
        <button onClick={this.props.fazerLogout}>Logout</button>
        <hr />
        {renderizaTela()}*/
