import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

//Estilo Página Inicial
export const Imagem = styled.img`
  width: 300px;
  height: 400px;
`;

export const MainStyle = styled(Paper)`
  display: flex;
  position: fixed;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
  width: 30%;
  height: 70vh;
  margin-top: 10%;
  margin-left: 35vw;
`;

export const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const HeartsContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
`;

export const StyleCursor = styled.img`
  cursor: pointer;
`;

export const StyledLoading = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  background-color: #051923 !important;
  color: white !important;
`;

//Estilo Matchs

export const ImagemMatch = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const StyleButton = styled.img`
  cursor: pointer;
`;

export const MatchesHeader = styled.div`
  display: flex;
  align-items: center;
`;
