import { NavLink } from 'react-router'
import NewHabit from '~/routes/new-habit'
import FormDrawer from '~/components/form-drawer'
import { Button } from '~/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'

export default function FooterNav() {
  return (
    <div className='fixed z-20 bottom-0 flex justify-center max-w-[inherit] w-full p-4'>
      <div className='flex justify-center items-center gap-6 bg-white p-3 rounded-full outline-1 outline-black/5 shadow-xl'>
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
