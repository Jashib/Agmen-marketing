import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ComparisonSection from "@/components/comparison-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="comparison">
        <ComparisonSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      <Footer />
    </main>
  )
}
