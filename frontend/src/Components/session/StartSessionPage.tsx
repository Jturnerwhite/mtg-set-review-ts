import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SessionState } from "../../Store/States/Session.state";

const StartSessionPage = (props: any) => {
    // const sessionState = props.state.counter;
    // const dispatch = props.dispatch;


    return (
        <div>
            <div>I am StartSessionPage</div>
        </div>
    )
}

const defaultMapStateToProps = (state: SessionState): any => {
    return { state: state };
};
const defaultMapDispatchToProps = (dispatch: Dispatch<any>): any => {
    return { dispatch: dispatch };
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps) (StartSessionPage);
