import habitsData from '~/data/habits.json'
import { type Habit } from '~/types'

let habits = [...habitsData]

export function getHabits(): Promise<Habit[]> {
  return new Promise((res) => setTimeout(() => res([...habits]), 300))
}

export function getHabit(id: string): Promise<Habit | undefined> {
  return new Promise((res) =>
    setTimeout(() => res(habits.find((h) => h.id === id)), 300)
  )
}

export function markHabitAsDone(id: string): Promise<Habit | null> {
  return new Promise((res) => {
    setTimeout(() => {
      const index = habits.findIndex((h) => h.id === id)
      if (index === -1) return res(null)

      const today = new Date().toISOString()
      const updated = {
        ...habits[index],
        currentStreak: habits[index].currentStreak + 1,
        lastCompletedDate: today,
      }

      habits[index] = updated
      res(updated)
    }, 300)
  })
}

export function resetHabits(): Promise<void> {
  return new Promise((res) => {
    habits = [...habitsData]
    setTimeout(res, 300)
  })
}
