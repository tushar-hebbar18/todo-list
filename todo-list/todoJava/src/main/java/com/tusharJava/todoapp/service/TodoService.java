package com.tusharJava.todoapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tusharJava.todoapp.domain.TodoArray;
import com.tusharJava.todoapp.repo.TodoRepo;

@Service
public class TodoService {

	@Autowired
	private TodoRepo todoRepo;
	public List<TodoArray> fetchAllItems() {
		return todoRepo.fetchAllItems();
	 	
	}
	public TodoArray updateTodoItem(Integer id, TodoArray todoArray) {
		Optional<TodoArray> todoOpt = todoRepo.fetchAllItems()
											.stream()
											.filter(first -> first.getId().equals(id))
											.findAny();
		if(todoOpt.isPresent()) {
			TodoArray first = todoOpt.get();
			first.setIsDone(todoArray.getIsDone());
			first.setTaskName(todoArray.getTaskName());
			return first;
		}
		return null;
	}
}
