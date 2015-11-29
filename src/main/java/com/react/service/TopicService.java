package com.react.service;

import com.react.domain.Topic;
import com.react.mapper.TopicMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Wanglei on 15/11/28.
 */
@Service
public class TopicService {
    @Autowired
    private TopicMapper topicMapper;

    public List<Topic> getTopicList(){
        return topicMapper.findTopicList();
    }

    public void addTopic(Topic topic){
        topicMapper.insertTopic(topic);
    }
}
