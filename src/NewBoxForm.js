import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
    const INIT = {
        height: "",
        width: "",
        color: ""
    }
    const [formData, setFormData] = useState(INIT);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INIT);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="width"
                        id="width"
                        value={formData.width}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="height"
                        id="height"
                        value={formData.height}
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="color"
                        id="color"
                        value={formData.color}
                    />
                </div>
                <button id="addBox">Add New Box!</button>
            </form>
        </div>
    );
};
export default NewBoxForm;