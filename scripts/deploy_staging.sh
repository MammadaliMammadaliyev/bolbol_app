#!/usr/bin/env sh
./scripts/deploy_staging_db.sh && sleep 5 && ./scripts/deploy_staging_app.sh