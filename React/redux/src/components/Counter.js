import {useSelector, useDispatch} from "react-redux";
import { increment, decrement } from "../redux/store";

const Counter = ()=>{
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (<>
        <h3>Counter 페이지 입니다!</h3>
        <h1>Count: {count}</h1>
        <button onClick={(e)=>{dispatch(increment())}}>증가</button>
        <button onClick={(e)=>{dispatch(decrement())}}>감소</button>

    </>);
}

export default Counter;