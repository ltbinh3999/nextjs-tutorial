const postgres = require('postgres');

const sql = postgres('postgres://neondb_owner:npg_C3ianWX8vGzg@ep-round-frog-a4kixxms-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require', { ssl: 'require' });
async function testConnection() {
    try {
        const result = await sql`SELECT 1+1 AS result`;
        console.log('Connected! Query result:', result);
    } catch (error) {
        console.error('Database connection failed:', error);
    } finally {
        await sql.end(); // Close connection
    }
}

testConnection();
