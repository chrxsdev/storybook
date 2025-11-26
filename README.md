# Storybook + React + TypeScript 

This repository is a minimal example showing how to use Storybook with React + TypeScript + Vite. It demonstrates isolated component development and live previews of UI components.

What you'll find here:
- Stories for `Button`, `Header`, `MyLabel`, and `Page` in `src/stories`.
- Simple CSS and an example asset under `src/stories/assets`.

Quick start:
1. Install dependencies:
```
yarn
```
2. Start Storybook (open Storybook to preview components):
```
yarn storybook
```
3. (Optional) Run the app locally with Vite:
```
yarn dev
```

Tips:
- Storybook typically runs on `http://localhost:6006` — open that after starting Storybook.
- Use the stories in `src/stories` to inspect component states, test props, and iterate UI quickly.

This README only describes the example's purpose: a small Storybook setup to learn and test UI components in isolation.
