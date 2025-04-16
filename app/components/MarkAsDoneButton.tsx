import { Button } from '~/components/ui/button'
import { type Habit, updateStreak } from '~/store/db'
import { isToday, parseISO } from 'date-fns'

type Props = {
  habit: Habit
  onUpdate: (updatedHabit: Habit) => void
}

export default function MarkAsDoneButton({ habit, onUpdate }: Props) {
  const alreadyDoneToday = isToday(parseISO(habit.lastCompletedDate))

  const handleClick = () => {
    const updated = updateStreak(habit)
    onUpdate(updated)
  }

  return (
    <Button
      onClick={handleClick}
      disabled={alreadyDoneToday}
      variant={alreadyDoneToday ? 'secondary' : 'default'}
    >
      {alreadyDoneToday ? '✅' : 'Mark as Done'}
    </Button>
  )
}
