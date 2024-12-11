import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-400">Praisely</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </nav>
        {/* <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Sign Up</Button> */}
      </div>
    </header>
  )
}

