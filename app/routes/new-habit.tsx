import type { Route } from './+types/new-habit'
import { Form } from 'react-router'
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
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

// TODO: Add loader actions and form submission

export default function NewHabit() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size='icon' className='size-8 shrink-0 rounded-full'>
          +
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-full pb-24'>
        <DrawerHeader>
          <DrawerTitle>Add a new habit</DrawerTitle>
          <DrawerDescription>What do you want to acheive?</DrawerDescription>
        </DrawerHeader>
        <Form className='mt-6 px-4 space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' type='text' placeholder='Name' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Input id='description' type='text' placeholder='Description' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='interval'>Interval</Label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select an interval' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='daily'>Daily</SelectItem>
                <SelectItem value='alternating'>Alternating Days</SelectItem>
                <SelectItem value='weekly'>Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button disabled size='lg' className='w-full'>
            Submit
          </Button>
        </Form>
      </DrawerContent>
    </Drawer>
  )
}
