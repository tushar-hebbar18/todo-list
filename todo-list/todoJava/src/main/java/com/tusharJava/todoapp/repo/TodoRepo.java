package com.tusharJava.todoapp.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.tusharJava.todoapp.domain.TodoArray;

@Repository
public class TodoRepo {

	private Integer idCount = 0;
	private List<TodoArray> todoArrayItems = new ArrayList<>();
	public List<TodoArray> fetchAllItems() {
		if(todoArrayItems.size() == 0) {
			TodoArray first = new TodoArray();
			first.setId(idCount++);
			first.setIsDone(false);
			first.setTaskName("Complete tickets");
			todoArrayItems.add(first);
		}
		return todoArrayItems;
	}
}
