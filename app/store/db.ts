type Habit = {
  id: number
  name: string
  description: string
  interval: string
  streak?: number
}

const HABITS: Habit[] = [
  {
    id: 1,
    name: 'Reading',
    description: 'Read 2 chapters',
    interval: 'Daily',
    streak: 1,
  },
  {
    id: 2,
    name: 'Hydrate',
    description: 'Drink 48 oz of water',
    interval: 'Daily',
    streak: 1,
  },
  {
    id: 3,
    name: 'Run',
    description: 'Run 5 miles',
    interval: 'Every other day',
    streak: 1,
  },
]

export function getHabits() {
  return HABITS
}

export function createHabit({ name, description, interval }: Habit) {
  HABITS.push({
    id: HABITS.length + 1,
    name,
    description,
    interval,
    streak: 0,
  })
}
