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

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <main className='grid place-items-center bg-gray-300 w-full h-full'>
      <div className='relative w-full h-full bg-[#d8eefe]'>
        {/* Heading */}
        <div className='fixed z-10 top-0 flex justify-between max-w-[inherit] w-full h-24 p-4 bg-[#d8eefe] border-b border-b-black/5 shadow-xs'>
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
        <div className='overflow-y-auto p-4 mt-24 mb-20 space-y-3'>
          <Drawer>
            <DrawerTrigger asChild>
              <Card>
                <CardHeader>
                  <div className='flex justify-between items-center'>
                    <CardTitle>Reading</CardTitle>
                    <div>⭕️</div>
                  </div>
                  <CardDescription>Read 20 pages</CardDescription>
                </CardHeader>
                <CardContent>4 day steak 📈</CardContent>
              </Card>
            </DrawerTrigger>
            <DrawerContent className='h-full pb-24'>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant='outline'>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
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
        <div className='fixed z-60 bottom-0 flex justify-center max-w-[inherit] w-full p-4'>
          <div className='flex justify-center items-center gap-6 bg-white p-3 rounded-full outline-1 outline-black/5 shadow-xl'>
            <Button
              variant='outline'
              size='icon'
              className='size-8 shrink-0 rounded-full'
            >
              ⌂
            </Button>
            <Button size='icon' className='size-8 shrink-0 rounded-full'>
              +
            </Button>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </main>
  )
}
