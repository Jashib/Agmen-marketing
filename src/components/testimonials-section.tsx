import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emily Carter",
      title: "Owner",
      content:
        "Before working with Agmen Marketing, we spent so much time chasing leads that went nowhere. Now their team actually closes the prospects before they come to us and it saves us hours every week and boosts our sales.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Jason Mitchell",
      title: "Agency Manager",
      content:
        "I wasn&apos;t sure how it would work, but their agents do a great job qualifying and closing leads. Getting weekly updates keeps me in the loop and builds a lot of trust.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Sandra Lopez",
      title: "Marketing Director",
      content:
        "These guys really get how insurance sales work. They don&apos;t just hand over cold leads, they nurture and close them. Our conversion rate has improved a lot.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Robert Nguyen",
      title: "Principal Agent",
      content:
        "It&apos;s like having an extra sales team without the hassle of hiring. The clients they send us are already interested and ready to move forward.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Linda Thompson",
      title: "Founder",
      content:
        "The no-contract option made it easy to try them out. Now I can&apos;t imagine going back to buying unqualified leads. This is a game changer.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80",
    },
    {
      name: "David Patel",
      title: "CEO",
      content:
        "Since we started, our sales cycle has gotten much shorter. Their team&apos;s ability to close before handing off really speeds things up.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Proof from Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Agmen Marketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

              <div className="flex items-center">
                <Image
                  src={ "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">We share everything (except our cookies)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6">
                <Image
                  src="/images/team-meeting.avif"
                  alt="Professional team meeting"
                  width={1887}
                  height={80}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-gray-900">Our dedicated team</h4>
                <p className="text-sm text-gray-600">Licensed professionals working for your success</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Image
                  src="/images/team-collaboration.avif"
                  alt="Transparent reporting dashboard"
                  width={2070}
                  height={80}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-gray-900">Transparent process</h4>
                <p className="text-sm text-gray-600">Weekly reports and full visibility into our work</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <Image
                  src="/images/work-team.avif"
                  alt="Results and analytics"
                  width={2015}
                  height={80}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-gray-900">Results-driven approach</h4>
                <p className="text-sm text-gray-600">We only succeed when you succeed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
