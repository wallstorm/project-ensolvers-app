package com.ensolvers.project.repository;

import java.util.ArrayList;

import com.ensolvers.project.models.TaskModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<TaskModel, Long> {
    public abstract ArrayList<TaskModel> findByFolder(String folder);
}

