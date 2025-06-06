# 🧠 Angular Test – Arquitectura Escalable, DRY y con NGRX

Este proyecto es una demo técnica construida con Angular, enfocada en **principios de arquitectura limpia, reutilización de componentes, manejo de estado con NGRX** y buenas prácticas de diseño. Está pensado como ejemplo realista de cómo escalar una aplicación **modular, mantenible y desacoplada**.

---

## 🚀 ¿Qué muestra este repo?

Una implementación completa de una **feature de usuarios** con:

- 🧩 **Componentes reutilizables** siguiendo _Atomic Design_
- ♻️ Templates reutilizados con `@ViewChild` y estructuras DRY
- 🧠 **Manejo de estado con NGRX**: `store`, `reducer`, `effects` y `facade`
- 📦 **Principios SOLID** aplicados en el diseño
- 💡 **Lazy loading** de rutas por feature
- ⏳ Indicadores de carga con _skeleton loaders_ y renderizado optimizado
- 🔌 Separación estricta de lógica de presentación y de negocio

---

## 🧩 Reutilización y DRY

Uno de los ejes del proyecto es evitar la repetición innecesaria. Algunas estrategias:

- Se abstraen componentes visuales en templates reutilizables.
- Se accede dinámicamente a partes del template usando `@ViewChild`, componiendo estructuras flexibles y reusables.
- Se utilizan wrappers para mostrar loaders o placeholders sin duplicar lógica.

---

## 🗂️ Estructura del proyecto

```plaintext
src/
└── app/
    ├── features/
    │   └── list/
    │       ├── components/
    │       │   ├── list-item/
    │       │   ├── machine-detail/
    │       │   ├── machines-list/
    │       │   ├── user-detail/
    │       │   ├── user-skeleton/
    │       │   └── users-list/
    │       ├── models/
    │       │   ├── machine.model.ts
    │       │   └── user.model.ts
    │       ├── pages/
    │       │   ├── machines-list-page/
    │       │   └── users-list-page/
    │       ├── services/
    │       │   └── users.service.ts
    │       └── store/
    │           ├── actions/
    │           ├── effects/
    │           ├── reducer/
    │           ├── selectors/
    │           └── users.facade.ts
    └── shared/
        └── drawer/
            ├── components/
            ├── service/
            └── layout/
