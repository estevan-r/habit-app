import type { Route } from './+types/home'
import { Button } from '~/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'
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
    <main className='relative max-w-md w-full min-h-dvh h-full m-auto bg-[#d8eefe]'>
      {/* Heading */}
      <div className='fixed top-0 flex justify-between max-w-md w-full h-24 p-4 bg-[#d8eefe]'>
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
      <div className='space-y-3 px-4 py-24'>
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
      {/* Footer Nav */}
      <div className='fixed bottom-0 flex justify-center gap-4 max-w-md w-full p-4 bg-gray-50'>
        <Button className='text-xl'>⌂</Button>
        <Button className='text-xl'>+</Button>
        <Button className='p-2' variant='ghost'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </main>
  )
}
