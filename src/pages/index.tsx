import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/Components/NavBar/NavBar'
import Bannar from '@/Components/Bannar/Bannar'
import Footer from '@/Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NavBar />
      <Bannar />
      <Footer />
    </div>
  )
}
