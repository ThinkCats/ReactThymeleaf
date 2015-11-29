package com.react.mapper;


import com.react.domain.Topic;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Wanglei on 15/11/28.
 */
public interface TopicMapper {
    List<Topic> findTopicList();

    void insertTopic(@Param("topic")Topic topic);
}
