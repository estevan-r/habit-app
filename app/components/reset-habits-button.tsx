import { Button } from '~/components/ui/button'
import { resetHabits } from '~/store/db'
import { useNavigate } from 'react-router'

export default function ResetHabitsButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    resetHabits()
    navigate(0)
  }

  return (
    <Button
      variant='destructive'
      size='lg'
      onClick={handleClick}
      className='w-full'
    >
      Reset All Habits
    </Button>
  )
}
