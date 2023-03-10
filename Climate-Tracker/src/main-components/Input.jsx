import { useState } from "react";


function Input({name,submit,data,notValid}) {
    const [val, setVal] = useState('');
    return (
    <>
        <form onSubmit={(ev) => {
            ev.preventDefault();
            submit(val);
        }}>
            <label htmlFor={name}>
                {data}
                <input name={name} value={val} onChange={ ev => setVal(ev.target.value)}
                    className="border-2 border-black" autoComplete="off"/>
            </label>
            <input type="submit" value="submit" />
        </form>
    </>

    );
}

export default Input;

