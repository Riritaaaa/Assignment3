import { decrement, increment } from "@store/slice/counterSlice";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

function CounterPage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className=" btn bg-orange-400 p-2 rounded-md"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className=" btn bg-orange-400 p-2 rounded-md"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterPage;
