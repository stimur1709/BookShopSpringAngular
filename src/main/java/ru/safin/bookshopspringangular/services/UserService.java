package ru.safin.bookshopspringangular.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.safin.bookshopspringangular.models.User;
import ru.safin.bookshopspringangular.repositories.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository usersRepository;

    @Autowired
    public UserService(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public void saveUser(User user) {
        usersRepository.save(user);
    }
}
