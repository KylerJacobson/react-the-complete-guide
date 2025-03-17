import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }
    return (
        <>
            <li>
                <span className="player">
                    {isEditing ? (
                        <input type="text" required value={name} />
                    ) : (
                        <span className="player-name">{name}</span>
                    )}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleClick}>
                    {isEditing ? "save" : "edit"}
                </button>
            </li>
        </>
    );
}
