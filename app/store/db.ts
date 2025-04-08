type Habit = {
  id: number
  name: string
  description: string
  interval: string
  streak: number
}

const HABITS: Habit[] = [
  {
    id: 1,
    name: 'Reading',
    description: 'Read 2 chapters',
    interval: 'daily',
    streak: 1,
  },
  {
    id: 2,
    name: 'Hydrate',
    description: 'Drink 48 oz of water',
    interval: 'daily',
    streak: 1,
  },
  {
    id: 3,
    name: 'Run',
    description: 'Run 5 miles',
    interval: 'alternating',
    streak: 1,
  },
]

export function getHabits() {
  return HABITS
}

export function addHabit({ name, description, interval }: Habit) {
  HABITS.push({
    id: HABITS.length + 1,
    name,
    description,
    interval,
    streak: 0,
  })
}

export function getHabit(id: number) {
  const habit = HABITS.find((habit) => habit.id === id)

  if (!habit) {
    throw new Error('Habit not found')
  }
  return habit
}

export function updateStreak(id: number) {
  let habit = HABITS.find((habit) => habit.id === id)

  if (!habit) {
    throw new Error('Habit not found')
  }
  return habit.streak + 1
}
