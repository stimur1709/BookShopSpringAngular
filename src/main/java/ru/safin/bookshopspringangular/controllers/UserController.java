package ru.safin.bookshopspringangular.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.safin.bookshopspringangular.models.Book;
import ru.safin.bookshopspringangular.models.User;
import ru.safin.bookshopspringangular.services.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService usersService) {
        this.userService = usersService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public void createUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @GetMapping("/user/{id}")
    public List<Book> getBooksByUser(@PathVariable("id") int id) {
        return userService.getBooksByUser(id);
    }
}
