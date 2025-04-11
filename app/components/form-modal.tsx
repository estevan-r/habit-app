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
import { useNavigate, useLocation } from 'react-router'

export default function FormModal({ children }: React.ComponentProps<'div'>) {
  const navigate = useNavigate()
  const location = useLocation()
  const closeModal = () => navigate(-1)
  // TODO: Add navigate to footer nav to route to this path?

  return (
    <Drawer
      open={location.pathname === '/habits/create'}
      onOpenChange={(open) => {
        if (!open) closeModal()
      }}
    >
      <DrawerTrigger>
        <Button size='lg' onClick={() => navigate('/habits/create')}>
          Add a new habit
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-full'>
        <DrawerHeader>
          <DrawerTitle>Create a new habit</DrawerTitle>
          <DrawerDescription>This is a test</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
