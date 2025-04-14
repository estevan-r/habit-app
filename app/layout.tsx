import { Outlet } from 'react-router'
import Header from '~/components/header'
import FooterNav from '~/components/footer-nav'

export default function Layout() {
  return (
    <main className='grid place-items-center w-full h-full'>
      <div className='relative flex flex-col justify-between max-h-dvh w-full bg-stone-100'>
        <Header />
        <Outlet />
        <FooterNav />
      </div>
    </main>
  )
}
