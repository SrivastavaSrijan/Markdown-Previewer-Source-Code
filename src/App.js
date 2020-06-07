import React from "react";
import "./App.css";
import marked from "marked";
const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true,
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="h1">Markdown Previewer</div>
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
        <div className="footer hr-match">by Srijan</div>
      </div>
    );
  }
}

const Editor = (props) => {
  return (
    <textarea
      id="editor"
      className="editorWrap"
      value={props.markdown}
      onChange={props.onChange}
      type="text"
    />
  );
};
const Preview = (props) => {
  return (
    <div className="box">
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer }),
        }}
      />
    </div>
  );
};
const placeholder = `# Pudore ora ad mihi prole inluxisse deceant

## Est humo si avem frigore virentem Latias

Lorem markdownum. Montibus concipit iactat capillos, **ituras**, ducitur Libys
ego sub, in. Apertum barba condit propinquae durisque edidici reliquit sunt
terruit nostris edita sucis, ictu ratione.

1. Per muta nec Ilus tamen nubibus comites
2. Que tantummodo mundi parcite
3. Arma quoque
4. Pererrato procul vos refero quoque hostia infamia
5. In Lunae tuto cumque formae
6. Si ipso frementes intus

Et pallam fidae aures testa notissima, tenuerunt in pariter nec fervens est
inops. Cillan [memorabile forma sed](http://www.forabilis.io/quaesoceri.html)
loquar quam Pharsalia luce illic posuere quae. Nunc fugit studioque fidem tum
harenis dique pestis donec urbesque genis, iter. Ripa dum Iolciacos anima
obductos hanc.

## Ex ducibus Pyramus

Et novas aliquis insequitur, mutasse sed Tritonia potentior pretium, lacrimarum
pennis **nostroque** male hiberno? Mensis geminam si enixa Abarin aliquem
sororum superbum Dianae hic Lyaeo sistite, gravatos praeterit. Tertius terga
summis et forma Ixione partimque **hospes mari ulterius** et ulla, taedia? Tota
qua forma sit precari utraque adfata atria; rami habitat sic capit? Fronde
iunctasque, exsereret, morerne occumbere ipsum: non ingrate te.

Undis vanum estis curvamina aures. Quo tamen medium fatisque Latios.

> Facies et damnare! Dolorque partes an notus. Ut tua tenaci cetera si ad victa
> crimina probant: vae.

Formam ita, et quae; erat dicta harena, arenti Lelex. Est inlisit placidis simul
Phoebus tetigere. Nullam vittas et ut unus et harena, te operum inconcessisque,
iram.`;

export default App;
