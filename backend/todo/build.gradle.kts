plugins {
	kotlin("jvm") version "1.9.25"
	kotlin("plugin.spring") version "1.9.25"
	id("org.springframework.boot") version "3.5.7"
	id("io.spring.dependency-management") version "1.1.7"
	id("nu.studer.jooq") version "10.1.1"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"
description = "To-do app"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-jooq")
	implementation("org.springframework.boot:spring-boot-starter-validation")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.flywaydb:flyway-mysql")
	implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.14")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	runtimeOnly("com.mysql:mysql-connector-j")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")

	// jOOQ 自動生成タスク用に JDBC ドライバを追加
	jooqGenerator("com.mysql:mysql-connector-j:9.4.0")
}

kotlin {
	compilerOptions {
		freeCompilerArgs.addAll("-Xjsr305=strict")
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

jooq {
	version.set("3.19.27")
	configurations {
		create("Main") {
			// コンパイル時 自動生成
			generateSchemaSourceOnCompilation.set(true)

			jooqConfiguration.apply {
				// --------------------
				// JDBC接続情報
				// --------------------
				jdbc.apply {
					driver = "com.mysql.cj.jdbc.Driver"         // JDBCドライバ
					url = "jdbc:mysql://localhost:3306/todo" // DB URL
					user = "local_user"                               // ユーザー名
					password = "password"                       // パスワード
				}

				generator.apply {
					// 生成機のクラス
					name = "org.jooq.codegen.DefaultGenerator"

					// --------------------
					// どのDB/スキーマを生成するか
					// --------------------
					database.apply {
						name = "org.jooq.meta.mysql.MySQLDatabase" // DBの種類
						inputSchema = "todo"                    // 対象スキーマ
						// includeTables = listOf("columns")       // 特定テーブルのみ生成
						// excludeTables = listOf("old_table")     // 除外テーブル
					}

					// --------------------
					// 生成オプション
					// 生成コードのスタイルや種類
					// --------------------
					generate.apply {
						isFluentSetters = true          // セッターを fluent style にする
						isDaos = true                   // DAOクラスを生成するか
						isPojos = true                  // POJO (データクラス) を生成するか
						isImmutablePojos = false        // POJO を不変クラスにするか
						isValidationAnnotations = true  // @NotNull などアノテーションを生成するか
					}

					// --------------------
					// 生成コードの出力先
					// packageNameとdirectoryは合わせる
					// --------------------
					target.apply {
						packageName = "" // パッケージ名
						directory = "src/main/schemas"  // 出力先ディレクトリ
					}
				}
			}
		}
	}
}

// jooq自動生成ディレクトリを識別させる
sourceSets["main"].java.srcDir("src/main/schemas")