import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
    
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Praisely</h1>
        <p className="text-xl mb-8">Automating praise to build stronger school relationships</p>
        <div className="bg-white p-8 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <Image
            src="/images/front-pc.png"
            alt="Praisely postcard"
            width={600}
            height={200}
            className="rounded"
          />
        </div>
        {/* <Button className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500">Get Started</Button> */}
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { title: "Automated Praise", description: "Send personalized postcards automatically" },
    { title: "Strengthen Relationships", description: "Build stronger connections with students and parents" },
    { title: "Easy Integration", description: "Seamlessly integrate with your existing school systems" },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Praisely?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah Johnson", role: "Principal", quote: "Praisely has transformed how we recognize our students' achievements." },
    { name: "Mike Thompson", role: "Teacher", quote: "The postcards bring smiles to both students and parents. It's a game-changer!" },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Educators Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">{testimonial.quote}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Praising?</h2>
        <p className="text-xl mb-8">Join hundreds of schools already using Praisely to build stronger relationships.</p>
        {/* <Button className="bg-black text-white hover:bg-gray-800">Schedule a Demo</Button> */}
      </div>
    </section>
  )
}

