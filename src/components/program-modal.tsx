"use client"


import type { Program } from "@/lib/program-data"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ProgramModalProps {
    program: Program
    isOpen: boolean
    onClose: () => void
}

export default function ProgramModal({ program, isOpen, onClose }: ProgramModalProps) {
    // El componente Dialog de Shadcn UI maneja automáticamente los eventos de Escape y clicks fuera del modal

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-md w-full max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex justify-between items-center">
                        <DialogTitle className="text-2xl font-bold">{program.name}</DialogTitle>
                    </div>
                </DialogHeader>

                <div className="mb-4">
                    <div className="flex gap-2 mb-2">
                        <span className="font-medium">Día:</span>
                        <span className="dark:text-gray-300">{program.day}</span>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <span className="font-medium">Horario:</span>
                        <span className="dark:text-gray-300">{program.timeSlot}</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-2">Integrantes:</h3>
                    <ul className="list-disc pl-5">
                        {program.participants.map((participant, index) => (
                            <li key={index} className="mb-1 dark:text-gray-300">
                                {participant}
                            </li>
                        ))}
                    </ul>
                </div>

                {program.description && (
                    <div className="mt-4">
                        <h3 className="text-lg font-medium mb-2">Descripción:</h3>
                        <p className="text-gray-800 dark:text-gray-300">{program.description}</p>
                    </div>
                )}

                <DialogFooter className="mt-6">
                    <Button
                        onClick={onClose}
                        className="bg-[#a5d900] text-black font-medium hover:bg-[#a5d900]/80 transition-colors w-full"
                    >
                        Cerrar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

