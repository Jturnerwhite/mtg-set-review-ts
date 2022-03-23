import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Actions } from '../../Store/Actions/Session.actions';
import { useEffect, useState } from 'react';
import { SetData } from '../../Interfaces/SetData';
import { CardData } from '../../Interfaces/CardData';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../Interfaces/DefaultConnections';
import { Session } from '../../Interfaces/SessionData';
import { CreateSessionPageStyle } from './CreateSessionPage.Style';

const CreateSessionPage = (props: DefaultProperties) => {
  const dispatch = props.dispatch;
  let navigate = useNavigate();
  let [sessionId, setSessionId] = useState(undefined as string | undefined);
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
      console.log(card);
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

  async function setSession() {
    let selectedSet = sets[setId];
    let setIcon = sets[setId].icon;
    let id = new Date().valueOf().toString();
    let allCards = await getCards(
      `https://api.scryfall.com/cards/search?order=set&q=set%3A${selectedSet.code}&unique=cards`,
    );
    setSessionId(id);
    dispatch(
      Actions.SetSession({
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
    <>
      <CreateSessionPageStyle>
        <div className="create-session-container">
          <div className="create-session-fields">
            <form>
              <input
                type="text"
                id="sessionName"
                name="sessionName"
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter Session Name"
              ></input>
              <div className="session-list-container">
                <h3>Select Set:</h3>
                {sets &&
                  sets.map((set, index) => (
                    <>
                      <div className="session-set">
                        <input
                          name="set"
                          type="radio"
                          id={set.id}
                          value={index}
                          onChange={(event) => setCardId(parseInt(event.target.value))}
                        />
                        <label htmlFor={set.id}>{set.name}</label>
                      </div>
                    </>
                  ))}
              </div>
            </form>
          </div>
          <div>
            <Link id="cancel-btn" to="/">
              Cancel
            </Link>
            <button id="submit-btn" onClick={setSession} type="submit">
              Submit
            </button>
          </div>
        </div>
      </CreateSessionPageStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(CreateSessionPage);
