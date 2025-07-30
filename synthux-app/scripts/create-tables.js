(async () => {
  const { createTables } = await import('../src/lib/db.ts');
  createTables().then(() => {
    console.log('Tables created successfully!');
    process.exit(0);
  }).catch((err) => {
    console.error('Error creating tables:', err);
    process.exit(1);
  });
})();
