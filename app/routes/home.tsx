import type { Route } from './+types/home'
import { Button } from '~/components/ui/button'
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
    <>
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
              <DrawerClose asChild>
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
    </>
  )
}
