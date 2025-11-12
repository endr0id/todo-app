package com.example.todo.features.backlog.application

import com.example.todo.features.backlog.data.repository.BacklogRepository
import com.example.todo.generated.model.BacklogResponse
import org.springframework.stereotype.Service

@Service
class BacklogService(private val backlogrepository: BacklogRepository) {
    fun getAllColumns(): List<BacklogResponse> {
        return backlogrepository.findAllColumns().map { entity ->
            BacklogResponse(
                id = entity.id.toInt(),
                title = entity.title,
                description = entity.description,
                position = entity.position
            )
        }
    }
}