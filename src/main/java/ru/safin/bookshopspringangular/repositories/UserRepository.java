package ru.safin.bookshopspringangular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.safin.bookshopspringangular.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
