import { smoothScrollTo } from "@/lib/smooth-scroll"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Olá, eu sou
              <span className="gradient-text block">Heitor Martins</span>
            </h1>
            <p className="text-xl mb-8 text-slate-600 dark:text-slate-400">
              Desenvolvedor de Sistemas em formação, especializado em desenvolvimento web e mobile. 
              Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => smoothScrollTo("#contact")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Entre em Contato
              </button>
              <button 
                onClick={() => smoothScrollTo("#about")}
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                Saiba Mais
              </button>
            </div>
            
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/heitornm" className="text-2xl hover:text-blue-600 transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/heitornm" className="text-2xl hover:text-blue-600 transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/5511999999999" className="text-2xl hover:text-blue-600 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Heitor Martins - Desenvolvedor de Sistemas" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
