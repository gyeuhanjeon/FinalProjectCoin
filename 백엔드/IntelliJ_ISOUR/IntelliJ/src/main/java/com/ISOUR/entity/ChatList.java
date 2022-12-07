package com.ISOUR.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "Chat_List")
public class ChatList {
    @Id
    private String userId;
    private String chatId;
    private LocalDateTime firstChatTime;
}
