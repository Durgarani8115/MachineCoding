
import SeatBooking from './components/SeatBooking'

function App() {
  return (
    <div>
      <SeatBooking
        layout={{
          rows: 8,
          seatsPerRow: 12,
          aislePostion: 5,
        }}
        SeatTypes={{
          regular: { name: "Regular", price: 150, rows: [0, 1, 2] },
          premium: { name: "Premium", price: 250, rows: [3, 4, 5] },
          vip: { name: "VIP", price: 350, rows: [6, 7] },
        }}
      />
    </div>
  )
}

export default App
