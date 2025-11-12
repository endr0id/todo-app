package com.example.todo.features.backlog.data.repository

import com.example.todo.features.backlog.data.model.ColumnEntity

interface BacklogRepository {
    fun findAllColumns(): List<ColumnEntity>
}