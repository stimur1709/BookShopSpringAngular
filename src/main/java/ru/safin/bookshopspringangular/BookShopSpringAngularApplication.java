package ru.safin.bookshopspringangular;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import ru.safin.bookshopspringangular.models.User;
import ru.safin.bookshopspringangular.services.UserService;

import java.util.stream.Stream;

@SpringBootApplication
public class BookShopSpringAngularApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookShopSpringAngularApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserService userService) {
        return args -> {
            Stream.of("John", "Jenifer", "Helen", "Rachel")
                    .forEach(name -> {
                        User user = new User(name, name.toLowerCase() + "@mail.ru");
                        userService.saveUser(user);
                    });
            userService.getAllUsers().forEach(System.out::println);
        };
    }
}
