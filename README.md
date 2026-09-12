# Ordivy web

Web en Next.js con App Router, React y Tailwind CSS 4.

## Desarrollo

Requiere Node.js >= 22.13.0.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000.

## Produccion

```sh
npm run build
npm start
```

## Comprobaciones

```sh
npm run typecheck
npm run lint
```

La pagina esta en app/page.jsx y utiliza app/OrdivyLanding.jsx. Los estilos globales se importan en app/layout.jsx y los recursos se sirven desde public/.

La ejecucion utiliza Next.js directamente. El despliegue requiere un entorno compatible con Next.js.
