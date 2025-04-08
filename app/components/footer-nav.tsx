import { NavLink } from 'react-router'
import { Button } from '~/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'

export default function FooterNav() {
  return (
    <div className='fixed z-60 bottom-0 flex justify-center max-w-[inherit] w-full p-4'>
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
        <Button size='icon' className='size-8 shrink-0 rounded-full'>
          +
        </Button>
        <NavLink
          to='profile'
          className={({ isActive }) => (isActive ? 'ring-1' : '')}
        >
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </NavLink>
      </div>
    </div>
  )
}
