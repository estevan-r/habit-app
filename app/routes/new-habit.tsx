import type { Route } from './+types/new-habit'
import { Form } from 'react-router'
import { Button } from '~/components/ui/button'
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
    <div className='h-dvh pt-24 pb-20 px-4'>
      <div className='py-6'>
        <h2 className='text-lg font-semibold'>Add a new habit</h2>
        <p className='text-sm text-muted-foreground'>
          What do you want to acheive?
        </p>
      </div>
      <Form className='mt-6 space-y-6'>
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
    </div>
  )
}
