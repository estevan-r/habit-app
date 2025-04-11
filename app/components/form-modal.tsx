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
import { useNavigate, useLocation, useParams } from 'react-router'

export default function FormModal({ children }: React.ComponentProps<'div'>) {
  const { habitId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const closeModal = () => navigate(-1)

  // TODO: Figure out how to dynamically set hait id - useParams not working
  // TODO: Create conditional for each path to render in modal
  return (
    <Drawer
      open={
        location.pathname === '/create' ||
        location.pathname === '/profile' ||
        location.pathname === `/habit/${habitId}`
      }
      onOpenChange={(open) => {
        if (!open) closeModal()
      }}
    >
      {/* <DrawerTrigger >
        <Button size='lg' onClick={() => navigate('/habits/create')}>
          Add a new habit
        </Button>
      </DrawerTrigger> */}
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
