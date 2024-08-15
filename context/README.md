# VodaMark: Интеллектуальная служба водяных знаков

![VodaMark Logo](assets/vodamark-logo.svg)

VodaMark (ВодаМарк) is an advanced, AI-powered watermarking service for images, videos, and live streams. Drawing inspiration from the Russian word for watermark ("водяной знак" - vodyanoy znak), VodaMark offers both visible and invisible watermarking solutions for content creators, streamers, and businesses.

## Project Overview

This repository contains the codebase for VodaMark, an intelligent watermarking service. The project aims to provide a comprehensive solution for protecting digital assets across various media types.

- For a detailed project description, see [PROJECT_DESCRIPTION.md](PROJECT_DESCRIPTION.md)
- For development phases and milestones, see [PROJECT_PHASES.md](PROJECT_PHASES.md)
- For a list of future enhancements and ideas, see [BACKLOG.md](BACKLOG.md)

## Key Features

- AI-generated watermarks for images and videos
- Real-time watermarking for live streams
- Invisible watermarking options
- Multi-platform streaming support (Twitch, YouTube, TikTok, Instagram)
- User management with free and subscription tiers
- Dynamic configuration for on-the-fly watermark adjustments

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v13 or higher)
- [Redis](https://redis.io/) (v6 or higher)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/abdul-hamid-achik/vodamark.git
   cd vodamark
   ```

2. Install dependencies:

   ```
   bun install
   ```

3. Set up environment variables:

   ```
   cp .env.example .env
   ```

   Edit the `.env` file with your configuration details.

4. Start the development environment:

   ```
   docker-compose up -d
   ```

5. Run database migrations:

   ```
   bun run migrate
   ```

6. Start the development server:

   ```
   bun run dev
   ```

The application should now be running at `http://localhost:3000`.

## Development

For detailed information on the development process, please refer to the following documents:

- [PROJECT_PHASES.md](PROJECT_PHASES.md) for the development roadmap
- [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- [BACKLOG.md](BACKLOG.md) for a list of potential future enhancements

### Key Commands

- `bun run dev`: Start the development server
- `bun run build`: Build the application for production
- `bun run start`: Start the production server
- `bun test`: Run unit tests
- `bun run test:e2e`: Run E2E tests with Playwright
- `bun run lint`: Run ESLint
- `bun run format`: Format code with Prettier

## Architecture

VodaMark uses a modern, scalable architecture. Key components include:

- Next.js for the web application
- PostgreSQL for data storage
- Redis for caching
- nginx-rtmp-module for streaming
- Vercel for deployment

For a detailed architecture diagram, see [assets/architecture-diagram.svg](assets/architecture-diagram.svg).

## Streaming Protocols

VodaMark supports multiple streaming protocols. For a comparison of supported protocols, see [assets/streaming-protocols-comparison.md](assets/streaming-protocols-comparison.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
