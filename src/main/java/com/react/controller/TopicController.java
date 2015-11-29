package com.react.controller;

import com.react.domain.Topic;
import com.react.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Wanglei on 15/11/28.
 */

@RequestMapping("/topic")
@Controller
public class TopicController {

    @Autowired
    private TopicService topicService;

    @RequestMapping(value = "post",method = RequestMethod.GET)
    public String postTopic(){
        return "topic/post";
    }

    @RequestMapping(value = "list",method = RequestMethod.GET)
    @ResponseBody
    public List<Topic> getTopicList(@RequestParam("pageNum")Integer pageNum){
        return topicService.getTopicList(pageNum);
    }

    @RequestMapping(value = "doPost",method = RequestMethod.POST)
    public String doPost(Topic topic){
        topicService.addTopic(topic);
        return "redirect:/";
    }

    @RequestMapping(value = "pageCount",method = RequestMethod.GET)
    @ResponseBody
    public int getPageCount(){
        return topicService.getPageCount();
    }

}
