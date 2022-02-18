import { connect } from "react-redux";
import './FinishViewPage.css';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from "../../Interfaces/DefaultConnections";

const FinishViewPage = (props: DefaultProperties) => {
  const cardArray = props.state.session.cards;

let card = cardArray.map(card => (
        <div id='test' key={card.id}>
            <h2>{card.cardName}</h2>
            <p>{card.rating},</p>
        </div>
        ));

  return (
    <>
        <div className='rating-container'>
            <div className='card-info'>
                {card}
            </div>
        </div>
    </>
  );
};

export default connect(
  defaultMapStateToProps,
  defaultMapDispatchToProps
)(FinishViewPage);
