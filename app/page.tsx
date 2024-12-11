import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="mt-12 text-5xl font-extrabold mb-8 text-gray-800">
          Create encouraging connections with ease
        </h1>
        <HeroSection />
        <FeaturesSection />
        <PraiseSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
// #A5B6BC

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center text-white">
        <div className="bg-white p-8 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          
          <div className="flex space-x-4">
            <Image
              src="/images/postcard-front.png"
              alt="Praisely postcard"
              width={600}
              height={200}
              className="rounded"
            />
            <Image
              src="/images/postcard-back.png"
              alt="Praisely postcard"
              width={600}
              height={200}
              className="rounded"
            />
          </div>
        </div>
        {/* <Button className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500">Get Started</Button> */}
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { title: "So fast and easy", description: "Send personalised postcards quickly and easily with our streamline app." },
    { title: "Tailored to your school and your students", description: "Personalised science based praise messaging based on your school values and ethos." },
    { title: "Strengthen Relationships", description: "Build real moments between school and parents that can be remembered forever" },
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

function PraiseSection() {
  const features = [
    {  description: "Congratulations on your outstanding performance in English class! Your exemplary behavior and unwavering dedication to mastering grammar have not gone unnoticed. The consistent effort you put into every assignment is truly commendable. Your hard work has paid off, as evidenced by your remarkable progress and the high-quality work you produce. Keep up the fantastic job, and know that your achievements are worthy of celebration!" },
    { description: "I have a big grin on my face because of your amazing effort in English! You came to class ready to learn every single day. It was awesome to see you focusing, asking smart questions, and helping your friends. And your grammar has gotten so good! All those exercises and games we did really helped you learn. I'm so impressed by how much you've grown!" },
    {  description: "Your success in English class is a testament to your exceptional character and work ethic. Your behavior sets a positive example for your peers, fostering a respectful and productive learning environment. The dedication you demonstrate in mastering grammar is truly impressive. Your meticulously crafted assignments showcase your deep understanding of the subject. Your efforts have not only improved your own skills but have also contributed to the overall success of the class." },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">This is what our praise messages look like?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <br/>
        <h3 className="text-2xl font-bold text-center mb-12">You can also add specific praise messages for your students and we will weave them into our praise message.
        </h3>
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

