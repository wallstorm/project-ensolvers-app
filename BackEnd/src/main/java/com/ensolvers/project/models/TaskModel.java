package com.ensolvers.project.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class TaskModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column
    private String task;

    @Column
    private boolean done;

    @Column
    private String folder;

    @ManyToOne()
    @JoinColumn(name = "task_folder")
    FolderModel folderr;

    public TaskModel(String task, boolean done, String folder) {
        this.task = task;
        this.done = done;
        this.folder = folder;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public boolean getDone() {
        return done;
    }
    
    public void setDone(boolean done) {
        this.done = done;
    }

    public String getFolder() {
        return folder;
    }

    public void setFolder(String folder) {
        this.folder = folder;
    }
    
    public FolderModel getFolderr() {
        return folderr;
    }

    public void setFolderr(FolderModel folder) {
        this.folderr = folder;
    }


}
