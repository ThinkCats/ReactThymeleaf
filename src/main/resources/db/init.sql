create TABLE topic (
    topic_id bigint(20) not null,
    name varchar(45),
    content varchar(45),
    PRIMARY KEY (topic_id)
);


create TABLE "user" (
    id bigint(20) not null,
    name varchar(45),
    email varchar(45),
    password varchar(45),
    PRIMARY KEY (id)
);