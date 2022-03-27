package com.tusharJava.todoapp.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/api/todoArrayItems")
	public ResponseEntity<?> createNewTodoItem(){
		TodoArray createItem =todoService.createTodoItem();
		return ResponseEntity.ok(createItem);
	}
	
	@PutMapping("/api/todoArrayItems/{id}")
	public ResponseEntity<?> updateItems(@PathVariable Integer id, @RequestBody TodoArray todoArray ){
		TodoArray updatedItem =todoService.updateTodoItem(id,todoArray);
		return ResponseEntity.ok(updatedItem);
	}
}
