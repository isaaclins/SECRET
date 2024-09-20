
# SECRET

## Overview

This project is a web application built with Next.js and Tailwind CSS. It features a series of chapters that users can navigate through, as well as a feedback form that submits user feedback to a Discord channel.

## Project Structure

The project is organized into several main directories:

- `app/`: Contains the main application code, including chapters and feedback pages.
- `components/`: Contains reusable React components.
- `cypress/`: Contains end-to-end tests for the application.
- `lib/`: Contains utility functions and libraries.
- `public/`: Contains static assets like images and fonts.
- `styles/`: Contains global styles and Tailwind CSS configuration.

## Key Features

### Chapters

The chapters are located in the `app/CHAPTERS/` directory. Each chapter is a separate page component:

- [Chapter 1](app/CHAPTERS/1/page.tsx)
- [Chapter 2](app/CHAPTERS/2/page.tsx)
- [Chapter 3](app/CHAPTERS/3/page.tsx)
- [Chapter 4](app/CHAPTERS/4/page.tsx)
- [Chapter 5](app/CHAPTERS/5/page.tsx)

Each chapter page imports custom components like `CustomFooter`, `CustomHeader`, and `CustomScrollBar`.

### Feedback

The feedback form is located in the [app/FEEDBACK/page.tsx](app/FEEDBACK/page.tsx) file. It allows users to submit feedback, which is then sent to a Discord channel using a webhook.

### Cypress Tests

End-to-end tests are written using Cypress and are located in the `cypress/integration/` directory. For example, the [chapters.page.test.tsx](cypress/integration/chapters.page.test.tsx) file contains tests for the chapter links.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server, run:
```sh
npm run dev
# or
yarn dev
```

OR you can start `start.bat`

### Building for Production

To build the project for production, run:
```sh
npm run build
# or
yarn build
```

### Running Tests

To run Cypress tests, use:
```sh
npm run cypress
# or
yarn cypress
```

## Environment Variables

The project uses environment variables for configuration. Create a `.env.local` file in the root directory and add the following variables:

```env
WEBHOOKURL=your_base64_encoded_webhook_url
```

### Why Base64 Encoding?

I've decided to base64 encode the Discord webhook URL because Discord scans the web for their webhooks. By encoding the URL, we add a layer of obfuscation that helps prevent unauthorized access and misuse of the webhook.


## License

This project is licensed under the MIT License.
