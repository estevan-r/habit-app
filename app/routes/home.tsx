import type { Route } from './+types/home'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '~/components/ui/card'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className='overflow-y-auto p-4 mt-24 mb-20 space-y-3'>
      <Card className='bg-stone-900 text-stone-300 border-none outline-2 outline-stone-950/10'>
        <CardHeader>
          <CardTitle>Reading</CardTitle>
          <CardDescription>Read 20 pages</CardDescription>
        </CardHeader>
        <div className='absolute top-6 right-6'>⭕️</div>
        <CardContent>4 day steak 📈</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Icon
            <div>Icon</div>
          </CardTitle>
        </CardHeader>
        <CardContent>Reading</CardContent>
        <CardFooter>Read 20 pages</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Icon
            <div>Icon</div>
          </CardTitle>
        </CardHeader>
        <CardContent>Reading</CardContent>
        <CardFooter>Read 20 pages</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Icon
            <div>Icon</div>
          </CardTitle>
        </CardHeader>
        <CardContent>Reading</CardContent>
        <CardFooter>Read 20 pages</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Icon
            <div>Icon</div>
          </CardTitle>
        </CardHeader>
        <CardContent>Reading</CardContent>
        <CardFooter>Read 20 pages</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Icon
            <div>Icon</div>
          </CardTitle>
        </CardHeader>
        <CardContent>Reading</CardContent>
        <CardFooter>Read 20 pages</CardFooter>
      </Card>
    </div>
  )
}
