import { NavLink } from 'react-router'
import { Button } from '~/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'

export default function FooterNav() {
  return (
    <div className='fixed z-20 bottom-0 flex justify-center p-4 w-full'>
      <div className='flex justify-center items-center gap-6 bg-stone-50/30 p-3 rounded-full outline-2 outline-stone-950/5 backdrop-blur-sm shadow-xl'>
        <NavLink to='/'>
          <Button
            variant='outline'
            size='icon'
            className='size-8 shrink-0 rounded-full'
          >
            ⌂
          </Button>
        </NavLink>
        <NavLink to='new-habit'>
          <Button size='icon' className='size-8 shrink-0 rounded-full'>
            +
          </Button>
        </NavLink>
        <NavLink to='profile'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </NavLink>
      </div>
    </div>
  )
}
