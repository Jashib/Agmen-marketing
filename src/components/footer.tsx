export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              agmen<span className="text-orange-500">.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We deliver ready-to-sign insurance clients, not just leads. Your partner in scaling your insurance agency.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Lead Generation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Lead Qualification</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sales Closing</li>
              <li className="hover:text-white cursor-pointer transition-colors">CRM Management</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Process</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>(555) 123-4567</p>
              <p>hello@agmenmarketing.com</p>
              <p>
                123 Business Ave, Suite 100
                <br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Agmen Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
