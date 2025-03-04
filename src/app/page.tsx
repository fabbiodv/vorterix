"use client"

import { useState } from "react"
import ProgramModal from "@/components/program-modal"
import { programs, type Program } from "@/lib/program-data"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  const [isOpenProgramModal, setIsOpenProgramModal] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)

  const timeSlots = [
    "8:00 - 10:00",
    "10:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00",
    "19:00 - 21:00",
    "21:00 - 23:00",
    "23:00 - 01:00",
  ]

  const timeSlotsWeekend = [
    "20:00 - 22:00",
    "22:00 - 00:00",
  ]

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

  const handleOpenProgram = (program: Program) => {
    setSelectedProgram(program)
    setIsOpenProgramModal(true)
  }

  const handleCloseProgram = () => {
    setIsOpenProgramModal(false)
  }

  const getProgram = (day: string, timeSlot: string) => {
    return programs.find((program) => program.day === day && program.timeSlot === timeSlot)
  }

  const isSpecialProgram = (program?: Program) => {
    return program?.isSpecial || false
  }

  return (
    <main className="min-h-screen  p-4 md:p-8 transition-colors">
      <header className="mb-12 text-center relative">
        <div className="absolute right-0 top-0">
          <ThemeToggle />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold uppercase">Programación VORTERIX 2025</h1>
      </header>

      <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        <Table className="w-full min-w-[800px]">
          <TableHeader>
            <TableRow className="">
              <TableHead className="font-semibold ">Horario</TableHead>
              {days.map((day) => (
                <TableHead key={day} className="font-semibold">
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {timeSlots.map((timeSlot) => (
              <TableRow key={timeSlot} >
                <TableCell className="border border-gray-200 dark:border-gray-800 p-3 font-medium text-gray-700 dark:text-gray-200">{timeSlot}</TableCell>
                {days.map((day) => {
                  const program = getProgram(day, timeSlot)
                  const isSpecial = isSpecialProgram(program)

                  return (
                    <TableCell
                      key={`${day}-${timeSlot}`}
                      className={`border border-gray-200 dark:border-gray-800 p-0 text-center transition-all ${program ? "cursor-pointer hover:bg-[#a5d900]/20" : ""
                        } ${isSpecial ? "bg-[#a5d900]/10 dark:bg-[#a5d900]/20" : ""}`}
                      onClick={() => program && handleOpenProgram(program)}
                    >
                      {program ? (
                        <div className={`py-3 px-2 h-full flex items-center justify-center ${isSpecial ? "font-semibold" : ""
                          }`}>
                          <span >{program.name}</span>
                          {isSpecial && (
                            <span className="ml-1 inline-flex items-center justify-center w-4 h-4">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#a5d900]">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="py-3 px-2 h-full"></div>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}

            {/* Horarios de fin de semana */}
            <TableRow >
              <TableCell colSpan={days.length + 1} className="border border-gray-200 dark:border-gray-800 p-3 font-semibold text-gray-700 dark:text-gray-200 text-center">
                Programación de fin de semana
              </TableCell>
            </TableRow>
            {timeSlotsWeekend.map((timeSlot) => (
              <TableRow key={timeSlot} >
                <TableCell className="border border-gray-200 dark:border-gray-800 p-3 font-medium text-gray-700 dark:text-gray-200">{timeSlot}</TableCell>
                {days.map((day) => {
                  const program = getProgram(day, timeSlot)
                  const isSpecial = isSpecialProgram(program)

                  return (
                    <TableCell
                      key={`${day}-${timeSlot}`}
                      className={`border border-gray-200 dark:border-gray-800 p-0 text-center transition-all ${program ? "cursor-pointer hover:bg-[#a5d900]/20" : ""
                        } ${isSpecial ? "bg-[#a5d900]/10 dark:bg-[#a5d900]/20" : ""}`}
                      onClick={() => program && handleOpenProgram(program)}
                    >
                      {program ? (
                        <div className={`py-3 px-2 h-full flex items-center justify-center ${isSpecial ? "font-semibold" : ""
                          }`}>
                          <span className="dark:text-gray-200">{program.name}</span>
                          {isSpecial && (
                            <span className="ml-1 inline-flex items-center justify-center w-4 h-4">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#a5d900]">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="py-3 px-2 h-full"></div>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          isOpen={isOpenProgramModal}
          onClose={handleCloseProgram}
        />
      )}
    </main>
  )
}

