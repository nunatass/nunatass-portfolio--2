# Next.js Boilerplate with Husky, Tailwind, Prettier, and ESLint
![Next.js Boilerplate](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6jgunckv1lxtwidq4qr8.png)

This project serves as a boilerplate for starting a Next.js project with essential tools and configurations to ensure code quality and consistency. It includes the following plugins and configurations:

- **Husky:** Git hooks made easy to enforce quality checks before committing code.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Prettier:** An opinionated code formatter that ensures consistent code style.
- **ESLint:** A pluggable linting utility for JavaScript and TypeScript.

## Features

- **Commit Message Conventions:** Utilizes Commitlint and Commitizen for standardized commit messages.
- **Linting Rules:**
  - `eslint-config-airbnb`: A set of recommended ESLint rules based on the Airbnb JavaScript style guide.
  - `eslint-config-airbnb-typescript`: Airbnb's ESLint configuration for TypeScript projects.
  - `eslint-config-next`: ESLint configuration specifically tailored for Next.js projects.
  - `eslint-config-prettier`: Disables ESLint rules that conflict with Prettier.
  - Plugins such as `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y`, and others ensure comprehensive linting.
- **Git Hooks:** Husky is used to set up Git hooks, enabling pre-commit checks for linting and formatting.
- **Tailwind CSS Integration:** Tailwind CSS is included and ready to use for styling your Next.js application.

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/nunatass/nextjs-simple-boilerplate
```


Install dependencies:
```bash
npm install
# or
yarn install
```

Begin building your Next.js application with the configured tools and plugins.

# Scripts
- `dev`: Start the Next.js development server.
- `build`: Build the Next.js application for production.
- `start`: Start the production server.
- `lint`: Lint all JavaScript and TypeScript files.
- `lint:fix`: Automatically fix linting issues where possible.
- `format`: Format all JavaScript and TypeScript files using Prettier.



# Contributing
If you have suggestions, enhancements, or issues, feel free to open an issue or submit a pull request. Contributions are welcome!

# License
This project is licensed under the MIT License - see the LICENSE file for details.
