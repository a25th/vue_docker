# Vue Tasks SPA

A simple Vue.js single-page application for managing tasks with Docker support.

## Features

- Loads tasks from JSON file
- Marks tasks as completed
- Persists state between page reloads
- Docker container support

## Prerequisites

- Node.js (if running locally without Docker)
- Docker (if using container)

## Installation

### Without Docker

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run serve`

### With Docker

1. Clone the repository
2. Build and run the container:
   ```bash
   docker-compose up --build