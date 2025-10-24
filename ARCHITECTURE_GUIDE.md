# HabitHero – Guía de Arquitectura Frontend (Feature-Based)

## 1. Propósito del documento

Este documento define la arquitectura del frontend del proyecto HabitHero.  
Su objetivo es explicar cómo se organiza el código, cómo deben estructurarse las tareas de desarrollo siguiendo esta arquitectura y qué pasos debe seguir un desarrollador para implementar nuevas funcionalidades de forma coherente, modular y mantenible.

## 2. Enfoque general de la arquitectura

La arquitectura utiliza un modelo basado en **módulos por feature** (_Feature-Based Modular Architecture_).  
Este enfoque agrupa el código por funcionalidades completas, no por tipo de archivo. Cada módulo (o _feature_) representa una parte autónoma del sistema y contiene todo lo necesario para su funcionamiento.

Los principios fundamentales son:
- Agrupar el código por feature o dominio funcional.
- Evitar dependencias cruzadas entre features.
- Reutilizar código a través del módulo `shared/`.
- Escalar el proyecto fácilmente conforme crece el producto.

## 3. Estructura general del proyecto

```
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
│   │   │   ├── components/      # Componentes específicos de la feature
│   │   │   ├── pages/           # Pantallas (LoginPage, RegisterPage)
│   │   │   ├── services/        # Comunicación con el backend
│   │   │   ├── hooks/           # Hooks específicos de autenticación
│   │   │   ├── types/           # Tipos e interfaces propias
│   │   │   └── index.ts         # Punto de exportación del módulo
│   │   │
│   │   ├── missions/            # Sistema de misiones del usuario
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   └── index.ts
│   │   │
│   │   └── profile/             # Perfil de usuario y progreso
│   │       ├── components/
│   │       ├── pages/
│   │       ├── services/
│   │       ├── hooks/
│   │       ├── types/
│   │       └── index.ts
│   │
│   ├── shared/                  # Código reutilizable entre features
│   │   ├── components/          # Componentes genéricos (botones, inputs, layouts)
│   │   ├── services/            # Servicios comunes (cliente API, utilidades)
│   │   ├── utils/               # Funciones auxiliares
│   │   ├── constants/           # Constantes globales (colores, rutas, claves)
│   │   └── types/               # Tipos globales reutilizables
│   │
│   └── assets/                  # Imágenes, íconos y fuentes
│
├── package.json
├── tsconfig.json
└── README.md
```

## 4. Qué es una feature

Una **feature** es una unidad funcional completa del sistema.  
Incluye todo el código relacionado con una funcionalidad o dominio concreto y puede mantenerse de forma independiente.

Ejemplos de features:
- `auth`: Registro, inicio y cierre de sesión.
- `missions`: Creación, seguimiento y finalización de misiones.
- `profile`: Configuración de perfil, estadísticas y progreso del usuario.

Una feature no equivale a una tarea de Scrum. Las tareas son acciones concretas dentro de una feature existente.

## 5. Estructura interna de una feature

Cada feature tiene la siguiente estructura:

```
featureName/
├── components/      # Componentes UI propios de la feature
├── pages/           # Pantallas completas (si aplica)
├── services/        # Comunicación con el backend
├── hooks/           # Hooks específicos de la feature
├── types/           # Interfaces y tipos propios
└── index.ts         # Exportación de elementos principales
```

### Ejemplo: módulo `missions`
```
missions/
├── components/
│   ├── MissionCard.tsx
│   └── MissionList.tsx
├── pages/
│   └── MissionsPage.tsx
├── services/
│   └── missionsService.ts
├── hooks/
│   └── useMissions.ts
└── types/
    └── Mission.ts

```

## 6. Reutilización de código

El código compartido entre múltiples features se centraliza en el módulo `shared/`.  
Este módulo incluye utilidades, componentes comunes, constantes y servicios base.

Ejemplos:
- `shared/components/Button.tsx`  
    Un botón reutilizable en cualquier parte de la app.
- `shared/services/apiClient.ts`  
    Cliente HTTP común para todas las llamadas al backend.
- `shared/utils/formatDate.ts`  
    Función utilitaria para formatear fechas.

Esto evita duplicación y mantiene la consistencia en el comportamiento general de la aplicación.

## 7. Comunicación con el backend (Node.js API)

Todas las solicitudes HTTP se realizan a través de un cliente común ubicado en `shared/services/apiClient.ts`:

```ts
// shared/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  withCredentials: true,
});

export default apiClient;
// shared/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  withCredentials: true,
});

export default apiClient;

```

Cada feature define sus propios métodos de acceso a endpoints dentro de su carpeta `services/`.  
Ejemplo para autenticación:

```ts
// features/auth/services/authService.ts
import apiClient from '@/shared/services/apiClient';
import { UserCredentials } from '../types/AuthUser';

export const login = async (credentials: UserCredentials) => {
  const { data } = await apiClient.post('/auth/login', credentials);
  return data;
};

export const register = async (userData: UserCredentials) => {
  const { data } = await apiClient.post('/auth/register', userData);
  return data;
};

```

Ejemplo para misiones:

```ts
// features/missions/services/missionsService.ts
import apiClient from '@/shared/services/apiClient';
import { Mission } from '../types/Mission';

export const getUserMissions = async () => {
  const { data } = await apiClient.get<Mission[]>('/missions');
  return data;
};

export const createMission = async (mission: Mission) => {
  const { data } = await apiClient.post('/missions', mission);
  return data;
};
```

En los componentes, las funciones del servicio se utilizan directamente:

```ts
import { getUserMissions } from '@/features/missions/services/missionsService';

async function loadMissions() {
  try {
    const missions = await getUserMissions();
    console.log('Misiones del usuario:', missions);
  } catch (error) {
    console.error('Error al obtener misiones:', error);
  }
}
```

## 8. Flujo de trabajo en desarrollo (Scrum)

Cuando se asigna una tarea, el flujo de trabajo debe seguir los siguientes pasos:
1. **Identificar la feature** a la que pertenece la tarea.  
    Ejemplo: “Agregar validación al registro” → pertenece a `auth`.
2. **Modificar o agregar archivos únicamente dentro de esa feature.**  
    Si algo debe ser usado por más de una feature, se traslada o crea en `shared/`.
3. **Implementar comunicación con el backend** mediante un servicio dentro de la feature, reutilizando `apiClient`.
4. **Probar la funcionalidad de forma aislada** antes de integrarla con otras partes de la aplicación.
5. **Documentar o comentar brevemente** cualquier cambio estructural o nuevo servicio.

## 9. Resumen operativo
- Cada feature es un módulo autónomo del sistema.
- El código compartido se centraliza en `shared/`.
- Todas las llamadas HTTP deben pasar por `apiClient`.
- Ninguna feature debe depender directamente de otra.
- Los servicios, componentes y hooks están contenidos dentro del contexto de su feature.