import { Button } from '~/components/ui/button'
import { resetHabits } from '~/store/db'

export default function ResetHabitsButton() {
  const handleClick = () => {
    resetHabits()
    window.location.reload()
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
