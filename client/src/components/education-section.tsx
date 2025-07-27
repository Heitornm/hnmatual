export function EducationSection() {
  const currentSemesterSubjects = [
    "Análise de Dados",
    "Introdução à programação de computadores",
    "Inteligência Artificial para Desenvolvedores",
    "Padrões de Projetos de Software com Java",
    "Programação para dispositivos móveis em Android"
  ]

  const completedSemesters = [
    {
      semester: "1° Semestre",
      subjects: [
        "Desenvolvimento WEB",
        "Pensamento Computacional",
        "Arquitetura de Computadores",
        "Paradigmas de Linguagem",
        "Engenharia de Usabilidade"
      ]
    },
    {
      semester: "2° Semestre",
      subjects: [
        "Sistemas em UML",
        "Estrutura de Dados",
        "Computação em nuvem",
        "Desenvolvimento Rápido de Aplicações",
        "Segurança da Informação"
      ]
    },
    {
      semester: "3° Semestre",
      subjects: [
        "Comunicação entre Aplicações",
        "Matemática e Lógica",
        "Banco de Dados",
        "Sistemas Operacionais",
        "Engenharia de Software"
      ]
    },
    {
      semester: "4° Semestre",
      subjects: [
        "Tópicos de Big Data em Python",
        "POO em Java",
        "APPs Cloud, IoT e Indústria 4.0 em Python",
        "Algoritmos e complexidade",
        "Desenvolvimento de software seguro"
      ]
    }
  ]

  const certifications = [
    {
      institution: "Fundação Bradesco",
      courses: [
        "Excel - intermediário",
        "Lei Geral de Proteção de Dados (LGPD)",
        "Fundamentos de TI: Hardware e Software"
      ],
      color: "green-500",
      status: "Certificado"
    },
    {
      institution: "CursoEmVídeo",
      courses: [
        "Algoritmos",
        "HTML e CSS",
        "JavaScript",
        "Python3",
        "PHP e POO",
        "WordPress",
        "MySQL e PostgreSQL"
      ],
      color: "blue-500",
      status: "Certificado"
    },
    {
      institution: "UDEMY",
      courses: [
        "Java",
        "Kotlin",
        "Jetpack",
        "Banco de Dados",
        "API",
        "Firebase"
      ],
      color: "purple-500",
      status: "Cursando"
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Educação & Certificações</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Education */}
          <div className="card-hover bg-gradient-to-br from-blue-600/5 to-cyan-500/5 p-8 rounded-xl border border-blue-600/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-graduation-cap text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Análise e Desenvolvimento de Sistemas</h3>
                <p className="text-slate-600 dark:text-slate-400">Universidade Estácio de Sá</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-4">Janeiro 2023 - Julho 2025 (Cursando)</p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progresso do Curso</span>
                <span className="text-sm text-blue-600">5º Semestre</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full" style={{width: "80%"}}></div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Disciplinas em Andamento (5º Semestre):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {currentSemesterSubjects.map((subject, index) => (
                  <span key={index} className="bg-white dark:bg-slate-700 px-3 py-1 rounded-full">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Completed Semesters */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Semestres Concluídos:</h4>
              <div className="space-y-4">
                {completedSemesters.map((semester, index) => (
                  <div key={index} className="bg-white dark:bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">{semester.semester}</h5>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {semester.subjects.join(" • ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Certificações & Cursos</h3>
            
            {certifications.map((cert, index) => (
              <div key={index} className={`card-hover bg-white dark:bg-slate-700 p-4 rounded-lg shadow border-l-4 border-${cert.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-semibold text-${cert.color}`}>{cert.institution}</h4>
                  <span className={`inline-block ${cert.status === 'Certificado' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'} text-xs px-2 py-1 rounded-full`}>
                    {cert.status}
                  </span>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  {cert.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>• {course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
