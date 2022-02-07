import React from "react";
import { useAppDispatch, useAppSelector} from '../../Store/hooks';

const MainPage = () => {
    const count = useAppSelector((state) => state.counter);
    return (
        <div>Hello Page1 total is {count.Value}</div>
    )
}

export default MainPage;