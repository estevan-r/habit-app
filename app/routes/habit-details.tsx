import type { Route } from './+types/habit-details'
import { getHabit } from '~/store/db'

export function loader({ params }: Route.LoaderArgs) {
  const { id } = params
  try {
    const habit = getHabit(id)
    return habit
  } catch (error) {
    return null
  }
}

export default function HabitDetails({ loaderData }: Route.ComponentProps) {
  if (!loaderData) {
    return <p>Habit not found 😔</p>
  }

  const { name, description, interval, currentStreak } = loaderData

  return (
    <div className='p-4'>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Interval: {interval}</p>
      <p>Current Streak: {currentStreak}</p>
    </div>
  )
}
