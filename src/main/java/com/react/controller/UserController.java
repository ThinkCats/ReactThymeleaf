package com.react.controller;

import com.react.domain.User;
import com.react.service.UserServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by Wanglei on 15/11/26.
 */
@Slf4j
@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserServices userServices;

    @RequestMapping(method = RequestMethod.GET)
    public String demoIndex(){
        List<User> userList = userServices.getUserList();
        log.info("======= user list:" + userList);
        return "index";
    }
}
