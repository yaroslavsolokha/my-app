import React from 'react';

function formComponent(props) {
    return (
        <form>
            <input type="text" name="firstName" value={props.data.firstName} placeholder="First name" onChange={props.handleChange} />
            <br />
            <input type="text" name="lastName" value={props.data.lastName} placeholder="Last name" onChange={props.handleChange} />
            <br />
            <textarea name="description" value={props.data.description} placeholder="Description" onChange={props.handleChange} />
            <br />
            <label>
                <input type="checkbox" name="isDeveloper" value={props.data.isDeveloper} checked={props.data.isDeveloper} onChange={props.handleChange} />
                Is developer?
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange} />
                Male
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange} />
                Female
            </label>

            <br />

            <select value={props.data.country} name="country" onChange={props.handleChange}>
                <option>Please choose country</option>
                <option value="ukraine">Ukraine</option>
                <option value="cr">Czech Republic</option>
            </select>

            <h2>{props.data.firstName} {props.data.lastName}</h2>
            <h3>{props.data.description}</h3>
            <p>Developer: {props.data.isDeveloper === true ? "Yes": "No"}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Country: {props.data.country}</p>
        </form>
      )
}

export default formComponent