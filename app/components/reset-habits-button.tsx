import { Button } from '~/components/ui/button'
import { useHabits } from '~/context/HabitsContext'
// import { resetHabits } from '~/store/db'

export default function ResetHabitsButton() {
  const { reset } = useHabits()

  // const handleClick = () => {
  //   document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
  //   globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  //   reset()
  // }

  return (
    <Button variant='destructive' size='lg' onClick={reset} className='w-full'>
      Reset All Habits
    </Button>
  )
}
