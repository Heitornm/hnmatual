export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Workspace de desenvolvimento" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              Sempre atuei com atendimento ao cliente na área comercial, tenho um bom relacionamento interpessoal, 
              bom atendimento e me expresso de forma clara. Hoje atuo na área de TI com atendimento help-desk 
              auxiliando usuários e solucionando questões de sistemas e hardwares.
            </p>
            
            <p className="text-lg">
              Estudo Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá, e gosto de estudar 
              conteúdos que complementam o ensino na faculdade para reforçar o tema abordado.
            </p>
            
            <p className="text-lg">
              No momento busco ingressar e me desenvolver na área de desenvolvimento de sistemas, com sólida base 
              em programação multi-paradigma (Python, Java, PHP, JavaScript) e experiência em desenvolvimento 
              web (HTML5, CSS3) e mobile (React Native).
            </p>
            
            <p className="text-lg">
              Sou proativo, curioso, empático, com pensamento crítico e senso de prioridade. Procuro ser produtivo, 
              tenho ótimo relacionamento interpessoal, persuasão e negociação, resolução de problemas e inteligência emocional.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Anos de Estudo</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Cursos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
