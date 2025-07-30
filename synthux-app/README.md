# SynthUX

SynthUX is an AI-first user testing tool that helps you build better products.

## Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env.local` file in the root of the project and add the following environment variables:

    ```
    # NextAuth.js
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    EMAIL_SERVER=
    EMAIL_FROM=
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=

    # Database
    DATABASE_URL=postgresql://user:password@host:port/database

    # MinIO
    MINIO_ENDPOINT=
    MINIO_PORT=9000
    MINIO_USE_SSL=false
    MINIO_ACCESS_KEY=
    MINIO_SECRET_KEY=

    # Gemini
    GEMINI_API_KEY=
    ```

4.  Create the database tables by running the following command:

    ```bash
    npm run dev
    ```

    Then, open your browser and navigate to `http://localhost:3000/api/create-tables`.

## Usage

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
