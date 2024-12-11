import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Praisely</h3>
            <p>Automating praise to build stronger school relationships</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Features</Link></li>
              {/* <li><Link href="#" className="hover:text-yellow-400">Pricing</Link></li> */}
              <li><Link href="#" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          <div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Praisely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

