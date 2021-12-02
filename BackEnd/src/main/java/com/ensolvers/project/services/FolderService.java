package com.ensolvers.project.services;

import java.util.ArrayList;
import java.util.Optional;

import com.ensolvers.project.models.FolderModel;
import com.ensolvers.project.repository.FolderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FolderService {
    @Autowired
    FolderRepository folderRepository;

    public ArrayList<FolderModel> getFolder() {
        return (ArrayList<FolderModel>) folderRepository.findAll();
    }

    public FolderModel saveFolder(FolderModel usuario) {
        return folderRepository.save(usuario);
    }

    public Optional<FolderModel> getById(Long id) {
        return folderRepository.findById(id);
    }

    public String findByColumnFolder(String folder) {
        return folderRepository.findByFolder(folder);
    }

    public boolean deleteFolder(Long id) {
        try {
            folderRepository.deleteById(id);
            return true;
        } catch(Exception err) {
            return false;
        }
    }
}
