import React from 'react';
import { useState } from 'react';

function CardSubmit(props) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        description: '',
        country: 'HCM',
        agree: false,
        gender: ''
    });

    const [error, setError] = useState({
        name: '',
    })

    const onChange = (e) => {
        const { value, name, type, checked } = e.target;

        setForm((state) => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const showData = () => {
        console.log("form", form);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.name.length < 5) {
            setError((state) => ({
                ...state,
                name: 'Tên ngắn vcl'
            }));
            return;
        } else {
            setError((state) => ({
                ...state,
                name: ''
            }));
        }
        showData()
    }

    return (
        <div className="card">
            <header className="card-header">
                <form onSubmit={onSubmit}>
                    <label>
                        Name
                        <input name="name" value={form.name} onChange={onChange} />
                    </label>
                    {!!error.name && (
                        <div>
                            <i>{error.name}</i>
                        </div>
                    )}

                    <label>
                        Email
                        <input name="email" value={form.email} onChange={onChange} />
                    </label>

                    <label>
                        Description
                        <textarea name="description" value={form.description} onChange={onChange} />
                    </label>

                    <label>
                        Country
                        <select onChange={onChange} name="country" value={form.country}>
                            <option value="HN">HaNoi</option>
                            <option value="DN">DaNang</option>
                            <option value="HCM">HCM</option>
                        </select>
                    </label>

                    <label>
                        Gender
                        <div>
                            <input onChange={onChange} type="radio" name="gender" value="Male" checked={form.gender === 'Male'} />Male
                            <input onChange={onChange} type="radio" name="gender" value="Femail" checked={form.gender === 'Femail'} />Femail
                            <input onChange={onChange} type="radio" name="gender" value="Other" checked={form.gender === 'Other'} />Other
                        </div>
                    </label>

                    <label>
                        Agree
                        <input type="checkbox" name="agree" value={form.agree} onChange={onChange} />
                    </label>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default CardSubmit;

// tutorial: https://www.youtube.com/watch?v=IsnOTmB88tE&ab_channel=TravelsCode
