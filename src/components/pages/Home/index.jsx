import { Container, InputText, Header, ListContainer, Card } from "./style";

import arrow from "../../../../public/images/icons/arrrow.png";
import buttonDelete from "../../../../public/images/icons/delete.svg";
import edit from "../../../../public/images/icons/edit.png";

export default function Home() {
  return (
    <Container>
      <InputText type="text" placeholder="Pesquisar contato..." />

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button>
            <span>Nome</span>
            <img src={arrow} alt="" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="info-name">
              <span>Gabriel Reis</span>
              <small>instagram</small>
            </div>
            <span>gabriel@devacademy.com</span>
            <span>(71) 99923-9392</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
            <button>
              <img src={buttonDelete} alt="" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="info-name">
              <span>Gabriel Reis</span>
              <small>instagram</small>
            </div>
            <span>gabriel@devacademy.com</span>
            <span>(71) 99923-9392</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
            <button>
              <img src={buttonDelete} alt="" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="info-name">
              <span>Gabriel Reis</span>
              <small>instagram</small>
            </div>
            <span>gabriel@devacademy.com</span>
            <span>(71) 99923-9392</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
            <button>
              <img src={buttonDelete} alt="" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
