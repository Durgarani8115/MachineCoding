
export default function Profile({ data, setData, errors }) {
    const { name, age, email } = data;

    const handleChange = (e, item) => {
        setData((prevState) => ({
            ...prevState,
            [item]: e.target.value
        }))
    }

    return (
        // hii
        <div >
            <div>
                <label>Name : </label>
                <input type="text" value={name} 
                    onChange={(e) => handleChange(e, 'name')} className="border-1" />
                    {errors.name && <span className="errors text-red-500 text-sm block">{errors.name}</span>}
            </div>
            <div>
                <label>Age : </label>
                <input type="number" value={age}
                    onChange={(e) => handleChange(e, 'age')}
                    className="border-1"
                />
                 {errors.age && <span className="errors text-red-500 text-sm">{errors.age}</span>}
            </div>
            <div>
                <label>Email : </label>
                <input type="email" value={email}
                    className="border-1"
                    onChange={(e) => handleChange(e, 'email')} />
                {errors.email && <span className="errors text-red-500 text-sm">{errors.email}</span>}
            </div>


           


        </div>
    )
}