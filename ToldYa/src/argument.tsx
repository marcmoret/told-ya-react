import { useState } from "react";

function Argument () {
    const [name, setName] = useState<string | undefined>();
    const updateName = () => {
        setName("Marco");
    };
    return (
        <div>Argument Page {name}
        <button onClick={updateName}>Update Name</button>
        </div>
    );
}
export default Argument;