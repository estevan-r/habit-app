import { Button } from '~/components/ui/button'
import { useHabits } from '~/context/HabitsContext'
// import { resetHabits } from '~/store/db'

export default function ResetHabitsButton() {
  const handleClick = () => {
    useHabits().reset()
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
