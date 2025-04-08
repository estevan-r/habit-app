import { Outlet } from 'react-router'
import Header from '~/components/header'
import FooterNav from '~/components/footer-nav'

export default function Layout() {
  return (
    <main className='grid place-items-center w-full h-full'>
      <div className='relative w-full h-full bg-sky-50'>
        <Header />
        <Outlet />
        <FooterNav />
      </div>
    </main>
  )
}
