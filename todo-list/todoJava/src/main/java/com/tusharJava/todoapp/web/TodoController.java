package com.tusharJava.todoapp.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tusharJava.todoapp.domain.TodoArray;
import com.tusharJava.todoapp.service.TodoService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	@GetMapping("/api/todoArrayItems")
	public ResponseEntity<?> fetchAllItems(){
		List<TodoArray> todoArrayItems = todoService.fetchAllItems();
		return ResponseEntity.ok(todoArrayItems);
	}
}
