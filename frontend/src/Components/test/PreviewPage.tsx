import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CounterState } from "../../Store/States/Test.state";

import {Actions} from '../../Store/Actions/Test.actions';

const PreviewPage = (props: any) => {
    const count = props.state.counter;
    const dispatch = props.dispatch;

    return (
        <div>
            <div>Hello Page2 your total is {count.value}</div>
            <button onClick={() => dispatch(Actions.Add())}>Add up +</button>
            <button onClick={() => dispatch(Actions.Subtract())}>Take one -</button>
        </div>
    )
}

const defaultMapStateToProps = (state: CounterState): any => {
    return { state: state };
};
const defaultMapDispatchToProps = (dispatch: Dispatch<any>): any => {
    return { dispatch: dispatch };
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps) (PreviewPage);
