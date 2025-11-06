db:
	cd docker/db && docker compose up -d

	# DB 起動待ち
	until docker exec todo_db mysqladmin ping --silent; do \
		echo "waiting for mysql..."; \
		sleep 2; \
	done

down:
	cd docker/db && docker compose down

boot:
	make db
	cd backend/todo && ./gradlew bootRun