package com.example.todo.features.backlog.data.repository

import com.example.todo.features.backlog.data.model.ColumnEntity
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import org.jooq.generated.tables.Columns
import org.jooq.generated.tables.records.ColumnsRecord

@Repository
class BacklogRepositoryImpl(
    private val dsl: DSLContext
) : BacklogRepository {
    override fun findAllColumns(): List<ColumnEntity> {
        val columns = Columns.COLUMNS

        return dsl.selectFrom(columns)
            .orderBy(columns.POSITION.asc())
            .fetch { it.toEntity() }
    }

    private fun ColumnsRecord.toEntity(): ColumnEntity {
        return ColumnEntity(
            id = this.id,
            title = this.title,
            description = this.description,
            position = this.position
        )
    }
}