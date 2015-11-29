package com.react.service;

import com.react.common.Constants;
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

    public List<Topic> getTopicList(Integer pageNum){
        int offset = (pageNum - 1) * Constants.PAGE_SIZE;
        return topicMapper.findTopicList(offset,Constants.PAGE_SIZE);
    }

    public void addTopic(Topic topic){
        topicMapper.insertTopic(topic);
    }

    public int getPageCount(){
        int topicCount = topicMapper.findAllValidCount();
        return (topicCount / Constants.PAGE_SIZE) + 1;
    }
}
