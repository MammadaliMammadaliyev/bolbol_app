docker-compose up -d postgres redis elasticsearch && read && docker-compose up -d celery celery_elastic celery_wishlist celery_expire_checker celery_notification && docker-compose up app
