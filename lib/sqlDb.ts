import sql from "mssql";

const config = {
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    server: process.env.DB_HOST || "",
    database: process.env.DB_NAME || "",
    port: Number(process.env.DB_PORT || 1434),
    options: { encrypt: false, trustServerCertificate: true }
};

var pool: sql.ConnectionPool | null;

export async function getpool () {
    if (pool && pool.connected) return pool; 
    pool = await sql.connect(config);
    return pool;
}

export async function query<Row = any>(sqlText: string, params?: { [key: string]: any }) {
    const connectionPool = await getpool();
    const request = connectionPool.request();
    if (params) {
        for (const [key, keyValue] of Object.entries(params)) request.input(key, keyValue);
    }
    const result = await request.query<Row>(sqlText);
    return result.recordset;
}