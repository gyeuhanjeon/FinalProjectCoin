package com.ISOUR.repository;

import com.ISOUR.entity.MemberInfo;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

@SpringBootTest
@Slf4j
class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    // 우리 dnfl ㅡ 나라 skfk ㅡ 미리 alfl
    @Test
    @DisplayName("회원가입 테스트")
    public void signUpTest() {
        String[] ball = new String[] {"", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "십", "십일", "십이", "십삼", "십사", "십오", "십육"};
        String[] MBTI = new String[] {"", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"};
        for(int i = 1; i <= 16; i++) {
            MemberInfo memberInfo = new MemberInfo();
            memberInfo.setName("우리" + ball[i]);
            memberInfo.setId("dnfl" + i);
            memberInfo.setPwd("dkfldkfl");
            memberInfo.setEmail("dnfl" + i + "@dnfl" + i +".com");
            memberInfo.setNickname("닉우리" + ball[i]);
            memberInfo.setGender("여자");
            memberInfo.setBirth("1999-09-09");
            memberInfo.setIntroduce("우리" + ball[i] + "의 자기소개");
            memberInfo.setMbti(MBTI[i]);
            memberInfo.setRegistrationDate(LocalDateTime.now().withNano(0));
            memberRepository.save(memberInfo);
        }
    }

    // 회원가입
    public boolean signUpMember(String name, String id, String pwd, String birth, String gender, String region1, String region2) {
        MemberInfo memberInfo = new MemberInfo();

        memberInfo.setName(name);
        memberInfo.setId(id);
        memberInfo.setPwd(pwd);
        memberInfo.setBirth(birth);
        memberInfo.setGender(gender);
        memberInfo.setRegion1(region1);
        memberInfo.setRegion2(region2);

//        MemberInfo result = memberRepository.save(memberInfo);
//        log.warn(result.toString());
        memberRepository.save(memberInfo);

        return true;
    }

//    16 +
//    32 +
//    48 +
    @Test
    @DisplayName("매칭용회원가입 테스트")
    public void signUpTest_Matching() {
        String[] MBTI = new String[] { "", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP" };
        for(int i = 1; i <= 16; i++) {
            MemberInfo memberInfo = new MemberInfo();
            memberInfo.setName("test" + (16 +i));
            memberInfo.setNickname("testNic" + (16 +i));
            memberInfo.setId("test" + (16 +i));
            memberInfo.setPwd("test" + (16 +i));
            memberInfo.setMbti(MBTI[i]);
            memberInfo.setIntroduce("Im test" + (16 +i) + "입니다.");
            memberInfo.setRegistrationDate(LocalDateTime.now().withNano(0));

            memberRepository.save(memberInfo);
        }
    }
}