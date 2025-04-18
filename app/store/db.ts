import { isYesterday, isToday, parseISO, subDays, formatISO } from 'date-fns'

export type Habit = {
  id: string
  name: string
  description: string
  interval: string
  currentStreak: number
  lastCompletedDate: string
}

const SOTRAGE_KEY = 'habits'

let HABITS: Habit[] = []

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
}

function saveHabits(habits: Habit[]) {
  if (isBrowser()) {
    localStorage.setItem(SOTRAGE_KEY, JSON.stringify(habits))
  }
}

function loadHabits(): Habit[] {
  if (!isBrowser()) return []

  const stored = localStorage.getItem(SOTRAGE_KEY)
  if (!stored) return []

  try {
    return JSON.parse(stored) as Habit[]
  } catch {
    return []
  }
}

function getSeededHabits(): Habit[] {
  const yesterday = subDays(new Date(), 1)
  const yesterdayISO = formatISO(yesterday)

  return [
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
}

export function initHabits() {
  if (!isBrowser()) return

  const stored = loadHabits()

  if (stored.length === 0) {
    HABITS = getSeededHabits()
    saveHabits(HABITS)
  } else {
    HABITS = stored
  }
}

export function getHabits(): Habit[] {
  return [...HABITS]
}

export function getHabit(id: string): Habit {
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
  const newHabit: Habit = {
    id: `${Date.now()}`,
    name,
    description,
    interval,
    currentStreak: 0,
    lastCompletedDate,
  }

  HABITS.push(newHabit)
  saveHabits(HABITS)
}

export function updateHabit(updated: Habit) {
  const index = HABITS.findIndex((habit) => habit.id === updated.id)

  if (index !== -1) {
    HABITS[index] = updated
    saveHabits(HABITS)
  }
}

export function markHabitAsDone(id: string): Habit | null {
  const habit = getHabit(id)
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

export function resetHabits() {
  HABITS = getSeededHabits()
  saveHabits(HABITS)
}
