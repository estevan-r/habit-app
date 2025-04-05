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
    <main className='grid place-items-center bg-gray-300 min-h-dvh min-w-dvw'>
      <div className='flex flex-col max-w-[440px] w-full min-h-[956px] max-h-[956px] h-full bg-[#d8eefe]'>
        {/* Heading */}
        <div className='flex shrink-0 justify-between max-w-[inherit] w-full h-24 p-4'>
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
        <div className='overflow-y-auto p-4 space-y-3'>
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
        <div className='flex shrink-0 justify-center gap-4 max-w-[inherit] w-full p-4'>
          <Button className='text-xl'>⌂</Button>
          <Button className='text-xl'>+</Button>
          <Button className='p-2' variant='ghost'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </main>
  )
}
