import { useState } from "react"

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)

  const experiences = [
    {
      title: "Auxiliar de TI",
      company: "Casa Giacomo de Ferragens Ltda",
      period: "Maio 2024 - Atual",
      description: "Atendimento ao cliente interno, solucionando questões de sistema, cadastros, liberações, comunicação e rede, troca de equipamento, instalações de novos softwares e atualização de manuais, normalmente de forma remota ou presencial quando necessário.",
      color: "blue-600",
      current: true
    },
    {
      title: "Promotor de Vendas",
      company: "POP Trade Marketing",
      period: "Outubro 2023 - Abril 2024",
      description: "Ampla experiência em promover marcas e suas campanhas ativas, aumentando a visibilidade e impulsionando as vendas. Capacidade de lidar com dúvidas técnicas de clientes, fornecendo explicações detalhadas e orientações sobre os produtos em promoção.",
      color: "cyan-500"
    },
    {
      title: "Promotor de Vendas",
      company: "Work On",
      period: "Setembro 2022 - Setembro 2023",
      description: "Experiência em promover marcas e suas campanhas ativas, aumentando a visibilidade e impulsionando as vendas. Capacidade de lidar com dúvidas técnicas de clientes, fornecendo explicações detalhadas e orientações sobre os produtos em promoção.",
      color: "slate-400"
    },
    {
      title: "Vendedor",
      company: "IVD SERVIÇOS TECNOLÓGICOS",
      period: "Outubro 2019 - Julho 2020",
      description: "Profissional experiente e altamente qualificado em vendas de soluções integradas, com histórico de sucesso comprovado em diversos segmentos: Produtos de tecnologia, informática, CFTV, segurança, controle de acesso, energia, estruturas e cabeamentos, e licenças de software.",
      color: "slate-400"
    },
    {
      title: "Promotor de Vendas e Merchandising",
      company: "Intelbras SA",
      period: "Outubro 2018 - Julho 2019",
      description: "Promoção da marca e campanhas vigente, dúvidas técnicas e acompanhamento das ações da concorrência.",
      color: "slate-400"
    },
    {
      title: "Vendedor",
      company: "Saint-Gobain - Telhanorte",
      period: "Janeiro 2017 - Outubro 2018",
      description: "Atendimento ao cliente com foco em vendas de materiais para construção em geral.",
      color: "slate-400"
    },
    {
      title: "Vendedor",
      company: "M&M Universo",
      period: "Outubro 2015 - Junho 2016",
      description: "Responsável por um ponto de venda, com foco em vendas financiamento ou consórcio e peças e acessórios de reposição.",
      color: "slate-400"
    },
    {
      title: "Consultor Técnico de Vendas",
      company: "Leroy Merlin",
      period: "Outubro 2012 - Maio 2015",
      description: "Atendimento ao cliente com foco em vendas de móveis planejados para cozinhas e banheiros.",
      color: "slate-400"
    },
    {
      title: "Vendedor Balconista",
      company: "Depósito Casa 1",
      period: "Janeiro 2008 - Fevereiro 2012",
      description: "Atendimento ao cliente com foco em vendas de materiais para construção em geral.",
      color: "slate-400"
    }
  ]

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3)

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experiência Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="relative timeline-line">
          {visibleExperiences.map((exp, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row md:items-center md:space-x-8">
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                    <div className={`card-hover bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-${exp.color}`}>
                      <h3 className={`text-xl font-bold text-${exp.color} mb-2`}>
                        {exp.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">{exp.company}</p>
                      <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
                      <p className="text-sm">{exp.description}</p>
                      {exp.current && (
                        <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full mt-2">
                          Atual
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:w-12">
                    <div className={`w-4 h-4 bg-${exp.color} rounded-full border-4 border-white dark:border-slate-900 shadow-lg`}></div>
                  </div>
                  <div className="md:w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2"></div>
                  <div className="flex items-center justify-center md:w-12">
                    <div className={`w-4 h-4 bg-${exp.color} rounded-full border-4 border-white dark:border-slate-900 shadow-lg`}></div>
                  </div>
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <div className={`card-hover bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-${exp.color}`}>
                      <h3 className={`text-xl font-bold text-${exp.color} mb-2`}>
                        {exp.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">{exp.company}</p>
                      <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          
          {!showAll && experiences.length > 3 && (
            <div className="text-center">
              <button 
                onClick={() => setShowAll(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                Ver Mais Experiências <i className="fas fa-chevron-down ml-2"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
