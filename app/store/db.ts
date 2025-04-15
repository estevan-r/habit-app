import { isYesterday, isToday, parseISO } from 'date-fns'

type Habit = {
  id: string
  name: string
  description: string
  interval: string
  currentStreak: number
  lastCompletedDate: string
}

const HABITS: Habit[] = [
  {
    id: '1',
    name: 'Reading',
    description: 'Read 2 chapters',
    interval: 'daily',
    currentStreak: 1,
    lastCompletedDate: '',
  },
  {
    id: '2',
    name: 'Hydrate',
    description: 'Drink 48 oz of water',
    interval: 'daily',
    currentStreak: 1,
    lastCompletedDate: '',
  },
  {
    id: '3',
    name: 'Pushups',
    description: '20 pushups',
    interval: 'alternating',
    currentStreak: 1,
    lastCompletedDate: '',
  },
  {
    id: '4',
    name: 'Run',
    description: 'Run 5 miles',
    interval: 'alternating',
    currentStreak: 1,
    lastCompletedDate: '',
  },
  {
    id: '5',
    name: 'Floss',
    description: 'Floss teeth nightly',
    interval: 'daily',
    currentStreak: 1,
    lastCompletedDate: '',
  },
  {
    id: '6',
    name: 'Journal',
    description: 'Write down daily thoughts',
    interval: 'daily',
    currentStreak: 1,
    lastCompletedDate: '',
  },
]

export function getHabits() {
  return HABITS
}

export function addHabit({
  name,
  description,
  interval,
  lastCompletedDate,
}: {
  name: string
  description: string
  interval: string
  lastCompletedDate: string
}) {
  HABITS.push({
    id: `${HABITS.length + 1}`,
    name,
    description,
    interval,
    currentStreak: 0,
    lastCompletedDate,
  })
}

export function getHabit(id: string) {
  const habit = HABITS.find((habit) => habit.id === id)

  if (!habit) {
    throw new Error('Habit not found')
  }
  return habit
}

export function updateStreak(habit: Habit): Habit {
  const today = new Date()
  const lastDate = parseISO(habit.lastCompletedDate)

  if (isToday(lastDate)) {
    return habit
  }

  if (isYesterday(lastDate)) {
    return {
      ...habit,
      currentStreak: habit.currentStreak + 1,
      lastCompletedDate: today.toISOString(),
    }
  }

  return {
    ...habit,
    currentStreak: 1,
    lastCompletedDate: today.toISOString(),
  }
}
