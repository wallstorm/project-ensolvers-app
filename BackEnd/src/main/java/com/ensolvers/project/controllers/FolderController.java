package com.ensolvers.project.controllers;

import java.util.ArrayList;

import com.ensolvers.project.models.FolderModel;
import com.ensolvers.project.models.TaskModel;
import com.ensolvers.project.services.FolderService;
import com.ensolvers.project.services.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FolderController {
    
    @Autowired
    FolderService folderService;

    @Autowired
    TaskService taskService;

    @GetMapping("/get")
    public ArrayList<FolderModel> getFolder() {
        return folderService.getFolder();
    }

    @PostMapping("/insert")
    public FolderModel saveFolder(@RequestBody FolderModel folder) {
        return folderService.saveFolder(folder);
    }

    @GetMapping("/query")
    public ArrayList<TaskModel> getTaskByFolder(@RequestParam("folder") String folder) {
        return taskService.getTaskByFolder(folder);
    }

    @PostMapping("/insert/task")
    public TaskModel saveTask(@RequestBody TaskModel task) {

        task.setFolderr(folderService.findByColumnFolder(task.getFolder()));

        return taskService.saveTask(task);
    }

    @DeleteMapping( path = "/{id}" )
    public String deleteById(@PathVariable("id") Long id) {
        boolean ok = folderService.deleteFolder(id);
        if (ok) {
            return "Se eliminó la carpeta con id " + id;
        } else {
            return "No pudo eliminarse la carpeta con id " + id;
        }
    }
}