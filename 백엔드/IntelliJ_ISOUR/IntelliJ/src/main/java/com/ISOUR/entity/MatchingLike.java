package com.ISOUR.entity;


import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="Matching_Like")
@DynamicUpdate
public class MatchingLike {
    @Id
    @Column(name = "Like_User_Id_num")
    private Long LikeUserIdNum;
    @Column(name = "Like_Member_Id_num")
    private Long LiKeMemberIdNum;
    @Column(name = "Like_Time")
    private LocalDateTime LikeTime;

}
