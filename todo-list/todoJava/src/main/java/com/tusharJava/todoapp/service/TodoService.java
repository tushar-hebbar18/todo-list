package com.tusharJava.todoapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tusharJava.todoapp.domain.TodoArray;
import com.tusharJava.todoapp.repo.TodoRepo;

@Service
public class TodoService {

	private TodoRepo todoRepo;
	public List<TodoArray> fetchAllItems() {
		return todoRepo.fetchAllItems();
	 	
	}
}
