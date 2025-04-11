import type { Route } from './+types/habits'
import { Outlet, Link } from 'react-router'
import { getHabits } from '~/store/db'
import FormModal from '~/components/form-modal'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '~/components/ui/card'
import { Button } from '~/components/ui/button'

export function loader() {
  return getHabits()
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Habit({ loaderData }: Route.ComponentProps) {
  return (
    <div className='overflow-y-auto p-4 mt-24 mb-20 space-y-3'>
      {/* //TODO: Figure out how to make this work with footer nav */}
      <FormModal>
        <Outlet />
      </FormModal>
      {loaderData.map((habit) => (
        <Card
          key={habit.id}
          className='bg-stone-900 text-stone-300 border-none outline-2 outline-stone-950/10'
        >
          <CardHeader>
            <CardTitle>{habit.name}</CardTitle>
            <CardDescription>{habit.description}</CardDescription>
          </CardHeader>
          <div className='absolute top-6 right-6'>⭕️</div>
          <CardContent>{habit.streak} day streak 📈</CardContent>
          <Link
            to={`/habit/${habit.id}`}
            className='absolute top-0 left-0 w-full h-full'
          />
        </Card>
      ))}
    </div>
  )
}
