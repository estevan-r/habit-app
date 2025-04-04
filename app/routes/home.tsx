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
    <main className='max-w-md w-full m-auto bg-[#d8eefe]'>
      {/* Heading */}
      <div className='flex justify-between p-4'>
        <div>
          <div>Good Morning,</div>
          <div className='font-bold text-2xl'>Estevan</div>
        </div>
        <div className='flex gap-2'>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
      {/* Cards */}
      <div className='space-y-3 m-4'>
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
    </main>
  )
}
