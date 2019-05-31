import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        imgAvatar: 'https://img.icons8.com/cotton/64/000000/gender-neutral-user.png',
        nomeUsuario: 'Roosevelt',
        horarioPost: 'há 10 min',
        texto: 'Ut blandit urna nec ante porta vulputate nec et purus. Aliquam interdum fermentum accumsan. Pellentesque blandit finibus pharetra. Nunc ac sapien ligula. Morbi commodo varius ex, sit amet venenatis turpis euismod id. In sapien lacus, commodo sit amet semper quis, varius et est. Aenean ac ante quam. Nunc vestibulum ligula sit amet velit rutrum, id aliquet ex pellentesque.',
      },
      {
        id: 2,
        imgAvatar: 'https://img.icons8.com/cotton/64/000000/gender-neutral-user.png',
        nomeUsuario: 'Bryan',
        horarioPost: 'há 2 min',
        texto: 'Sed nisi leo, accumsan in mauris vitae, consequat consectetur risus. Vestibulum consequat non massa nec ornare. Sed non hendrerit metus, nec facilisis nunc. Nulla vestibulum leo bibendum dolor consectetur condimentum. Suspendisse vel egestas tortor, sed gravida arcu. Duis rutrum erat non condimentum euismod. Donec quis venenatis sapien. Nullam malesuada ornare est, non euismod dui sodales sed.',
      },
      {
        id: 3,
        imgAvatar: 'https://img.icons8.com/cotton/64/000000/gender-neutral-user.png',
        nomeUsuario: 'Jonathan',
        horarioPost: 'há 15 min',
        texto: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eu malesuada ante. Cras nec venenatis leo. Etiam viverra lacus ut elementum mattis. Proin a dui orci.',
      },
    ],
  }

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        {
          posts.map(post => <Post post={post} key={post.id} />)
        }

        <div className="creditos">
          <span>
            ícones por
            <a href="https://icons8.com"> Icons8</a>
          </span>
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
