#!/usr/bin/env bash
# seed_data.sh
# Description: Seeds the MongoDB database with initial data.

set -e

echo "Seeding database..."
node -e "require('./services/dataSeeder')().then(() => { console.log('Database seeded successfully.'); process.exit(0); }).catch(err => { console.error('Failed to seed database:', err); process.exit(1); });"
