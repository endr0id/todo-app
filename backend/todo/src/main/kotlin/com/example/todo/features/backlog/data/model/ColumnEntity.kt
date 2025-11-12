package com.example.todo.features.backlog.data.model

data class ColumnEntity(
    val id: Long,
    val title: String,
    val description: String?,
    val position: Int
)
