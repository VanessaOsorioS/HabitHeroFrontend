# HabitHero Frontend

Este proyecto implementa la aplicación móvil y web de **HabitHero**, desarrollada con **React Native** mediante **Expo**. Su objetivo es ofrecer una base sólida para una aplicación escalable, mantenible y modular, organizada bajo una arquitectura por _features_.

La aplicación está diseñada principalmente para entornos móviles, con soporte adaptable para ejecución en entorno web, y utiliza **React Navigation** como sistema de navegación flexible y controlado.


## Tecnologías principales

- [Expo](https://docs.expo.dev/) — entorno de desarrollo React Native simplificado.  
- [React Native](https://reactnative.dev/) — framework principal para desarrollo móvil.  
- [React Navigation](https://reactnavigation.org/) — sistema de navegación por stacks y tabs.  
- [TypeScript](https://www.typescriptlang.org/) - tipado estático para mayor robustez.  

## Filosofía de arquitectura

El proyecto adopta una **arquitectura modular por features**, donde cada módulo o *feature* representa una parte funcional independiente del sistema (por ejemplo: `auth`, `missions`, `profile`).  
Esta separación facilita el trabajo en equipo, el mantenimiento, las pruebas y la escalabilidad del código.

> 📘 Para una descripción detallada de la arquitectura, revisa el documento [`ARCHITECTURE_GUIDE.md`](./ARCHITECTURE_GUIDE.md).

## 📁 Estructura general del proyecto

```bash
HabitHero/
├── src/
│   ├── app/                     # Configuración global de la aplicación
│   │   ├── routes/              # Definición de rutas principales
│   │   ├── store/               # Estado global (Redux, Zustand, Context, etc.)
│   │   ├── hooks/               # Hooks globales reutilizables
│   │   ├── providers/           # Providers globales (tema, autenticación, etc.)
│   │   └── index.tsx            # Punto de entrada de la aplicación
│   │
│   ├── features/                # Módulos funcionales del sistema
│   │   ├── auth/                # Autenticación (login, registro, logout)
│   │   ├── missions/            # Sistema de misiones del usuario
│   │   └── profile/             # Perfil de usuario y progreso
│   │
│   ├── shared/                  # Código reutilizable entre features
│   │   ├── components/          # Componentes genéricos
│   │   ├── services/            # Servicios comunes (API, utilidades)
│   │   ├── utils/               # Funciones auxiliares
│   │   ├── constants/           # Constantes globales
│   │   └── types/               # Tipos globales
│   │
│   └── assets/                  # Imágenes, íconos y fuentes
│
├── package.json
├── tsconfig.json
├── README.md
└── ARCHITECTURE_GUIDE.md
```

## Navegación

El proyecto utiliza **React Navigation** como sistema principal de rutas.  
Esto permite manejar **stacks**, **tabs** y **navegación anidada** de manera controlada y compatible con la arquitectura modular.

Ejemplo de configuración base (`src/app/routes/index.tsx`):

```tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "@/features/missions/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```

> ⚠️ `expo-router` sigue instalado, pero **no se utiliza** en esta versión.  
> En caso de necesitar migrar o simplificar la navegación, puede reactivarse, pero la arquitectura modular actual está optimizada para React Navigation.

---

## Crear una nueva feature

Cada módulo dentro de `src/features` representa una **unidad funcional independiente**.  
Para crear una nueva feature, sigue este patrón:

```bash
src/features/example/
├── components/      # Componentes específicos de la feature
│   └── ExampleCard.tsx
├── pages/           # Pantallas o vistas principales
│   └── ExamplePage.tsx
├── services/        # Comunicación con APIs o lógica de datos
│   └── exampleService.ts
├── hooks/           # Hooks propios de la feature
│   └── useExample.ts
├── types/           # Interfaces y tipos
│   └── index.ts
└── index.ts         # Punto de exportación

```

Ejemplo básico de `index.ts` dentro de una feature:

```ts
export * from "./components/ExampleCard";
export * from "./pages/ExamplePage";
export * from "./services/exampleService";

```

**Convenciones:**

- El código y los nombres de carpetas van en **inglés**.
- Los archivos dentro de `pages/` deben terminar en `Page.tsx`.
- Evita dependencias cruzadas entre features; utiliza `shared/` para código común.

## Instalación y ejecución

### 1. Clonar el repositorio

`git clone https://github.com/VanessaOsorioS/HabitHeroFrontend.git cd HabitHero`

### 2. Instalar dependencias

`npm install`

### 3. Ejecutar el proyecto

- Iniciar el servidor Expo: 
    `npm run start`
- Ejecutar en Android:
    `npm run android`
- Ejecutar en iOS:
    `npm run ios`
- Ejecutar en Web:
    `npm run web`

## 🧰 Scripts disponibles

|Comando|Descripción|
|---|---|
|`npm run start`|Inicia el proyecto en el modo de desarrollo de Expo.|
|`npm run android`|Abre la app en un emulador o dispositivo Android.|
|`npm run ios`|Abre la app en un simulador o dispositivo iOS.|
|`npm run web`|Ejecuta el proyecto en el navegador.|
|`npm run lint`|Analiza el código con ESLint.|
|`npm run reset-project`|Limpia los archivos temporales y reinicia la configuración del proyecto.|

## Buenas prácticas

- Mantén los **componentes pequeños y reutilizables**.
- Usa `shared/` solo para elementos **globales y genéricos**. 
- **No acoples** dependencias entre features.
- Usa imports absolutos con el alias `@` definido en `tsconfig.json`.
    `import { Button } from "@/shared/components/Button";`
- Sigue las convenciones del equipo descritas en `ARCHITECTURE_GUIDE.md`.

## Futuras mejoras

- Definir e implementar un sistema de **estado global** (Redux, Zustand o Context).
- Crear una **guía de estilo de componentes** compartidos. 
- Integrar **testing** para features.

## 📚 Recursos útiles

- [Documentación oficial de Expo](https://docs.expo.dev/)
- [Documentación de React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Guía de TypeScript con React](https://react-typescript-cheatsheet.netlify.app/)
- [Documentación de React Native](https://reactnative.dev/docs/environment-setup)