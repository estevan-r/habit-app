import { isYesterday, isToday, parseISO, subDays, formatISO } from 'date-fns'

export type Habit = {
  id: string
  name: string
  description: string
  interval: string
  currentStreak: number
  lastCompletedDate: string
}

let HABITS: Habit[] | null = null
const SOTRAGE_KEY = 'habits'

function saveHabits(habits: Habit[]) {
  if (typeof window === 'undefined') {
    return localStorage.setItem(SOTRAGE_KEY, JSON.stringify(habits))
  }
}

function loadHabits(): Habit[] {
  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem(SOTRAGE_KEY)
  if (!stored) return []

  try {
    return JSON.parse(stored) as Habit[]
  } catch {
    return []
  }
}

function getCachedHabits(): Habit[] {
  if (!HABITS) {
    HABITS = loadHabits()
  }

  if (HABITS.length === 0) {
    const yesterday = subDays(new Date(), 1)
    const yesterdayISO = formatISO(yesterday)

    HABITS = [
      {
        id: '1',
        name: 'Reading',
        description: 'Read 2 chapters',
        interval: 'daily',
        currentStreak: 4,
        lastCompletedDate: yesterdayISO,
      },
      {
        id: '2',
        name: 'Hydrate',
        description: 'Drink 48 oz of water',
        interval: 'daily',
        currentStreak: 4,
        lastCompletedDate: yesterdayISO,
      },
      {
        id: '3',
        name: 'Pushups',
        description: '20 pushups',
        interval: 'alternating',
        currentStreak: 3,
        lastCompletedDate: yesterdayISO,
      },
      {
        id: '4',
        name: 'Run',
        description: 'Run 5 miles',
        interval: 'alternating',
        currentStreak: 1,
        lastCompletedDate: yesterdayISO,
      },
      {
        id: '5',
        name: 'Floss',
        description: 'Floss teeth nightly',
        interval: 'daily',
        currentStreak: 4,
        lastCompletedDate: yesterdayISO,
      },
      {
        id: '6',
        name: 'Journal',
        description: 'Write down daily thoughts',
        interval: 'daily',
        currentStreak: 4,
        lastCompletedDate: yesterdayISO,
      },
    ]

    saveHabits(HABITS)
  }
  return HABITS
}

export function getHabits(): Habit[] {
  return getCachedHabits()
}

export function getHabit(id: string): Habit {
  HABITS = loadHabits()
  const habit = HABITS.find((habit) => habit.id === id)

  if (!habit) {
    throw new Error('Habit not found')
  }
  return habit
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
  const habits = getCachedHabits()

  const newHabit: Habit = {
    id: `${Date.now()}`,
    name,
    description,
    interval,
    currentStreak: 0,
    lastCompletedDate,
  }

  habits.push(newHabit)
  saveHabits(habits)
}

export function updateHabit(updated: Habit) {
  const habits = getCachedHabits()
  const index = habits.findIndex((habit) => habit.id === updated.id)

  if (index !== -1) {
    habits[index] = updated
    saveHabits(habits)
  }
}

export function markHabitAsDone(id: string): Habit | null {
  const habit = getHabit(id)
  if (!habit) return null

  const today = new Date()
  const lastDate = parseISO(habit.lastCompletedDate)

  if (isToday(lastDate)) return habit

  let updated: Habit
  if (isYesterday(lastDate)) {
    updated = {
      ...habit,
      currentStreak: habit.currentStreak + 1,
      lastCompletedDate: today.toISOString(),
    }
  } else {
    updated = {
      ...habit,
      currentStreak: 1,
      lastCompletedDate: today.toISOString(),
    }
  }

  updateHabit(updated)
  return updated
}
