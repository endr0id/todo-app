package com.example.todo.controller

import com.example.todo.features.backlog.application.BacklogService
import com.example.todo.generated.api.BacklogApi
import com.example.todo.generated.model.BacklogResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class BacklogController(
    private val backlogService: BacklogService
) : BacklogApi {

    override fun getBacklog(): ResponseEntity<List<BacklogResponse>> {
        val columns = backlogService.getAllColumns()
        return ResponseEntity.ok(columns)
    }
}