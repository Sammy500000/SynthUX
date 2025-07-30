import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const createTables = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255),
        oauth_provider VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS Projects (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES Users(id),
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS Tasks (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES Projects(id),
        description TEXT,
        goal_json JSON
      );

      CREATE TABLE IF NOT EXISTS Logs (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES Projects(id),
        raw_json JSON,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS Screenshots (
        id SERIAL PRIMARY KEY,
        log_id INTEGER REFERENCES Logs(id),
        s3_url VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS Reports (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES Projects(id),
        ai_summary TEXT,
        final_report TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS Fallback (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES Projects(id),
        flagged_flows JSON,
        status VARCHAR(255),
        human_results_json JSON
      );

      CREATE TABLE IF NOT EXISTS Integrations (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES Users(id),
        slack_token VARCHAR(255),
        jira_token VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS Payments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES Users(id),
        credits_balance INTEGER,
        stripe_id VARCHAR(255)
      );
    `);
  } finally {
    client.release();
  }
};

export default pool;
