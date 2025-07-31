"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Download,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function TypingAnimation({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function CounterAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function Portfolio() {
  const skills = {
    backend: ["Java", "Spring Boot", "Spring Security", "Hibernate", "Maven", "Gradle"],
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "AWS", "Jenkins", "IntelliJ IDEA", "VS Code"],
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com Spring Boot no backend e React no frontend. Inclui sistema de pagamentos, gestão de estoque e painel administrativo.",
      tech: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management API",
      description:
        "API RESTful para gerenciamento de tarefas com autenticação JWT, documentação Swagger e testes automatizados.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Real-time Chat App",
      description: "Aplicação de chat em tempo real usando WebSockets, com salas privadas e notificações push.",
      tech: ["JavaScript", "Node.js", "Socket.io", "React", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2025 - Presente",
      description:
        "Desenvolvimento de aplicações web complexas usando Java/Spring Boot e React. Liderança técnica de equipe de 5 desenvolvedores.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Criação de APIs RESTful e interfaces responsivas. Implementação de arquiteturas microserviços e integração com serviços AWS.",
    },
    {
      title: "Junior Java Developer",
      company: "StartUp Tech",
      period: "2018 - 2020",
      description:
        "Desenvolvimento backend com Java e Spring Framework. Participação em projetos de modernização de sistemas legados.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="inline-block animate-fade-in-up">Olá, me chamo</span>
                  <span className="block text-emerald-600 animate-fade-in-up animation-delay-300">
                    <TypingAnimation text="Jânio Matos" speed={150} />
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium animate-fade-in-up animation-delay-600">
                  <TypingAnimation text="Full Stack Developer - Java & JavaScript" speed={50} />
                </p>
                <p className="text-lg text-slate-500 max-w-2xl">
                  Especialista em desenvolvimento de aplicações web robustas e escaláveis, com foco em tecnologias Java
                  e JavaScript modernas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-900">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                  onClick={()=>{window.location.href = 'mailto:janiotechn@gmail.com';}}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>
                <a download="janiotech.pdf" href="janiotech.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:bg-emerald-50 bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5"/>
                  Download CV
                </Button>
                </a>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start">
                <Link href="https://github.com/janiotech" target="blank" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/j%C3%A2nio-matos-aa57461b8/" target="blank" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcRzBxtcKlhgPnvZgVhTvDjWGnHfXNlpjMQBxPzRmQRHBQsBDwlPZQkdxtjNgwCkjQKZXDhZC" target="blank" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 group-hover:scale-105 transition-transform duration-500 group-hover:rotate-3">
                  <Avatar className="w-full h-full group-hover:scale-95 transition-transform duration-500">
                    <AvatarImage src="/placeholder.png?height=320&width=320" alt="Jânio" />
                    <AvatarFallback className="text-6xl font-bold text-white bg-emerald-500">J</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg group-hover:animate-bounce">
                  <Code className="h-8 w-8 text-emerald-600" />
                </div>
                {/* Efeito de partículas */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="absolute top-20 right-16 w-1 h-1 bg-emerald-300 rounded-full animate-ping animation-delay-300"></div>
                  <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping animation-delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Com mais de 5 anos de experiência em desenvolvimento de software, especializo-me em criar aplicações web
                robustas e escaláveis utilizando as melhores práticas do mercado.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Minha expertise abrange desde o desenvolvimento backend com Java e Spring Boot até a criação de
                interfaces modernas e responsivas com JavaScript e React.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Sempre em busca de novos desafios e oportunidades para aplicar tecnologias inovadoras que agreguem valor
                real aos negócios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-pulse">
                  <Code className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  <CounterAnimation end={5} />+ Anos
                </h3>
                <p className="text-slate-600 text-sm">Experiência</p>
              </Card>

              <Card className="text-center p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-pulse">
                  <Server className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  <CounterAnimation end={50} />+ Projetos
                </h3>
                <p className="text-slate-600 text-sm">Concluídos</p>
              </Card>

              <Card className="text-center p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-pulse">
                  <Globe className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  <CounterAnimation end={15} />+ Clientes
                </h3>
                <p className="text-slate-600 text-sm">Satisfeitos</p>
              </Card>

              <Card className="text-center p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-pulse">
                  <Smartphone className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">100% Mobile</h3>
                <p className="text-slate-600 text-sm">Responsivo</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-slate-600">Tecnologias e ferramentas que domino para criar soluções completas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg group-hover:text-red-600 transition-colors duration-300">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-red-100 hover:text-red-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg group-hover:text-green-600 transition-colors duration-300">
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-green-100 hover:text-green-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-300">
                  Ferramentas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-purple-100 hover:text-purple-700 transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-slate-600">Alguns dos meus trabalhos mais recentes e relevantes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 hover:rotate-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="h-4 w-4 text-slate-700" />
                    </div>
                  </div>
                </div>
                <CardHeader className="group-hover:bg-emerald-50 transition-colors duration-300">
                  <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="group-hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:scale-110"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transform transition-all duration-300 hover:shadow-md bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="hover:scale-105 transform transition-all duration-300 hover:shadow-md bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experiência Profissional</h2>
            <p className="text-lg text-slate-600">Minha trajetória no desenvolvimento de software</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-emerald-600 font-medium">{exp.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 md:mt-0 w-fit group-hover:bg-emerald-100 group-hover:border-emerald-300 transition-all duration-300"
                  >
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        {/* Background animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400 rounded-full animate-bounce animation-delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-600 rounded-full animate-ping animation-delay-600"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-emerald-300 rounded-full animate-pulse animation-delay-900"></div>
        </div>

        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3 group hover:scale-110 transform transition-all duration-300">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 group-hover:animate-bounce">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-slate-300">janiotechn@gmail.com</p>
            </div>

            <div className="flex flex-col items-center space-y-3 group hover:scale-110 transform transition-all duration-300">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 group-hover:animate-bounce">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Telefone</h3>
              <p className="text-slate-300">+55 (79) 99817-5138</p>
            </div>

            <div className="flex flex-col items-center space-y-3 group hover:scale-110 transform transition-all duration-300">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 group-hover:animate-bounce">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-semibold">Localização</h3>
              <p className="text-slate-300">Sergipe, Brasil</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 hover:scale-110 transform transition-all duration-300 hover:shadow-2xl animate-pulse"
            onClick={()=>{window.location.href = 'mailto:janiotechn@gmail.com';}}
          >
            <Mail className="mr-2 h-5 w-5" />
            Entrar em Contato
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-slate-400 text-center">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Jânio - Full Stack Developer. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="https://github.com/janiotech" target="blank" className="hover:text-emerald-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/j%C3%A2nio-matos-aa57461b8/" target="blank" className="hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcRzBxtcKlhgPnvZgVhTvDjWGnHfXNlpjMQBxPzRmQRHBQsBDwlPZQkdxtjNgwCkjQKZXDhZC" target="blank" className="hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
