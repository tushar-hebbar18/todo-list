package com.tusharJava.todoapp.web;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tusharJava.todoapp.domain.TodoArray;
import com.tusharJava.todoapp.service.TodoService;

@RestController
public class TodoController {
	
	private TodoService todoService;
	@GetMapping("/api/todoItems")
	public ResponseEntity<?> fetchAllItems(){
		List<TodoArray> todoArrayItems = todoService.fetchAllItems();
		return ResponseEntity.ok(todoArrayItems);
	}
}
