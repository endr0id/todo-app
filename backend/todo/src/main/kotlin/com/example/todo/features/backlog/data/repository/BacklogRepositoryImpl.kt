package com.example.todo.features.backlog.data.repository

import com.example.todo.features.backlog.data.model.ColumnEntity
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import org.jooq.generated.tables.Columns

@Repository
class BacklogRepositoryImpl(
    private val dsl: DSLContext
) : BacklogRepository {
    override fun findAllColumns(): List<ColumnEntity> {
        val columns = Columns.COLUMNS

        return dsl.select(
            columns.ID,
            columns.TITLE,
            columns.DESCRIPTION,
            columns.POSITION
        )
            .from(columns)
            .orderBy(columns.POSITION.asc())
            .fetch { record ->
                ColumnEntity(
                    id = record.get(columns.ID) ?: 0L,
                    title = record.get(columns.TITLE),
                    description = record.get(columns.DESCRIPTION),
                    position = record.get(columns.POSITION) ?: 0
                )
            }
    }
}