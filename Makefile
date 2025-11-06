db:
	cd docker/db && docker compose up -d

down:
	cd docker/db && docker compose down

boot:
	make db
	cd backend/todo && ./gradlew bootRun