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

export default function NewHabit() {
  return (
    <Form className='mt-24 p-4 space-y-6'>
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
  )
}
