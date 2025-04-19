import { Button } from '~/components/ui/button'
import { type Habit, markHabitAsDone } from '~/store/db'
import { isToday, parseISO } from 'date-fns'

type Props = {
  habit: Habit
  onUpdate: (updatedHabit: Habit) => void
}

export default function MarkAsDoneButton({ habit, onUpdate }: Props) {
  const alreadyDoneToday = isToday(parseISO(habit.lastCompletedDate))

  const handleClick = () => {
    const updated = markHabitAsDone(habit.id)
    if (updated) {
      onUpdate(updated)
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={alreadyDoneToday}
      variant={alreadyDoneToday ? 'secondary' : 'default'}
    >
      {alreadyDoneToday ? 'Done Today ✅' : 'Mark as Done'}
    </Button>
  )
}
