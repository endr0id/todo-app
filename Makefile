COMPOSE_FILE = ./docker/docker-compose.yml

db:
	cd docker && docker compose up -d

	# DB 起動待ち
	until docker exec todo_db mysqladmin ping --silent; do \
		echo "waiting for mysql..."; \
		sleep 2; \
	done

down:
	cd docker && docker compose down

boot:
	make db
	cd backend/todo && ./gradlew bootRun

code-gen:
	docker compose -f $(COMPOSE_FILE) run --rm openapi-generator \
		generate \
		-i /generator/openapi.yml \
		-o /local/backend \
		-g kotlin-spring \
		--skip-overwrite \
		--additional-properties=interfaceOnly=true,skipDefaultInterface=false,useSpringBoot3=true \
		--api-package com.example.todo.generated.api \
		--model-package com.example.todo.generated.model
		