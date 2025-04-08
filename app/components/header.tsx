export default function Header() {
  return (
    <div className='fixed z-10 top-0 flex justify-between max-w-[inherit] w-full h-24 p-4 bg-inherit border-b border-b-black/5 shadow-xs'>
      <div>
        <div>Good Morning,</div>
        <div className='font-bold text-2xl'>Estevan</div>
      </div>
      <div className='flex gap-2'>
        <div>icon</div>
        <div>icon</div>
      </div>
    </div>
  )
}
