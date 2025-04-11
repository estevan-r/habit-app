import type { Route } from './+types/habit-details'
import { getHabit } from '~/store/db'

export function loader({ params }: Route.LoaderArgs) {}

export default function HabitDetails() {
  return (
    <div className='mt-24 p-4'>
      <h1></h1>
      <p></p>
      <p>Interval:</p>
      <p>Current Streak:</p>
    </div>
  )
}
