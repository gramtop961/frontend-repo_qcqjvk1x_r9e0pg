export default function Footer(){
  return (
    <footer className="pt-16 pb-10 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60">© {new Date().getFullYear()} Ziro Labs</div>
        <div className="text-white/50 text-sm">Futuristic AI Electronic Circuit Designer</div>
      </div>
    </footer>
  )
}
