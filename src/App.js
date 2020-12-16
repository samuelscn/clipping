import './App.css';
import Header from './components/header'
import Perfil from './components/perfil'
import Menu from './components/menu'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <Menu />
        <Perfil/>
      </div>     
      <div className="thesaurus">
        <div className="thesaurus-container">
          <div className="sumario">
            <strong>Sumário</strong>
            <ol>
              <li>Introdução</li>
              <li>A herança da colônia;</li>
              <li>A diplomacia Imperial;</li>
              <li>A obra republicana do Barão do Rio Branco.</li>
            </ol>
          </div>
          <div className="introducao">
            <strong>Introdução</strong>
            <p>Este é um resumo sobre as Fronteiras do Brasil.
            <br></br><br></br>
            O Clipping também decidiu produzir esse material pois se trata de um dos conteúdos mais cobrados dos candidatos tanto na Prova Objetiva quanto na prova de Terceira Fase do CACD. Trata-se de um conteúdo cheio de detalhes, datas e tratados diferentes, mas é incontornável para qualquer candidato ao CACD.
            <br></br><br></br>
            É fundamental que o candidato ao CACD saiba tudo sobre as fronteiras, e esse resumo de última hora, bem sintético, será especial para isso.
            <br></br><br></br>
            Você encontrará neste resumo, uma síntese dos 3 capítulos da obra que são relevantes para o CACD:
            <br></br><br></br>
              1. A herança da colônia;
              <br></br>
              2. A diplomacia Imperial;
              <br></br>
              3. A obra republicana do Barão do Rio Branco.
            <br></br><br></br>
            Ao final da leitura desse resumo, você estará 100% com os assuntos cobrados no CACD a respeito dos tratados que formaram as fronteiras do Brasil.
            <br></br><br></br>
            Este tópico deve ser estudado após você ter estudado o tópico Período colonial do Edital.
            <br></br><br></br>
            Marque o seu grau de familiariedade com o conteúdo que precede o estudo deste caderno.</p>
          </div>
        </div>

        <div className="nav-bar-thesaurus">
            <li>Sumário</li>
            <li id="li-intro">Introdução</li>
            <li>A herança da colônia</li>
            <li>Diplomacia imperial</li>
            <li>A obra republicana do Barão Do Rio Branco</li>
            <li>Próximos passos</li>
            <li>Anotações</li>
            <li>Comentários</li>
        </div>
      </div>
    </div>
  );
}

export default App;
