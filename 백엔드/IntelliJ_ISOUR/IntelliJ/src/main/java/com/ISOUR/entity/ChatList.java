package com.ISOUR.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "Chat_List")
public class ChatList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="chatList_num")
    private Long chatListNum;
    private String userId;
    private String chatMemberId;
    private LocalDateTime firstChatTime;
}
