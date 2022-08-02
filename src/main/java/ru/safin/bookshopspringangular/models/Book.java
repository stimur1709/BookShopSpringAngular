package ru.safin.bookshopspringangular.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "VARCHAR(255) NOT NULL")
    private String title;

    @Column(columnDefinition = "INT NOT NULL")
    private int price;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "user_id")
    @JsonBackReference
    private User user;
}
