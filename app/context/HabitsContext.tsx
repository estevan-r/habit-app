import { createContext, useContext, useEffect, useState } from 'react'
import { getHabits, markHabitAsDone, resetHabits } from '~/lib/fakeAPI'
import { type Habit } from '~/types'

type Context = {
  habits: Habit[]
  markDone: (id: string) => Promise<void>
  reset: () => Promise<void>
}

const HabitsContext = createContext<Context | undefined>(undefined)

export function HabitsProvider({ children }: { children: React.ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>([])

  useEffect(() => {
    getHabits().then(setHabits)
  }, [])

  const markDone = async (id: string) => {
    const updated = await markHabitAsDone(id)
    if (!updated) return
    setHabits((prev) => prev.map((h) => (h.id === id ? updated : h)))
  }

  const reset = async () => {
    await resetHabits()
    const fresh = await getHabits()
    setHabits(fresh)
  }

  return (
    <HabitsContext.Provider value={{ habits, markDone, reset }}>
      {children}
    </HabitsContext.Provider>
  )
}

export function useHabits() {
  const ctx = useContext(HabitsContext)
  if (!ctx) throw new Error('Must be used within HabitsProvider')
  return ctx
}
