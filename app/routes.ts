import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./layout.tsx', [
    index('routes/home.tsx'),
    route('profile', 'routes/profile.tsx'),
    route('new-habit', 'routes/new-habit.tsx'),
    route('habit/:id', 'routes/habit-details.tsx'),
    // TODO: Fix to incorporate new modal
    route('habits', 'routes/habits.tsx', [
      route('create', 'routes/create.tsx'),
    ]),
  ]),
] satisfies RouteConfig
