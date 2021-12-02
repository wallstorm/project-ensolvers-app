package com.ensolvers.project.repository;

import com.ensolvers.project.models.FolderModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends CrudRepository<FolderModel, Long> {
    public abstract String findByFolder(String folder);
}
