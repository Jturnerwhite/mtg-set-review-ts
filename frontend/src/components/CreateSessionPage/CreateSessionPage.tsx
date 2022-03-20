import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Actions } from '../../store/actions/session.actions';
import { useEffect, useState } from 'react';
import { SetData } from '../../interfaces/SetData';
import { CardData } from '../../interfaces/CardData';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../interfaces/DefaultConnections';
import { Session } from '../../interfaces/SessionData';
import { CreateSessionPageStyle } from './CreateSessionPage.Style';
import { MaterialCard } from '../_common/style/MaterialCard';

const CreateSessionPage = (props: DefaultProperties) => {
  const dispatch = props.dispatch;
  let navigate = useNavigate();
  let [sessionId, setsessionId] = useState(undefined as string | undefined);
  let [name, setName] = useState('');
  let [sets, cardSets] = useState([] as Array<SetData>);
  let [setId, setCardId] = useState(0);

  useEffect(() => {
    if (sets.length === 0) {
      fetch('https://api.scryfall.com/sets')
        .then((res) => res.json())
        .then((json) => {
          let mappedSets: Array<SetData> = json.data
            .filter((set: any) => {
              return (
                (set.set_type === 'expansion' || set.set_type === 'core') && set.card_count > 0
              );
            })
            .map((singleSet: any) => {
              return {
                id: singleSet.id,
                name: singleSet.name,
                code: singleSet.code,
                icon: singleSet.icon_svg_uri,
              } as SetData;
            });
          cardSets(mappedSets);
        });
    }
  }, []);

  useEffect(() => {
    if (
      sessionId !== undefined &&
      props.state.sessions.find((session) => session.id === sessionId)
    ) {
      navigate(`/session/${sessionId}`);
    }
  }, [props.state.sessions]);

  async function getCards(endPoint: string): Promise<Array<CardData>> {
    let response = await fetch(endPoint).then((res) => res.json());
    let cards: Array<CardData> = response.data.map((card: any) => {
      return {
        id: card.id,
        image: card.image_uris?.normal ?? '',
        cardName: card.name,
      } as CardData;
    });
    if (response.has_more) {
      let nextPageCards = await getCards(response.next_page);
      return [...cards, ...nextPageCards];
    }
    return cards;
  }

  async function setsession() {
    let selectedSet = sets[setId];
    let setIcon = sets[setId].icon;
    let id = new Date().valueOf().toString();
    let allCards = await getCards(
      `https://api.scryfall.com/cards/search?order=set&q=set%3A${selectedSet.code}&unique=cards`,
    );
    setsessionId(id);
    dispatch(
      Actions.Setsession({
        name: name,
        id: id,
        cardSet: selectedSet,
        cards: allCards.slice(0, 3),
        icon: setIcon,
        created: new Date().toDateString(),
      } as Session),
    );
  }

  return (
    <CreateSessionPageStyle>
      <MaterialCard>
        <form id="sessionForm">
          <label htmlFor="sessionName">session Name:</label>
          <input
            type="text"
            id="sessionName"
            name="sessionName"
            onChange={(event) => setName(event.target.value)}
          ></input>
          <select onChange={(event) => setCardId(parseInt(event.target.value))}>
            {sets.map((set, index) => (
              <option key={index} value={index}>
                {set.name}
              </option>
            ))}
          </select>
        </form>
        <button onClick={setsession} type="submit">
          Submit
        </button>
        <button>
          <Link to="/">Cancel</Link>
        </button>
      </MaterialCard>
    </CreateSessionPageStyle>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(CreateSessionPage);
