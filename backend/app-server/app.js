const { init } = require('./dist/server/app-server');

async function main() {
    await init();
}

main().catch(error => {
    console.error("Failed to start the application:", error);
});
