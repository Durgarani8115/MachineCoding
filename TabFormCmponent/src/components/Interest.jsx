

export default function Interest({ data, setData, errors }) {
    const { Interest } = data;

    const handleChangeData = (e,name) => {
        setData((prevState) => ({
            ...prevState,
           Interest : e.target.checked
           ?[...prevState.Interest,e.target.name]
           : prevState.Interest.filter((i) => i !== e.target.name),

        }))
    };
           console.log(Interest)


    return (
        <div>
            <h1 className="text-xl font-bold text-center">Interest</h1>
            <div>
                <label>
                    <input 
                    type="checkbox"
                    name="Coding"
                    checked={Interest.includes("Coding")}
                    onChange={handleChangeData}
                    /> Coding
                </label>
            </div>

            <div>
                <label >
                    <input type="checkbox"
                    name="DSA"
                    checked={Interest.includes("DSA")}
                    onChange={handleChangeData}
                    /> DSA daily
                </label>

            </div>

            <div>
                <label >
                    <input type="checkbox"
                    name="Exercise"
                    checked={Interest.includes("Exercise")}
                    onChange={handleChangeData}
                    /> Exercise
                </label>

            </div>
            {errors.Interest && <span className="errors text-red-500 text-sm">{errors.Interest}</span>}
        </div>
    )
}