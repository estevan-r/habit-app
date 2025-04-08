import {
  type RouteConfig,
  route,
  index,
  prefix,
} from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('new-habit', 'routes/new-habit.tsx'),
  route('home/:id', 'routes/habit-details.tsx'),
  route('profile', 'routes/profile.tsx'),
] satisfies RouteConfig
