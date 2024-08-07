package com.example.demo.service;

import com.example.demo.model.User;
import java.util.List;

public interface UserService {
    User create(User user);
    List<User> getAllUser();
    User getUserById(int id);
    boolean updateUser(int id, User user);
    boolean deleteUser(int id);
}
