import { Actions } from '../../Store/Actions/Test.actions';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useState } from 'react';
import { CounterState } from "../../Store/States/Test.state";

const MainPage = (props: any) => {
    const counterState = props.state.counter;
    const dispatch = props.dispatch;
    let [age, setAge] = useState('');

    const getNumber = (value: string) => (event: React.MouseEvent) =>{
        const parsNum = parseInt(value);
        dispatch(Actions.ModifyValue(parsNum));
    };

    return (
        <div>
            <div>{counterState.userAge}</div>
            <div>Hello Page1 total is {counterState.value}</div>
            <input type='text' placeholder='what is your age?' onChange={(event) => setAge(event.target.value)}></input>
            <button onClick={getNumber(age)}>Submit</button>
        </div>
    )
}

const defaultMapStateToProps = (state: CounterState): any => {
    return { state: state };
};
const defaultMapDispatchToProps = (dispatch: Dispatch<any>): any => {
    return { dispatch: dispatch };
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps) (MainPage);
