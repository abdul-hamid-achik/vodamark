# VodaMark: Интеллектуальная служба водяных знаков

   // ... (keep the existing content)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (v18 or higher)

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/vodamark.git
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

5. Start the development server:

    ```
    bun run dev
    ```

The application should now be running at `http://localhost:3000`.
