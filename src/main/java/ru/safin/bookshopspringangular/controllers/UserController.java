package ru.safin.bookshopspringangular.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.safin.bookshopspringangular.models.User;
import ru.safin.bookshopspringangular.services.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    private final UserService usersService;

    @Autowired
    public UserController(UserService usersService) {
        this.usersService = usersService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return usersService.getAllUsers();
    }

    @PostMapping
    public void createUser(@RequestBody User user) {
        usersService.saveUser(user);
    }
}
