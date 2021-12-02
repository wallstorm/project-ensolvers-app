package com.ensolvers.project.services;

import java.util.ArrayList;

import com.ensolvers.project.models.TaskModel;
import com.ensolvers.project.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    
    @Autowired
    TaskRepository taskRepository;
    
    public TaskModel saveTask(TaskModel task) {
        return taskRepository.save(task);
    }
    public ArrayList<TaskModel> getTask() {
        return (ArrayList<TaskModel>) taskRepository.findAll();
    }
    
}
