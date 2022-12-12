package com.ISOUR.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@Setter
public class MatchingLikeDTO {
    private Long LikeUserIdNum;
    private Long LiKeMemberIdNum;
    private LocalDateTime LikeTime;
}
