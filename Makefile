COMPOSE_FILE = ./docker/docker-compose.yml
GENERATE_MODEL = backend/todo/src/main/kotlin/com/example/todo/generated/model/
GENERATE_DOC = backend/todo/docs/

db:
	cd docker && docker compose up -d mysql

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

code-gen-model:
	rm -rf $(GENERATE_DOC) $(GENERATE_MODEL)
	docker compose -f $(COMPOSE_FILE) run --rm openapi-generator \
		generate \
		-g kotlin \
		-i /generator/openapi.yml \
		-o /local/backend/ \
		--global-property=models \
		--additional-properties=dataClasses=true,serializationLibrary=jackson \
		--model-package=com.example.todo.generated.model

code-gen-api:
	docker compose -f $(COMPOSE_FILE) run --rm openapi-generator \
		generate \
		-g kotlin-spring \
		-i /generator/openapi.yml \
		-o /local/backend/ \
		--global-property=apis \
		--additional-properties=useSpringBoot3=true,interfaceOnly=true,reactive=false,skipDefaultInterface=true \
		--api-package=com.example.todo.generated.api \
		--model-package=com.example.todo.generated.model

code-gen:
	make code-gen-model
	make code-gen-api

jooq-code-gen:
	cd backend/todo/ && ./gradlew generateMainJooq