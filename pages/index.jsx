import { verbs, adjectives, nouns } from "../modules/words";
import { Fonts } from "../modules/fonts";
import _ from "lodash";
import React from "react";
import Head from "next/head";

// TODO: Importing SASS seems to hang the runner
import "../assets/css/main.css";
import "../assets/css/noscript.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bs: this.generateBsString()
    };
  }

  componentDidMount() {
    Fonts();
  }

  generateBsString() {
    return `${_.sample(verbs)} ${_.sample(adjectives)} ${_.sample(nouns)}`;
  }

  refreshBsState() {
    const bs = this.generateBsString();
    this.setState(state => ({
      bs
    }));
  }

  handleClick() {
    this.refreshBsState();
  }

  render() {
    return (
      <div id="page-wrapper">
        <Head>
          <title>NGO BS Generator</title>
        </Head>
        <section id="banner">
          <div className="inner">
            <h2>NGO BS Generator</h2>
            <p>{this.state.bs}</p>
            <ul className="actions special">
              <li>
                <button
                  className="button primary"
                  onClick={this.handleClick.bind(this)}
                >
                  Generate
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
