#!/usr/bin/env sh
docker-compose -f docker-compose.yml -f docker-compose.staging.yml up -d postgres redis elasticsearch
