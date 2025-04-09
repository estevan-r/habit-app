import type { ReactNode } from 'react'
import { NavLink } from 'react-router'
import { Button } from '~/components/ui/button'
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

type ComponentProps = {
  children: ReactNode
}

export default function FormDrawer({ children }: ComponentProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <NavLink to='new-habit'>
          <Button size='icon' className='size-8 shrink-0 rounded-full'>
            +
          </Button>
        </NavLink>
      </DrawerTrigger>
      <DrawerContent className='h-full pb-24'>
        <DrawerHeader>
          <DrawerTitle>Add a new habit</DrawerTitle>
          <DrawerDescription>What do you want to acheive?</DrawerDescription>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  )
}
