import Image from "next/image"

const logos = [
  { name: "Company 1", src: "/placeholder.svg?height=40&width=120" },
  { name: "Company 2", src: "/placeholder.svg?height=40&width=120" },
  { name: "Company 3", src: "/placeholder.svg?height=40&width=120" },
  { name: "Company 4", src: "/placeholder.svg?height=40&width=120" },
  { name: "Company 5", src: "/placeholder.svg?height=40&width=120" },
  { name: "Company 6", src: "/placeholder.svg?height=40&width=120" },
]

const testimonials = [
  {
    quote: "StreamLine has transformed how we approach marketing. The AI capabilities are truly game-changing.",
    author: "Sarah Johnson",
    title: "VP of Marketing",
    company: "Global Tech Solutions",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    quote: "We've seen a 10x improvement in our content creation speed while maintaining high quality.",
    author: "Michael Chen",
    title: "Marketing Director",
    company: "Innovation Labs",
    image: "/placeholder.svg?height=64&width=64",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Trusted by leading brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6 text-gray-600">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

