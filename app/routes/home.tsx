import type { Route } from './+types/home'
import { Link, Outlet } from 'react-router'
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

export function loader() {
  const data = getHabits()
  data.sort((a, b) => {
    return (b.id as any) - (a.id as any)
  })
  return data
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className='overflow-y-auto p-4 mt-24 mb-20 space-y-3'>
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
            to={`/${habit.id}`}
            className='absolute top-0 left-0 w-full h-full'
          />
        </Card>
      ))}
    </div>
  )
}
