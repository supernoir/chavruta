import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card">
        <div className="card_head">
          <h3>Marie Dauphine</h3>
        </div>
        <div className="card_body">
          <p className="card_body_copy">
            Avait-il déjà considéré la portée de son «talent » ? Il s’en était étonné. Puis il s’en était amusé, grisé.  Mais avant cela, avait-il vraiment réfléchi à la responsabilité qui incombait à un artiste vis-à-vis de son public ? Il jouait pour les autres, c’était indubitable mais, partant, est-ce qu’il ne jouait pas avec eux ?
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
