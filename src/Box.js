import React from "react";

//Box component
const Box = ({
    id,
    width = 5,
    height = 5,
    color = "blue",
    handleRemove
}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor: color
                }}
            />
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;