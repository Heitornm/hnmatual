import { smoothScrollTo } from "@/lib/smooth-scroll"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#education", label: "Educação" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contato" },
  ]

  const socialLinks = [
    { href: "https://github.com/heitornm", icon: "fab fa-github" },
    { href: "https://linkedin.com/in/heitornm", icon: "fab fa-linkedin" },
    { href: "https://wa.me/5511999999999", icon: "fab fa-whatsapp" },
  ]

  const contactDetails = [
    { icon: "fas fa-envelope", text: "heitor.martins@email.com" },
    { icon: "fab fa-whatsapp", text: "+55 (11) 99999-9999" },
    { icon: "fas fa-map-marker-alt", text: "São Paulo, Brasil" },
  ]

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Heitor Martins</h3>
            <p className="text-slate-300 mb-4">
              Desenvolvedor de Sistemas em formação, apaixonado por criar soluções inovadoras 
              e impactantes através da tecnologia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => smoothScrollTo(link.href)}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-slate-300">
              {contactDetails.map((detail, index) => (
                <p key={index}>
                  <i className={`${detail.icon} mr-2`}></i>
                  {detail.text}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Heitor Martins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
