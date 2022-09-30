import { useState } from "react";
import { useReducer} from "react";

function App() {
    const [checked, setCheck] = useReducer(
        checked => !checked, 
        false
    );
    return(
        <div className="App">
            <input type="checkbox" value={checked}
                onChange={setChecked}/>
            <label>
                {checked ? "checked" : "not checked"}
            </label>
        </div>
    )
}