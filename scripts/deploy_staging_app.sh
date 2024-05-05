#!/usr/bin/env sh
docker-compose -f docker-compose.yml -f docker-compose.staging.yml up -d --build && \
    docker exec -it bolbol_app python manage.py collectstatic --no-input && \
        docker exec -it bolbol_app python manage.py migrate
