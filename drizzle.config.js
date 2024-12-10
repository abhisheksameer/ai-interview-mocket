/** @type { import("drizzle-kit").Config } */
 export default { 
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql: //ai-interview-mocket_owner:************@ep-spring-boat-a57ixhqu.us-east-2.aws.neon.tech/ai-interview-mocket?sslmode=require' , 
     } 
    };