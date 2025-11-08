package com.example.todo.features.backlog.data.repository

import com.example.todo.features.backlog.data.model.ColumnEntity
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Repository

@Repository
class BacklogRepositoryImpl(
    private val jdbcTemplate: JdbcTemplate
) : BacklogRepository {
    override fun findAllColumns(): List<ColumnEntity> {
        val sql = "SELECT id, title, description, position FROM columns ORDER BY position ASC"
        return jdbcTemplate.query(sql) { rs, _ ->
            ColumnEntity(
                id = rs.getLong("id"),
                title = rs.getString("title"),
                description = rs.getString("description"),
                position = rs.getInt("position")
            )
        }
    }
}