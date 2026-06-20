import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const WEB3FORMS_ACCESS_KEY = 'fdd03ef3-524a-4ffb-8099-c196f5c40108'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'peterjust1998@gmail.com',
    href: 'mailto:peterjust1998@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0905 659 1284',
    href: 'tel:+639056591284',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cagayan de Oro City, Philippines',
    href: null,
  },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New portfolio message from ${formData.name}`,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Send a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Fill out the form below and I'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} required className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Contact Information</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                Feel free to reach out through any of these channels
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Let's Create Together</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/pexelhd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/peter-justine-canico-996a54215/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="mailto:peterjust1998@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Peter Justine Canico. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
