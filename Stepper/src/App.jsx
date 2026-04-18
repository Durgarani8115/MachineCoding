import Stepper from "./components/Stepper";

function App(){
const steps = [
  {label : "Personal Details",
    content: <div>Personal Information</div>
  },
  {label : "Education Details",
    content: <div>Education Information</div>
  },
  {label : "JOB Details",
    content: <div>JOB Details</div>
  },
  {label : "Family Details",
    content: <div>Family Information</div>
  },
  {label : "User Details",
    content: <div>User Information</div>
  },
]


    return <Stepper steps={steps}  />;
}
export default App
