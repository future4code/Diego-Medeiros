import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import { render } from '@testing-library/react';
import foto1 from './1.png'

class App extends React.Component {
state = {
  
  posts: [
    {
      nomeUsuario:"paulinha",
      fotoUsuario:foto1,
      fotoPost:"https://picsum.photos/200/150"
    },
    {
      nomeUsuario:"joao",
      fotoUsuario:"https://picsum.photos/50/51",
      fotoPost:"https://picsum.photos/200/151"
    },
    {
      nomeUsuario:"amanda",
      fotoUsuario:"https://picsum.photos/50/52",
      fotoPost:"https://picsum.photos/200/152"
    }
  ]
};

render() {

  const listadePosts = this.state.posts.map(postagem =>  {

  return (
    <div>
    <div>{postagem.nomeUsuario}</div>
    <div>{postagem.fotoUsuario}</div>
    <div>{postagem.fotoPost}</div>
    </div>
  );
  });

  return ( 
    <div>{listadePosts}</div>
  );
  }
}
export default App