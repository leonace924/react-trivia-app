# React Trivia Quiz App using TypeScript and Tailwind CSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Install & run the development server:

```bash
# clone
git clone https://github.com/leonace924/react-trivia-app.git
cd react-trivia-app

# install
yarn install

# run
yarn dev
```

### Structure

- `components/`: All `React` components to be rendered by `pages`.
- `hooks/`: Global hooks (keep components-related hooks together, here is only for global hooks that are not part of a component).
- `configs/`: Specific configurations. Don't store any `sensitive data` here.
- `lib/`: Constants definitions, we can replace API url with environmental variable in `.env`.
- `pages/`: Pages.
- `redux/`: Redux (slices).
- `routes/`: Whole app routes.
- `styles/`: Global css.
- `types/`: Typescript types.
