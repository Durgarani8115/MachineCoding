import Education from './Education.jsx'
import Profile from './Profile.jsx'
import Family from './Family'
import Job from './Job'

export default function TabsForm() {
  const tabs = [
    {
      name: 'Education',
      component: Education,
    },
    {
      name: 'Profile',
      component: Profile,
    },
    {
      name: 'Family',
      component: Family,
    },
    {
      name: 'Job',
      component: Job,
    },
  ]

  return (
    <div>
      <div>
        {tabs.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}
