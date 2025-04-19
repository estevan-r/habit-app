import { useState } from 'react'
import type { Route } from './+types/habit-details'
import { type Habit, getHabit, updateHabit } from '~/store/db'
import MarkAsDoneButton from '~/components/mark-as-done-button'

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const habit = getHabit(params.id)
  return habit
}

export function HydrateFallback() {
  return <div>Loading...</div>
}

export default function HabitDetails({ loaderData }: Route.ComponentProps) {
  if (!loaderData) {
    return <p>Habit not found 😔</p>
  }

  const [habit, setHabit] = useState<Habit>(loaderData)

  const handleUpdate = (updated: Habit) => {
    setHabit(updated)
    updateHabit(updated)
  }

  const { name, description, interval, currentStreak } = habit

  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <p>{description}</p>
      <p className='text-sm text-muted-foreground'>Interval: {interval}</p>
      <p className='text-orange-500 font-medium'>
        🔥 Current Streak: {currentStreak} day{currentStreak !== 1 ? 's' : ''}
      </p>

      <MarkAsDoneButton habit={habit} onUpdate={handleUpdate} />
    </div>
  )
}
