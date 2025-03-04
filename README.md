# Programación VORTERIX 2025

Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Descripción del Proyecto

Esta aplicación muestra la programación semanal de la radio VORTERIX para el año 2025. Permite a los usuarios:

- Visualizar la grilla completa de programación en formato de tabla
- Ver los programas organizados por días y franjas horarias
- Consultar detalles de cada programa (conductores, horarios, etc.)
- Alternar entre modo claro y oscuro

## Características Principales

- **Visualización de Programación**: Tabla interactiva con todos los programas de la semana
- **Detalles de Programas**: Modal con información detallada al hacer clic en cada programa
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Tema Oscuro/Claro**: Soporte para cambiar entre temas de visualización
- **Programas Destacados**: Identificación visual de programas especiales

## Tecnologías Utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor
- **TypeScript**: Tipado estático para mayor robustez del código
- **Tailwind CSS**: Framework de utilidades CSS para el diseño
- **Shadcn UI**: Componentes de interfaz reutilizables
- **next-themes**: Gestión de temas claro/oscuro

## Comenzando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente [Geist](https://vercel.com/font), una nueva familia de fuentes para Vercel.

## Aprende Más

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes revisar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js) - ¡tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.