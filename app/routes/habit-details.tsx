import type { Route } from './+types/habit-details'
import { getHabit } from '~/store/db'
import { useNavigate, useLocation } from 'react-router'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import { Button } from '~/components/ui/button'

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

  const { id, name, description, interval, currentStreak } = loaderData

  const navigate = useNavigate()
  const location = useLocation()
  const closeModal = () => navigate(-1)

  return (
    <div className='p-4'>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Interval: {interval}</p>
      <p>Current Streak: {currentStreak}</p>
    </div>
  )
}
