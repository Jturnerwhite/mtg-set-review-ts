import { useAppDispatch, useAppSelector} from '../../Store/hooks';
import {Actions} from '../../Store/Actions/Test.actions';

const PreviewPage = () => {
    const count = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div>Hello Page2 your total is {count.Value}</div>
            <button onClick={() => dispatch(Actions.Add())}>Add up +</button>
            <button onClick={() => dispatch(Actions.Subtract())}>Take one -</button>
        </div>
    )
}

export default PreviewPage;