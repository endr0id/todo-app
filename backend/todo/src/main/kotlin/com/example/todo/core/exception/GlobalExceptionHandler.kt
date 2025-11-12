package com.example.todo.core.exception

import com.example.todo.generated.model.InternalServerError
import org.springframework.dao.DataAccessException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class GlobalExceptionHandler {

    // 想定外の例外
    @ExceptionHandler(Exception::class)
    fun handleGenericException(ex: Exception): ResponseEntity<InternalServerError> {
        val body = InternalServerError(
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR.value(),
            message = ex.message ?: "Internal Server Error"
        )
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body)
    }

    // DB接続やSQL実行での例外
    @ExceptionHandler(DataAccessException::class)
    fun handleDatabaseException(ex: DataAccessException): ResponseEntity<InternalServerError> {
        val body = InternalServerError(
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR.value(),
            message = "Database error occurred: ${ex.message}"
        )
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body)
    }
}