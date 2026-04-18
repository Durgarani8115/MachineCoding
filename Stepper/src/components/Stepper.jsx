

export default function Stepper({steps}){
return(
    <div>
        {steps.map(({label,content},index) => {
            return (
                <div>
                    <div>{index + 1}</div>
                    <div>{label}</div>
                    <div>{content}</div>


                </div>
            )
        })}
    </div>
)
}