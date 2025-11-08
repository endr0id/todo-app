package com.example.todo.core.exception

import org.springframework.dao.DataAccessException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class GlobalExceptionHandler {

    // 想定外の例外
    @ExceptionHandler(Exception::class)
    fun handleGenericException(ex: Exception): ResponseEntity<String> {
        return ResponseEntity(
            "Unexpected error: ${ex.message}",
            HttpStatus.INTERNAL_SERVER_ERROR
        )
    }

    // DB接続やSQL実行での例外
    @ExceptionHandler(DataAccessException::class)
    fun handleDatabaseException(ex: DataAccessException): ResponseEntity<String> {
        return ResponseEntity(
            "Database error occurred: ${ex.message}",
            HttpStatus.INTERNAL_SERVER_ERROR
        )
    }
}