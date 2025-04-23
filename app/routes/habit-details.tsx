import { useState } from 'react'
import type { Route } from './+types/habit-details'
import { useParams } from 'react-router'
import { useHabits } from '~/context/HabitsContext'
// import { type Habit, getHabit, updateHabit } from '~/store/db'
import MarkAsDoneButton from '~/components/mark-as-done-button'

// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//   const habit = getHabit(params.id)
//   return habit
// }

// export function HydrateFallback() {
//   return <div>Loading...</div>
// }

export default function HabitDetails() {
  const { id } = useParams()
  const { habits, markDone } = useHabits()

  const habit = habits.find((h) => h.id === id)

  if (!habit) {
    return <p>Habit not found 😔</p>
  }

  // const [habit, setHabit] = useState<Habit>(loaderData)

  // const handleUpdate = (updated: Habit) => {
  //   setHabit(updated)
  //   updateHabit(updated)
  // }

  // const { name, description, interval, currentStreak } = habit

  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>{habit.name}</h1>
      <p>{habit.description}</p>
      <p className='text-sm text-muted-foreground'>
        Interval: {habit.interval}
      </p>
      <p className='text-orange-500 font-medium'>
        🔥 Current Streak: {habit.currentStreak} day
        {habit.currentStreak !== 1 ? 's' : ''}
      </p>

      <MarkAsDoneButton onDone={() => markDone(habit.id)} />
    </div>
  )
}
