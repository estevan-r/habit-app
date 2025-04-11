import { Form } from 'react-router'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

// TODO: Move loader actions here if footer nav is resolved

export default function Create() {
  return (
    <Form className='px-4 space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' placeholder='Name' />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='description'>Description</Label>
        <Input
          type='text'
          id='description'
          name='description'
          placeholder='Description'
        />
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
