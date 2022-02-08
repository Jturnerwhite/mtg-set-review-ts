import { Actions } from '../../Store/Actions/Test.actions';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CounterState } from "../../Store/States/Test.state";

const MainPage = (props: any) => {
    const counterState = props.state.counter;
    const dispatch = props.dispatch;

    const getNumber = (value: string) => {
        const newNum = parseInt(value);
        dispatch(Actions.ModifyValue(newNum));
    };

    return (
        <div>
            <div>{counterState.userAge}</div>
            <div>Hello Page1 total is {counterState.value}</div>
            <input type='text' placeholder='what is your age?' onChange={(event) => getNumber(event.target.value)}></input>
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
